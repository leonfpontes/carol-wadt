import { Fragment, type ReactNode } from "react"
import { ANCORAS } from "@/app/rotas"
import { BarraDeDemonstracao } from "@/components/shared/BarraDeDemonstracao"
import { AlternadorDeNotas, ProvedorDeNotas } from "@/components/shared/notas"
import type { ConteudoDoSiteProposto } from "@/content/proposta/tipos-site"
import { BarraFixaDoSite, DuvidasDoSite, InscricaoDoSite, MaterialDoSite, RodapeDoSite } from "@/features/proposta-site/secoes-fim"
import { DepoimentosDoSite, MentoraDoSite, NaoEhParaDoSite, ParaQuemDoSite, TrilhaDoSite } from "@/features/proposta-site/secoes-meio"
import { CapaDoSite, DoresDoSite, PilaresDoSite, ResultadosDoSite } from "@/features/proposta-site/secoes-topo"
import { useBarraFixa } from "@/features/proposta/use-barra-fixa"
import { useTitulo } from "@/hooks/use-titulo"

/**
 * Ordem das seções da proposta do site oficial.
 *
 * Os fundos alternam escuro e claro, como no site atual:
 * capa (marinho) · dores (creme) · resultados (azul) · pilares (creme) ·
 * para quem (marinho) · não é para (marfim) · trilha (azul) · Carolina (gelo) ·
 * depoimentos (marinho) · inscrição (creme) · dúvidas (marinho) ·
 * material (creme) · rodapé (marinho).
 * Reordenar ou incluir uma seção é mexer só nesta lista.
 */
type Renderizador = (c: ConteudoDoSiteProposto) => ReactNode

const SECOES: Renderizador[] = [
  (c) => <CapaDoSite conteudo={c.capa} botao={c.botaoPrincipal} />,
  (c) => <DoresDoSite conteudo={c.dores} botao={c.botaoPrincipal} />,
  (c) => <ResultadosDoSite conteudo={c.resultados} botao={c.botaoPrincipal} />,
  (c) => <PilaresDoSite conteudo={c.pilares} botao={c.botaoPrincipal} />,
  (c) => <ParaQuemDoSite conteudo={c.paraQuem} botao={c.botaoPrincipal} />,
  (c) => <NaoEhParaDoSite conteudo={c.naoEhPara} botao={c.botaoPrincipal} />,
  (c) => <TrilhaDoSite conteudo={c.trilha} botao={c.botaoPrincipal} />,
  (c) => <MentoraDoSite conteudo={c.mentora} botao={c.botaoPrincipal} />,
  (c) => <DepoimentosDoSite conteudo={c.depoimentos} botao={c.botaoPrincipal} />,
  (c) => <InscricaoDoSite conteudo={c.inscricao} botao={c.botaoPrincipal} />,
  (c) => <DuvidasDoSite conteudo={c.duvidas} botao={c.botaoPrincipal} />,
  (c) => <MaterialDoSite conteudo={c.material} botao={c.botaoPrincipal} />,
  (c) => <RodapeDoSite conteudo={c.rodape} botao={c.botaoPrincipal} />,
]

export function PaginaDoSiteProposto({ conteudo }: { conteudo: ConteudoDoSiteProposto }) {
  useTitulo(conteudo.meta.titulo, conteudo.meta.descricao)
  const barraVisivel = useBarraFixa("para-voce", ANCORAS.oferta)

  return (
    <ProvedorDeNotas>
      <BarraDeDemonstracao pagina="site" acoes={<AlternadorDeNotas className="px-3 py-1 shadow-none" />} />
      <div className="bg-legado-ouro px-4 py-2.5 text-center font-inter text-[13px] font-semibold text-legado-marinho">
        {conteudo.faixaDaProposta.titulo} <span className="font-normal">{conteudo.faixaDaProposta.apoio}</span>
      </div>
      <main className="font-inter text-base leading-normal">
        {SECOES.map((renderizar, i) => (
          <Fragment key={i}>{renderizar(conteudo)}</Fragment>
        ))}
      </main>
      <BarraFixaDoSite conteudo={conteudo.barraFixa} visivel={barraVisivel} />
    </ProvedorDeNotas>
  )
}
