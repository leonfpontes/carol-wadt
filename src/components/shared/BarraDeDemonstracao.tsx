import { ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"
import { Link, NavLink } from "react-router"
import { ROTAS } from "@/app/rotas"
import { cn } from "@/lib/utils"

/**
 * Faixa fina no topo de todas as páginas da demonstração: volta para a
 * vitrine e alterna entre "Atual" e "Proposta" da mesma página.
 * Não faz parte do site da Carol; some quando o projeto for publicado
 * (basta não renderizá-la nas rotas finais).
 */
interface BarraDeDemonstracaoProps {
  pagina: "site" | "black"
  /** Conteúdo extra à direita, como o botão de ocultar notas. */
  acoes?: ReactNode
}

const ROTULO_DA_PAGINA = { site: "Site", black: "Black" } as const

export function BarraDeDemonstracao({ pagina, acoes }: BarraDeDemonstracaoProps) {
  const opcoes = [
    { rotulo: "Atual", para: ROTAS.atual[pagina] },
    { rotulo: "Proposta", para: ROTAS.proposta[pagina] },
  ]
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-preto/90 font-sans text-white backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-4 py-2">
        <Link to={ROTAS.vitrine} className="flex items-center gap-1.5 text-xs font-bold whitespace-nowrap text-white/80 hover:text-white">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">Vitrine</span>
        </Link>
        <nav aria-label="Alternar versão" className="flex items-center gap-2 text-xs">
          <span className="hidden font-bold text-white/60 sm:inline">{ROTULO_DA_PAGINA[pagina]}:</span>
          <div className="flex rounded-full border border-white/15 p-0.5">
            {opcoes.map((opcao) => (
              <NavLink
                key={opcao.rotulo}
                to={opcao.para}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-3 py-1 font-bold transition-colors",
                    isActive ? "bg-ouro text-preto" : "text-white/75 hover:text-white",
                  )
                }
              >
                {opcao.rotulo}
              </NavLink>
            ))}
          </div>
        </nav>
        <div className="flex min-w-[52px] justify-end">{acoes}</div>
      </div>
    </div>
  )
}
