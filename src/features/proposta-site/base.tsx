/**
 * Peças de base da proposta do SITE OFICIAL, na identidade do site atual:
 * azul-marinho, azul, creme e dourado, títulos em Playfair e texto em Inter.
 *
 * Regra tipográfica (pedido do Leonardo): todo título de seção usa a mesma
 * fonte e o mesmo estilo (Playfair, sem itálico). Destaque, quando houver, é
 * só de cor, nunca de fonte, para o leitor não estranhar a mistura.
 */
import { createContext, useContext, type AnchorHTMLAttributes, type ReactNode } from "react"
import { cn } from "@/lib/utils"

/** Fundos alternados do site: escuros (marinho, azul) e claros (creme, marfim, gelo). */
export type FundoDoSite = "marinho" | "azul" | "creme" | "marfim" | "gelo"

const FUNDOS: Record<FundoDoSite, string> = {
  marinho: "bg-legado-marinho text-legado-gelo",
  azul: "bg-legado-azul text-legado-gelo",
  creme: "bg-legado-creme text-legado-azul",
  marfim: "bg-legado-marfim text-legado-azul",
  gelo: "bg-legado-gelo text-legado-marinho",
}

const ehEscuro = (fundo: FundoDoSite) => fundo === "marinho" || fundo === "azul"

const ContextoDoFundo = createContext<FundoDoSite>("marinho")

export function useFundo() {
  return useContext(ContextoDoFundo)
}

interface SecaoDoSiteProps {
  fundo: FundoDoSite
  id?: string
  children: ReactNode
  className?: string
}

/** Seção com o fio dourado no topo, marca registrada do site atual. */
export function SecaoDoSite({ fundo, id, children, className }: SecaoDoSiteProps) {
  return (
    <ContextoDoFundo.Provider value={fundo}>
      <section id={id} className={cn("relative scroll-mt-12 overflow-hidden py-20 md:py-28", FUNDOS[fundo], className)}>
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-legado-areia to-transparent"
        />
        <div className="relative z-10 contem-legado">{children}</div>
      </section>
    </ContextoDoFundo.Provider>
  )
}

export function RotuloDoSite({ children, centro = true }: { children: ReactNode; centro?: boolean }) {
  return (
    <p
      className={cn(
        "mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.3em] text-legado-ouro uppercase",
        centro && "justify-center",
      )}
    >
      <span className="h-px w-8 bg-legado-ouro/60" aria-hidden="true" />
      {children}
      <span className="h-px w-8 bg-legado-ouro/60" aria-hidden="true" />
    </p>
  )
}

/** Título de seção: sempre Playfair, sem itálico. */
export function TituloDoSite({ children, className, centro = true }: { children: ReactNode; className?: string; centro?: boolean }) {
  const fundo = useFundo()
  return (
    <h2
      className={cn(
        "mb-5 font-serif text-3xl leading-tight text-balance md:text-4xl lg:text-5xl",
        ehEscuro(fundo) ? "text-legado-gelo" : "text-legado-azul",
        centro && "text-center",
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function ApoioDoSite({ children, className }: { children: ReactNode; className?: string }) {
  const fundo = useFundo()
  return (
    <p
      className={cn(
        "mx-auto max-w-2xl text-center text-lg leading-relaxed",
        ehEscuro(fundo) ? "text-legado-gelo/75" : "text-legado-azul/75",
        className,
      )}
    >
      {children}
    </p>
  )
}

const BOTAO_BASE =
  "inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-legado-ouro md:text-base"

/** Botão do site: dourado sobre fundo escuro, azul sobre fundo claro (os gradientes do site atual). */
export function BotaoDoSite({ className, destaque, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { destaque?: boolean }) {
  const fundo = useFundo()
  const estilo =
    destaque || ehEscuro(fundo)
      ? "bg-gradient-to-r from-legado-ouro to-legado-ouro-escuro text-legado-marinho shadow-lg shadow-legado-ouro/20 hover:shadow-xl hover:shadow-legado-ouro/30"
      : "bg-gradient-to-r from-legado-azul to-legado-azul-medio text-white shadow-lg shadow-legado-azul/20 hover:shadow-xl hover:shadow-legado-azul/30"
  return <a className={cn(BOTAO_BASE, estilo, className)} {...props} />
}

/** Ícone dentro de um círculo dourado translúcido, como no site atual. */
export function IconeEmCirculo({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("flex h-12 w-12 flex-none items-center justify-center rounded-full bg-legado-ouro/15 text-legado-ouro ring-1 ring-legado-ouro/30", className)}>
      {children}
    </div>
  )
}


