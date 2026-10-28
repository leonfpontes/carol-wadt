/**
 * Peças da identidade editorial (preto, branco e um acento dourado).
 * Usadas pelas páginas propostas e pela página de isca.
 */
import { usePublicado } from "@/components/shared/publicacao"
import type { VariantProps } from "class-variance-authority"
import { createContext, useContext, type AnchorHTMLAttributes, type ReactNode } from "react"
import { estiloDoBotao } from "@/components/shared/estilos"
import type { TextoRico } from "@/content/proposta/tipos"
import { cn } from "@/lib/utils"

/** Fundo de uma seção. Os componentes de dentro leem o tom para escolher contraste. */
export type Tom = "escuro" | "tinta" | "claro" | "off"

const TomDaSecao = createContext<Tom>("escuro")
export function useTom() {
  return useContext(TomDaSecao)
}
const ehClaro = (tom: Tom) => tom === "claro" || tom === "off"

const FUNDO: Record<Tom, string> = {
  escuro: "bg-preto text-white",
  tinta: "bg-tinta text-white",
  claro: "bg-white text-preto",
  off: "bg-off text-preto",
}

interface SecaoProps {
  tom: Tom
  id?: string
  children: ReactNode
  estreita?: boolean
  className?: string
  /** Remove o respiro superior quando a seção continua a anterior. */
  semTopo?: boolean
}

export function Secao({ tom, id, children, estreita, className, semTopo }: SecaoProps) {
  return (
    <TomDaSecao.Provider value={tom}>
      <section id={id} className={cn(FUNDO[tom], "scroll-mt-12", className)}>
        <div className={cn("contem pb-16 md:pb-[88px]", semTopo ? "pt-0" : "pt-16 md:pt-[88px]", estreita && "max-w-[720px]")}>
          {children}
        </div>
      </section>
    </TomDaSecao.Provider>
  )
}

export function Rotulo({ children, centro }: { children: ReactNode; centro?: boolean }) {
  return (
    <p
      className={cn(
        "mb-[18px] flex items-center gap-3 text-xs font-extrabold tracking-[0.24em] text-ouro uppercase",
        centro && "justify-center",
      )}
    >
      <span className="losango" aria-hidden="true" />
      {children}
    </p>
  )
}

export function Titulo({ children, className, como: Tag = "h2" }: { children: ReactNode; className?: string; como?: "h1" | "h2" }) {
  return <Tag className={cn("titulo mb-[18px] text-[clamp(1.9rem,4.6vw,2.9rem)]", className)}>{children}</Tag>
}

export function Lide({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("mb-4 max-w-[60ch] text-[1.18rem]", className)}>{children}</p>
}

/** Trecho em itálico dourado, usado para a segunda metade de uma frase de efeito. */
export function Destaque({ children }: { children: ReactNode }) {
  const tom = useTom()
  return <em className={cn("italic", ehClaro(tom) ? "text-ouro-escuro" : "text-ouro-suave")}>{children}</em>
}

/** Marca tracejada para o que depende de confirmação da Carol. */
export function AConfirmarTag({ children }: { children: ReactNode }) {
  const tom = useTom()
  if (usePublicado()) return null
  return (
    <span
      className={cn(
        "inline-block rounded-[3px] border border-dashed border-ouro px-1.5 text-[0.82em] font-bold whitespace-nowrap",
        ehClaro(tom) ? "text-ouro-escuro" : "text-ouro-suave",
      )}
    >
      {children}
    </span>
  )
}

/** Renderiza um `TextoRico`, trocando trechos `{ aConfirmar }` pela marca tracejada. */
export function Rico({ texto }: { texto: TextoRico }) {
  return (
    <>
      {texto.map((parte, i) =>
        typeof parte === "string" ? <span key={i}>{parte}</span> : <AConfirmarTag key={i}>{parte.aConfirmar}</AConfirmarTag>,
      )}
    </>
  )
}

type BotaoCtaProps = AnchorHTMLAttributes<HTMLAnchorElement> & Pick<VariantProps<typeof estiloDoBotao>, "tamanho">

/** Botão principal (link). Escolhe sozinho o contraste a partir do tom da seção. */
export function BotaoCta({ className, tamanho, ...props }: BotaoCtaProps) {
  const tom = useTom()
  const contraste = ehClaro(tom) ? "sobreClaro" : "sobreEscuro"
  return <a className={cn(estiloDoBotao({ contraste, tamanho }), className)} {...props} />
}

/** Link secundário sublinhado em dourado. */
export function LinkSutil({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "text-[15px] font-bold text-inherit underline decoration-ouro underline-offset-4 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ouro-suave",
        className,
      )}
      {...props}
    />
  )
}

export function LinhaDeChamada({ children, centro }: { children: ReactNode; centro?: boolean }) {
  return <div className={cn("mt-[34px] flex flex-wrap items-center gap-x-[22px] gap-y-3.5", centro && "justify-center")}>{children}</div>
}
