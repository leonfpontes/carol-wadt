import { useEffect } from "react"

/** Atualiza o título da aba e a descrição da página. */
export function useTitulo(titulo: string, descricao?: string) {
  useEffect(() => {
    document.title = titulo
    if (descricao) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", descricao)
    }
  }, [titulo, descricao])
}
