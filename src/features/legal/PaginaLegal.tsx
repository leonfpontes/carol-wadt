import { ArrowLeft } from "lucide-react"
import { Link } from "react-router"
import { Rico, Secao } from "@/components/shared/editorial"
import type { DocumentoLegal } from "@/content/legal/documentos"
import { useTitulo } from "@/hooks/use-titulo"
import { cn } from "@/lib/utils"

interface PaginaLegalProps {
  documento: DocumentoLegal
  voltarPara: string
  /** "atual" usa o visual do site de hoje; "proposta", o editorial. */
  versao: "atual" | "proposta"
}

/** Página de texto legal (Privacidade ou Termos), nas duas identidades. */
export function PaginaLegal({ documento, voltarPara, versao }: PaginaLegalProps) {
  useTitulo(`${documento.titulo} · Carolina Wadt`)
  const atual = versao === "atual"
  return (
    <div className={cn("min-h-screen", atual ? "bg-white font-inter text-legado-marinho" : "bg-off text-preto")}>
      <Secao tom={atual ? "claro" : "off"} estreita className={atual ? "bg-white" : undefined}>
        <Link to={voltarPara} className="mb-8 inline-flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Voltar para o início
        </Link>
        {documento.aviso && (
          <p className="mb-6 rounded border border-nota-borda bg-nota px-3.5 py-2.5 text-[13.5px] text-nota-tinta">{documento.aviso}</p>
        )}
        <h1 className="titulo mb-8 text-3xl md:text-4xl">{documento.titulo}</h1>
        <div className="space-y-8 opacity-85">
          <p className="text-lg leading-relaxed">{documento.introducao}</p>
          {documento.secoes.map((secao) => (
            <section key={secao.titulo} className="space-y-4">
              <h2 className="titulo text-xl">{secao.titulo}</h2>
              {secao.paragrafos?.map((p, i) => (
                <p key={i}>
                  <Rico texto={p} />
                </p>
              ))}
              {secao.itens && (
                <ul className="list-disc space-y-2 pl-6">
                  {secao.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <p className="border-t border-black/10 pt-8 text-sm">Última atualização: {documento.atualizadoEm}</p>
        </div>
      </Secao>
    </div>
  )
}
