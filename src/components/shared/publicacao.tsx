import { createContext, useContext, type ReactNode } from "react"

/**
 * Diz se a página está no ar (site da Carol) ou na demonstração.
 * No ar, somem as peças que só fazem sentido na avaliação: notas, barra de
 * demonstração e as marcas tracejadas de dados que a Carol ainda vai confirmar.
 */
const ContextoDePublicacao = createContext(false)

export function ProvedorDePublicacao({ publicado, children }: { publicado: boolean; children: ReactNode }) {
  return <ContextoDePublicacao.Provider value={publicado}>{children}</ContextoDePublicacao.Provider>
}

export function usePublicado() {
  return useContext(ContextoDePublicacao)
}
