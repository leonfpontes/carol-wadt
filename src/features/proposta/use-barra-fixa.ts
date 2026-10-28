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
      const passouDoInicio = inicio.getBoundingClientRect().top < 0
      const r = oferta.getBoundingClientRect()
      const ofertaNaTela = r.top < window.innerHeight && r.bottom > 0
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
