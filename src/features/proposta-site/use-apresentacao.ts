import { useLayoutEffect, useState, type RefObject } from "react"

/**
 * Motor da rolagem em forma de apresentação do site oficial.
 *
 * Não anima nada sozinho: a cada quadro de rolagem, mede os elementos marcados
 * com `data-cena` e escreve neles variáveis CSS de 0 a 1. Cada capítulo usa as
 * variáveis do jeito dele (classes `cena-*` em index.css), por isso cada parte
 * da história tem um movimento diferente.
 *
 *  - `--entrada`: 0 com o topo do elemento no rodapé da tela, 1 quando ele chega a 35% do alto.
 *  - `--saida`: 0 com o topo no alto da tela, 1 quando o elemento inteiro já passou.
 *  - `--progresso`: 0 quando ele começa a aparecer, 1 quando acaba de sair (paralaxe).
 *  - `--percurso`: quanto do elemento já cruzou a linha de 60% da tela (linhas que se desenham).
 *  - `--leitura`: avança enquanto o topo vai de 85% a 35% da tela (texto que acende).
 *
 * Palcos laterais (`data-cena="lateral"`) prendem a tela e convertem a rolagem
 * vertical em deslocamento horizontal do trilho (`data-trilho`): o motor dá ao
 * palco a altura certa e escreve `--p` e `--deslocamento`.
 *
 * Com "reduzir movimento" ligado, o motor não escreve nada e o CSS não aplica
 * nenhum efeito: a página fica com o layout comum, estático.
 *
 * Também devolve o capítulo atual (`[data-capitulo]`), para o sumário lateral.
 */
export function useApresentacao(refDaApresentacao: RefObject<HTMLElement | null>) {
  const [atual, setAtual] = useState(0)

  // Layout effect: o primeiro quadro já sai calculado, sem piscar o estado final antes do inicial.
  useLayoutEffect(() => {
    const raiz = refDaApresentacao.current
    if (!raiz) return
    const movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)")
    const ultimos = new WeakMap<HTMLElement, Record<string, string>>()
    let quadro = 0

    function escrever(el: HTMLElement, nome: string, valor: string) {
      const anteriores = ultimos.get(el) ?? {}
      if (anteriores[nome] === valor) return
      anteriores[nome] = valor
      ultimos.set(el, anteriores)
      el.style.setProperty(nome, valor)
    }

    function medirPalcos() {
      for (const palco of raiz!.querySelectorAll<HTMLElement>('[data-cena="lateral"]')) {
        const trilho = palco.querySelector<HTMLElement>("[data-trilho]")
        if (movimentoReduzido.matches || !trilho) {
          palco.style.height = ""
          continue
        }
        const distancia = Math.max(0, trilho.scrollWidth - (trilho.parentElement?.clientWidth ?? window.innerWidth))
        palco.style.height = `${window.innerHeight + distancia}px`
        escrever(palco, "--deslocamento", `${distancia}px`)
      }
    }

    function atualizar() {
      quadro = 0
      const altura = window.innerHeight
      if (!movimentoReduzido.matches) {
        for (const el of raiz!.querySelectorAll<HTMLElement>("[data-cena]")) {
          const r = el.getBoundingClientRect()
          if (el.dataset.cena === "lateral") {
            escrever(el, "--p", fixo(-r.top / Math.max(1, r.height - altura)))
            continue
          }
          escrever(el, "--entrada", fixo((altura - r.top) / (altura * 0.65)))
          escrever(el, "--saida", fixo(-r.top / Math.max(1, r.height)))
          escrever(el, "--progresso", fixo((altura - r.top) / (altura + r.height)))
          escrever(el, "--percurso", fixo((altura * 0.6 - r.top) / Math.max(1, r.height)))
          escrever(el, "--leitura", fixo((altura * 0.85 - r.top) / (altura * 0.5)))
        }
      }
      let indiceAtual = 0
      raiz!.querySelectorAll<HTMLElement>(":scope > [data-capitulo]").forEach((capitulo, i) => {
        if (capitulo.getBoundingClientRect().top <= altura * 0.4) indiceAtual = i
      })
      setAtual(indiceAtual)
    }

    const agendar = () => {
      if (!quadro) quadro = requestAnimationFrame(atualizar)
    }
    const remedir = () => {
      medirPalcos()
      agendar()
    }

    const observador = new ResizeObserver(remedir)
    observador.observe(raiz)
    medirPalcos()
    atualizar()
    window.addEventListener("scroll", agendar, { passive: true })
    window.addEventListener("resize", remedir)
    movimentoReduzido.addEventListener("change", remedir)
    return () => {
      cancelAnimationFrame(quadro)
      observador.disconnect()
      window.removeEventListener("scroll", agendar)
      window.removeEventListener("resize", remedir)
      movimentoReduzido.removeEventListener("change", remedir)
    }
  }, [refDaApresentacao])

  return atual
}

/** Limita a 0..1 e arredonda, para não reescrever o estilo por diferenças invisíveis. */
const fixo = (valor: number) => Math.min(1, Math.max(0, valor)).toFixed(3)
