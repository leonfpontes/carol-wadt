import { useEffect, useState, type RefObject } from "react"

/**
 * Rolagem em forma de apresentação no site oficial.
 *
 * Cada capítulo (`[data-capitulo]`, filho direto do contêiner) gruda na tela
 * quando o fim dele chega ao rodapé da janela, e o capítulo seguinte sobe por
 * cima, como um slide sobre o outro. Enquanto é coberto, o capítulo de baixo
 * recua (encolhe e escurece), o que dá a sensação de profundidade.
 *
 * O CSS (`.apresentacao` em index.css) faz o efeito; este hook só mede e
 * alimenta três variáveis por capítulo:
 *  - `--topo`: onde ele gruda (negativo nos capítulos mais altos que a tela,
 *    para a pessoa ler o capítulo inteiro antes de ele parar);
 *  - `--origem`: o centro da parte visível, de onde ele encolhe;
 *  - `--cobertura`: de 0 a 1, quanto o capítulo seguinte já o cobriu.
 *
 * Com "reduzir movimento" ligado no sistema, nada gruda nem encolhe: a página
 * rola reta e o hook só informa o capítulo atual (para o sumário lateral).
 */
export function useApresentacao(refDaApresentacao: RefObject<HTMLElement | null>) {
  const [atual, setAtual] = useState(0)

  useEffect(() => {
    const raiz = refDaApresentacao.current
    if (!raiz) return
    const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)")
    const capitulos = () => Array.from(raiz.querySelectorAll<HTMLElement>(":scope > [data-capitulo]"))
    let quadro = 0

    function medir() {
      const altura = window.innerHeight
      for (const capitulo of capitulos()) {
        const h = capitulo.offsetHeight
        capitulo.style.setProperty("--topo", `${Math.min(0, altura - h)}px`)
        capitulo.style.setProperty("--origem", `${h <= altura ? h / 2 : h - altura / 2}px`)
      }
    }

    function atualizar() {
      quadro = 0
      const altura = window.innerHeight
      const lista = capitulos()
      let indiceAtual = 0
      lista.forEach((capitulo, i) => {
        const seguinte = lista[i + 1]
        const cobertura = seguinte && !movimentoReduzido.matches ? limitar((altura - seguinte.getBoundingClientRect().top) / altura) : 0
        capitulo.style.setProperty("--cobertura", cobertura.toFixed(3))
        if (capitulo.getBoundingClientRect().top <= altura * 0.4) indiceAtual = i
      })
      setAtual(indiceAtual)
    }

    const agendar = () => {
      if (!quadro) quadro = requestAnimationFrame(atualizar)
    }
    const remedir = () => {
      medir()
      agendar()
    }

    // Âncoras (#oferta, #metodo...): com capítulos grudados, a posição na tela
    // não é a posição na página, então calculamos o destino pelo fluxo.
    function aoClicar(evento: MouseEvent) {
      if (movimentoReduzido.matches || evento.defaultPrevented || evento.button !== 0) return
      if (evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey) return
      const link = (evento.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]')
      const id = link ? decodeURIComponent(link.getAttribute("href")!.slice(1)) : ""
      const alvo = id ? document.getElementById(id) : null
      const destino = alvo && posicaoNoFluxo(raiz!, alvo)
      if (destino === null || destino === undefined) return
      evento.preventDefault()
      window.scrollTo({ top: destino, behavior: "smooth" })
      history.pushState(null, "", `#${id}`)
    }

    const observador = new ResizeObserver(remedir)
    capitulos().forEach((capitulo) => observador.observe(capitulo))
    remedir()
    window.addEventListener("scroll", agendar, { passive: true })
    window.addEventListener("resize", remedir)
    movimentoReduzido.addEventListener("change", remedir)
    document.addEventListener("click", aoClicar)
    return () => {
      cancelAnimationFrame(quadro)
      observador.disconnect()
      window.removeEventListener("scroll", agendar)
      window.removeEventListener("resize", remedir)
      movimentoReduzido.removeEventListener("change", remedir)
      document.removeEventListener("click", aoClicar)
    }
  }, [refDaApresentacao])

  return atual
}

const limitar = (valor: number) => Math.min(1, Math.max(0, valor))

/**
 * Posição de rolagem que leva `alvo` ao topo, ignorando o "grudar" dos
 * capítulos: soma a altura dos capítulos anteriores e a distância do alvo
 * dentro do próprio capítulo. Devolve null se o alvo não está na apresentação.
 */
function posicaoNoFluxo(raiz: HTMLElement, alvo: HTMLElement): number | null {
  const capitulo = alvo.closest<HTMLElement>("[data-capitulo]")
  if (!capitulo || capitulo.parentElement !== raiz) return null
  let topo = raiz.getBoundingClientRect().top + window.scrollY
  for (let anterior = capitulo.previousElementSibling; anterior; anterior = anterior.previousElementSibling) {
    topo += (anterior as HTMLElement).offsetHeight
  }
  // offsetTop não sofre o efeito da escala do capítulo coberto.
  for (let el: HTMLElement | null = alvo; el && el !== capitulo; el = el.offsetParent as HTMLElement | null) {
    topo += el.offsetTop
  }
  return Math.max(0, topo - parseFloat(getComputedStyle(alvo).scrollMarginTop || "0"))
}
