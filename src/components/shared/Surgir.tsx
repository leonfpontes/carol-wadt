import type { ReactNode } from "react"
import { useVisivel } from "@/hooks/use-visivel"
import { cn } from "@/lib/utils"

interface SurgirProps {
  children: ReactNode
  className?: string
  /** Atraso em milissegundos, para itens de uma grade entrarem em sequência. */
  atraso?: number
}

/** Envolve um bloco que sobe e aparece quando entra na tela. */
export function Surgir({ children, className, atraso = 0 }: SurgirProps) {
  const { ref, visivel } = useVisivel<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={cn(visivel ? "animate-surgir" : "opacity-0", className)}
      style={atraso ? { animationDelay: `${atraso}ms` } : undefined}
    >
      {children}
    </div>
  )
}
