/**
 * Peças da rolagem em forma de apresentação do site oficial: o capítulo
 * (camada que gruda e é coberta pela seguinte) e o sumário lateral, que mostra
 * em que parte da história a pessoa está. O movimento vive em
 * `use-apresentacao.ts` e na classe `.apresentacao` de index.css.
 */
import type { ReactNode } from "react"
import { ancora } from "@/app/rotas"
import { cn } from "@/lib/utils"

const idDoCapitulo = (indice: number) => `capitulo-${indice + 1}`

/** Uma camada da apresentação. Não muda a semântica: as seções de dentro seguem com seus títulos. */
export function Capitulo({ indice, children }: { indice: number; children: ReactNode }) {
  return (
    <div id={idDoCapitulo(indice)} data-capitulo className="capitulo scroll-mt-12">
      {children}
    </div>
  )
}

interface SumarioProps {
  rotulos: string[]
  atual: number
}

/**
 * Sumário fixo à direita, só em telas largas: o número do capítulo atual e um
 * ponto por capítulo. O nome aparece ao lado do ponto no hover ou no foco do
 * teclado, para o sumário caber na margem sem cobrir o conteúdo.
 */
export function SumarioDosCapitulos({ rotulos, atual }: SumarioProps) {
  return (
    <nav
      aria-label="Capítulos da página"
      className="fixed top-1/2 right-3 z-20 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-full bg-legado-marinho/75 px-1.5 py-3 shadow-lg shadow-black/20 ring-1 ring-legado-ouro/25 backdrop-blur lg:flex xl:right-5"
    >
      <span aria-hidden="true" className="font-inter text-[10px] font-semibold tracking-wider text-legado-ouro tabular-nums">
        {String(atual + 1).padStart(2, "0")}
      </span>
      <ol className="flex flex-col items-center">
        {rotulos.map((rotulo, i) => {
          const ativo = i === atual
          return (
            <li key={rotulo}>
              <a
                href={ancora(idDoCapitulo(i))}
                aria-current={ativo ? "location" : undefined}
                className="group relative flex h-5 w-5 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-legado-ouro"
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "block rounded-full transition-all duration-300",
                    ativo ? "h-4 w-1.5 bg-legado-ouro" : "h-1.5 w-1.5 bg-legado-gelo/45 group-hover:bg-legado-gelo",
                  )}
                />
                <span className="pointer-events-none absolute right-full mr-3 rounded-full bg-legado-marinho/90 px-3 py-1 font-inter text-[11px] font-medium tracking-[0.18em] whitespace-nowrap text-legado-gelo uppercase opacity-0 shadow-md ring-1 ring-legado-ouro/25 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="mr-1.5 text-legado-ouro">{String(i + 1).padStart(2, "0")}</span>
                  {rotulo}
                </span>
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
