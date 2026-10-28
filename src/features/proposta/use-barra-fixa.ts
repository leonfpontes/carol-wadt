import { useEffect, useState } from "react"

/**
 * Decide quando a barra fixa de compra aparece no celular:
 * depois que a pessoa passou do início (`idInicio`) e enquanto a oferta não está na tela.
 */
export function useBarraFixa(idInicio: string, idOferta: string) {
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    function avaliar() {
      const inicio = document.getElementById(idInicio)
      const oferta = document.getElementById(idOferta)
      if (!inicio || !oferta) return
      const altura = window.innerHeight
      const passouDoInicio = inicio.getBoundingClientRect().top < 0 || topoDoCapituloSeguinte(inicio) < altura
      const r = oferta.getBoundingClientRect()
      // No site em apresentação, a oferta continua "na tela" depois de coberta pelo capítulo seguinte.
      const ofertaNaTela = r.top < Math.min(altura, topoDoCapituloSeguinte(oferta)) && r.bottom > 0
      setVisivel(passouDoInicio && !ofertaNaTela)
    }
    avaliar()
    window.addEventListener("scroll", avaliar, { passive: true })
    window.addEventListener("resize", avaliar)
    return () => {
      window.removeEventListener("scroll", avaliar)
      window.removeEventListener("resize", avaliar)
    }
  }, [idInicio, idOferta])

  return visivel
}

/**
 * Topo, na tela, do capítulo que vem depois do que contém o elemento, na
 * rolagem em apresentação do site (capítulos grudam e são cobertos).
 * Fora da apresentação (Black, réplicas) devolve infinito e não muda nada.
 */
function topoDoCapituloSeguinte(elemento: Element) {
  const seguinte = elemento.closest("[data-capitulo]")?.nextElementSibling
  return seguinte ? seguinte.getBoundingClientRect().top : Infinity
}
