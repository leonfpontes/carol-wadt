import { createContext, useContext, useMemo, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Notas de melhoria: os quadros amarelos que explicam à Carol o que mudou.
 * Um contexto controla se aparecem, para a demonstração poder mostrar a
 * página "limpa", como ficaria publicada.
 */
interface EstadoDasNotas {
  visiveis: boolean
  alternar: () => void
}

const ContextoDasNotas = createContext<EstadoDasNotas>({ visiveis: true, alternar: () => {} })

export function ProvedorDeNotas({ children }: { children: ReactNode }) {
  const [visiveis, setVisiveis] = useState(true)
  const valor = useMemo(() => ({ visiveis, alternar: () => setVisiveis((v) => !v) }), [visiveis])
  return <ContextoDasNotas.Provider value={valor}>{children}</ContextoDasNotas.Provider>
}

export function useNotas() {
  return useContext(ContextoDasNotas)
}

export function NotaDeMelhoria({ children, className }: { children?: ReactNode; className?: string }) {
  const { visiveis } = useNotas()
  if (!children || !visiveis) return null
  return (
    <aside
      className={cn(
        "mb-[26px] block max-w-[72ch] rounded border border-nota-borda bg-nota px-3.5 py-2.5 text-[13.5px] leading-normal text-nota-tinta",
        className,
      )}
    >
      <b className="mr-1.5 text-[11px] font-extrabold tracking-[0.06em] uppercase">Melhoria</b>
      {children}
    </aside>
  )
}

/** Botão que liga e desliga as notas. */
export function AlternadorDeNotas({ className }: { className?: string }) {
  const { visiveis, alternar } = useNotas()
  return (
    <button
      type="button"
      onClick={alternar}
      aria-pressed={!visiveis}
      className={cn(
        "rounded-full border border-nota-borda bg-nota px-3.5 py-2 text-xs font-bold text-nota-tinta shadow-[0_4px_16px_rgba(0,0,0,0.25)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ouro-suave",
        className,
      )}
    >
      {visiveis ? "Ocultar notas" : "Mostrar notas"}
    </button>
  )
}
