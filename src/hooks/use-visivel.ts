import { useEffect, useRef, useState } from "react"

/**
 * Diz se o elemento já apareceu na tela (uma vez só).
 * Usado para a animação de entrada que o site atual faz ao rolar a página.
 */
export function useVisivel<T extends Element>(margem = "0px 0px -10% 0px") {
  const ref = useRef<T>(null)
  // Sem IntersectionObserver (navegadores muito antigos), mostra tudo de uma vez.
  const [visivel, setVisivel] = useState(() => typeof IntersectionObserver === "undefined")

  useEffect(() => {
    const elemento = ref.current
    if (!elemento || visivel) return
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          observador.disconnect()
        }
      },
      { rootMargin: margem },
    )
    observador.observe(elemento)
    return () => observador.disconnect()
  }, [margem, visivel])

  return { ref, visivel }
}
