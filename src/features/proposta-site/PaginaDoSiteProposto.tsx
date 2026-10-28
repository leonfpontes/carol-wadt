import { Fragment, useRef, type ReactNode } from "react"
import { ANCORAS, ancora } from "@/app/rotas"
import { servicos } from "@/app/servicos"
import { BarraDeDemonstracao } from "@/components/shared/BarraDeDemonstracao"
import { AlternadorDeNotas, ProvedorDeNotas } from "@/components/shared/notas"
import { ProvedorDePublicacao } from "@/components/shared/publicacao"
import type { ConteudoDoSiteProposto } from "@/content/proposta/tipos-site"
import { Capitulo, SumarioDosCapitulos } from "@/features/proposta-site/apresentacao"
import { BarraFixaDoSite, DuvidasDoSite, InscricaoDoSite, MaterialDoSite, RodapeDoSite } from "@/features/proposta-site/secoes-fim"
import { DepoimentosDoSite, EspecialistasDoSite, MentoraDoSite, NaoEhParaDoSite, ParaQuemDoSite, TrilhaDoSite } from "@/features/proposta-site/secoes-meio"
import { CapaDoSite, DoresDoSite, FaixaDaCampanha, PilaresDoSite, ResultadosDoSite } from "@/features/proposta-site/secoes-topo"
import { useApresentacao } from "@/features/proposta-site/use-apresentacao"
import { useBarraFixa } from "@/features/proposta/use-barra-fixa"
import { useTitulo } from "@/hooks/use-titulo"

/**
 * Ordem das seções da proposta do site oficial, agrupadas em capítulos da
 * apresentação (cada capítulo gruda e é coberto pelo seguinte; ver
 * `use-apresentacao.ts`). Trilha e especialistas formam um capítulo só porque
 * dividem o mesmo fundo azul.
 *
 * Os fundos alternam escuro e claro, como no site atual:
 * capa (marinho) · dores (creme) · resultados (azul) · pilares (creme) ·
 * para quem (marinho) · não é para (marfim) · trilha e especialistas (azul) · Carolina (gelo) ·
 * depoimentos (marinho) · inscrição (creme) · dúvidas (marinho) ·
 * material (creme) · rodapé (marinho).
 * Reordenar ou incluir uma seção é mexer só nesta lista; o rótulo é o nome do capítulo no sumário lateral.
 */
type Renderizador = (c: ConteudoDoSiteProposto) => ReactNode

interface CapituloDoSite {
  rotulo: string
  secoes: Renderizador[]
}

/** Material gratuito: guardado à parte porque sai do ar enquanto os leads não têm destino real. */
const MATERIAL: CapituloDoSite = {
  rotulo: "Material",
  secoes: [(c) => <MaterialDoSite conteudo={c.material} botao={c.botaoPrincipal} />],
}

const CAPITULOS: CapituloDoSite[] = [
  { rotulo: "Início", secoes: [(c) => <CapaDoSite conteudo={c.capa} botao={c.botaoPrincipal} />] },
  { rotulo: "Para você", secoes: [(c) => <DoresDoSite conteudo={c.dores} botao={c.botaoPrincipal} />] },
  { rotulo: "Resultados", secoes: [(c) => <ResultadosDoSite conteudo={c.resultados} botao={c.botaoPrincipal} />] },
  { rotulo: "Pilares", secoes: [(c) => <PilaresDoSite conteudo={c.pilares} botao={c.botaoPrincipal} />] },
  { rotulo: "Para quem é", secoes: [(c) => <ParaQuemDoSite conteudo={c.paraQuem} botao={c.botaoPrincipal} />] },
  { rotulo: "Para quem não é", secoes: [(c) => <NaoEhParaDoSite conteudo={c.naoEhPara} botao={c.botaoPrincipal} />] },
  {
    rotulo: "Como funciona",
    secoes: [
      (c) => <TrilhaDoSite conteudo={c.trilha} botao={c.botaoPrincipal} />,
      (c) => <EspecialistasDoSite conteudo={c.especialistas} botao={c.botaoPrincipal} />,
    ],
  },
  { rotulo: "Carolina", secoes: [(c) => <MentoraDoSite conteudo={c.mentora} botao={c.botaoPrincipal} />] },
  { rotulo: "Depoimentos", secoes: [(c) => <DepoimentosDoSite conteudo={c.depoimentos} botao={c.botaoPrincipal} />] },
  { rotulo: "Inscrição", secoes: [(c) => <InscricaoDoSite conteudo={c.inscricao} botao={c.botaoPrincipal} />] },
  { rotulo: "Dúvidas", secoes: [(c) => <DuvidasDoSite conteudo={c.duvidas} botao={c.botaoPrincipal} />] },
  MATERIAL,
  { rotulo: "Contato", secoes: [(c) => <RodapeDoSite conteudo={c.rodape} botao={c.botaoPrincipal} />] },
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
  const capitulos = comMaterial ? CAPITULOS : CAPITULOS.filter((capitulo) => capitulo !== MATERIAL)
  const apresentacao = useRef<HTMLElement>(null)
  const capituloAtual = useApresentacao(apresentacao)

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
        {/* No ar, a faixa da campanha ocupa o topo; na demonstração o topo é da barra de demonstração. */}
        {publicado && conteudo.chamadaDaCampanha && <FaixaDaCampanha conteudo={conteudo.chamadaDaCampanha} />}
        <main ref={apresentacao} className="apresentacao bg-legado-marinho font-inter text-base leading-normal">
          {capitulos.map(({ rotulo, secoes }, i) => (
            <Capitulo key={rotulo} indice={i}>
              {secoes.map((renderizar, j) => (
                <Fragment key={j}>{renderizar(pagina)}</Fragment>
              ))}
            </Capitulo>
          ))}
        </main>
        <SumarioDosCapitulos rotulos={capitulos.map((c) => c.rotulo)} atual={capituloAtual} />
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
