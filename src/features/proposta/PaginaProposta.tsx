import { Fragment, type ReactNode } from "react"
import { ANCORAS } from "@/app/rotas"
import { BarraDeDemonstracao } from "@/components/shared/BarraDeDemonstracao"
import { AlternadorDeNotas, ProvedorDeNotas } from "@/components/shared/notas"
import type { ConteudoDaProposta } from "@/content/proposta/tipos"
import {
  CapaProposta,
  DepoimentosProposta,
  MentoraProposta,
  MetodoProposta,
  ParaVoceProposta,
  PromessaProposta,
} from "@/features/proposta/secoes-apresentacao"
import {
  BarraFixaProposta,
  BonusProposta,
  FaqProposta,
  FechamentoProposta,
  FormatoProposta,
  MaterialProposta,
  OfertaProposta,
  ParaQuemProposta,
  RodapeProposta,
} from "@/features/proposta/secoes-conversao"
import { useBarraFixa } from "@/features/proposta/use-barra-fixa"
import { useTitulo } from "@/hooks/use-titulo"

/**
 * Ordem das seções da página proposta.
 *
 * Aberto para extensão: incluir, tirar ou reordenar uma seção é mexer só
 * nesta lista; nenhuma seção conhece as outras. A ordem segue a jornada de
 * decisão: identificação → promessa → método → confiança → prova → formato
 * → bônus → preço → filtro → dúvidas → plano B (material) → fechamento.
 */
type Renderizador = (c: ConteudoDaProposta) => ReactNode

const SECOES: Renderizador[] = [
  (c) => <CapaProposta conteudo={c.capa} botao={c.botaoPrincipal} />,
  (c) => <ParaVoceProposta conteudo={c.paraVoce} botao={c.botaoPrincipal} />,
  (c) => <PromessaProposta conteudo={c.promessa} botao={c.botaoPrincipal} />,
  (c) => <MetodoProposta conteudo={c.metodo} botao={c.botaoPrincipal} />,
  (c) => <MentoraProposta conteudo={c.mentora} botao={c.botaoPrincipal} />,
  (c) => <DepoimentosProposta conteudo={c.depoimentos} botao={c.botaoPrincipal} />,
  (c) => <FormatoProposta conteudo={c.formato} botao={c.botaoPrincipal} />,
  (c) => <BonusProposta conteudo={c.bonus} botao={c.botaoPrincipal} />,
  (c) => <OfertaProposta conteudo={c.oferta} botao={c.botaoPrincipal} />,
  (c) => <ParaQuemProposta conteudo={c.paraQuem} botao={c.botaoPrincipal} />,
  (c) => <FaqProposta conteudo={c.faq} botao={c.botaoPrincipal} />,
  (c) => <MaterialProposta conteudo={c.material} botao={c.botaoPrincipal} />,
  (c) => <FechamentoProposta conteudo={c.fechamento} botao={c.botaoPrincipal} urlDeCompra={c.oferta.dados.checkout.url()} />,
  (c) => <RodapeProposta conteudo={c.rodape} botao={c.botaoPrincipal} />,
]

interface PaginaPropostaProps {
  conteudo: ConteudoDaProposta
  pagina: "site" | "black"
}

export function PaginaProposta({ conteudo, pagina }: PaginaPropostaProps) {
  useTitulo(conteudo.meta.titulo, conteudo.meta.descricao)
  const barraVisivel = useBarraFixa(ANCORAS.metodo, ANCORAS.oferta)

  return (
    <ProvedorDeNotas>
      <BarraDeDemonstracao pagina={pagina} acoes={<AlternadorDeNotas className="px-3 py-1 shadow-none" />} />
      <div className="bg-ouro px-4 py-2.5 text-center text-[13px] font-bold text-preto">
        {conteudo.faixaDaProposta.titulo} <span className="font-medium">{conteudo.faixaDaProposta.apoio}</span>
      </div>
      <main>
        {SECOES.map((renderizar, i) => (
          <Fragment key={i}>{renderizar(conteudo)}</Fragment>
        ))}
      </main>
      <BarraFixaProposta conteudo={conteudo.barraFixa} visivel={barraVisivel} />
    </ProvedorDeNotas>
  )
}

