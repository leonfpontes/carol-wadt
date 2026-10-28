import { Fragment, type ReactNode } from "react"
import { ANCORAS, ancora } from "@/app/rotas"
import { servicos } from "@/app/servicos"
import { BarraDeDemonstracao } from "@/components/shared/BarraDeDemonstracao"
import { AlternadorDeNotas, ProvedorDeNotas } from "@/components/shared/notas"
import { ProvedorDePublicacao } from "@/components/shared/publicacao"
import type { ConteudoDoSiteProposto } from "@/content/proposta/tipos-site"
import { BarraFixaDoSite, DuvidasDoSite, InscricaoDoSite, MaterialDoSite, RodapeDoSite } from "@/features/proposta-site/secoes-fim"
import { DepoimentosDoSite, EspecialistasDoSite, MentoraDoSite, NaoEhParaDoSite, ParaQuemDoSite, TrilhaDoSite } from "@/features/proposta-site/secoes-meio"
import { CapaDoSite, DoresDoSite, PilaresDoSite, ResultadosDoSite } from "@/features/proposta-site/secoes-topo"
import { useBarraFixa } from "@/features/proposta/use-barra-fixa"
import { useTitulo } from "@/hooks/use-titulo"

/**
 * Ordem das seções da proposta do site oficial.
 *
 * Os fundos alternam escuro e claro, como no site atual:
 * capa (marinho) · dores (creme) · resultados (azul) · pilares (creme) ·
 * para quem (marinho) · não é para (marfim) · trilha e especialistas (azul) · Carolina (gelo) ·
 * depoimentos (marinho) · inscrição (creme) · dúvidas (marinho) ·
 * material (creme) · rodapé (marinho).
 * Reordenar ou incluir uma seção é mexer só nesta lista.
 */
type Renderizador = (c: ConteudoDoSiteProposto) => ReactNode

/** Material gratuito: guardado à parte porque sai do ar enquanto os leads não têm destino real. */
const MATERIAL: Renderizador = (c) => <MaterialDoSite conteudo={c.material} botao={c.botaoPrincipal} />

const SECOES: Renderizador[] = [
  (c) => <CapaDoSite conteudo={c.capa} botao={c.botaoPrincipal} />,
  (c) => <DoresDoSite conteudo={c.dores} botao={c.botaoPrincipal} />,
  (c) => <ResultadosDoSite conteudo={c.resultados} botao={c.botaoPrincipal} />,
  (c) => <PilaresDoSite conteudo={c.pilares} botao={c.botaoPrincipal} />,
  (c) => <ParaQuemDoSite conteudo={c.paraQuem} botao={c.botaoPrincipal} />,
  (c) => <NaoEhParaDoSite conteudo={c.naoEhPara} botao={c.botaoPrincipal} />,
  (c) => <TrilhaDoSite conteudo={c.trilha} botao={c.botaoPrincipal} />,
  (c) => <EspecialistasDoSite conteudo={c.especialistas} botao={c.botaoPrincipal} />,
  (c) => <MentoraDoSite conteudo={c.mentora} botao={c.botaoPrincipal} />,
  (c) => <DepoimentosDoSite conteudo={c.depoimentos} botao={c.botaoPrincipal} />,
  (c) => <InscricaoDoSite conteudo={c.inscricao} botao={c.botaoPrincipal} />,
  (c) => <DuvidasDoSite conteudo={c.duvidas} botao={c.botaoPrincipal} />,
  MATERIAL,
  (c) => <RodapeDoSite conteudo={c.rodape} botao={c.botaoPrincipal} />,
]

interface PaginaDoSitePropostoProps {
  conteudo: ConteudoDoSiteProposto
  /** No ar (carolinawadt.com): sem barra de demonstração, faixa da proposta e notas. */
  publicado?: boolean
}

export function PaginaDoSiteProposto({ conteudo, publicado = false }: PaginaDoSitePropostoProps) {
  useTitulo(conteudo.meta.titulo, conteudo.meta.descricao)
  const barraVisivel = useBarraFixa("para-voce", ANCORAS.oferta)
  // Sem destino real para os leads, o formulário de material só existe na demonstração.
  const comMaterial = !publicado || !servicos.emDemonstracao
  const pagina = comMaterial ? conteudo : semMaterialNoRodape(conteudo)

  return (
    <ProvedorDePublicacao publicado={publicado}>
      <ProvedorDeNotas visiveisNoInicio={!publicado}>
        {!publicado && (
          <>
            <BarraDeDemonstracao pagina="site" acoes={<AlternadorDeNotas className="px-3 py-1 shadow-none" />} />
            <div className="bg-legado-ouro px-4 py-2.5 text-center font-inter text-[13px] font-semibold text-legado-marinho">
              {conteudo.faixaDaProposta.titulo} <span className="font-normal">{conteudo.faixaDaProposta.apoio}</span>
            </div>
          </>
        )}
        <main className="font-inter text-base leading-normal">
          {SECOES.filter((secao) => comMaterial || secao !== MATERIAL).map((renderizar, i) => (
            <Fragment key={i}>{renderizar(pagina)}</Fragment>
          ))}
        </main>
        <BarraFixaDoSite conteudo={conteudo.barraFixa} visivel={barraVisivel} />
      </ProvedorDeNotas>
    </ProvedorDePublicacao>
  )
}

function semMaterialNoRodape(conteudo: ConteudoDoSiteProposto): ConteudoDoSiteProposto {
  const destinoDoMaterial = ancora(ANCORAS.material)
  const colunas = conteudo.rodape.colunas.map((coluna) => ({
    ...coluna,
    links: coluna.links.filter((link) => !("destino" in link) || link.destino !== destinoDoMaterial),
  }))
  return { ...conteudo, rodape: { ...conteudo.rodape, colunas } }
}
