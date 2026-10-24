import { CHECKOUT } from "@/content/marca"
import { BOTAO_PRINCIPAL, GARANTIA, ITENS_DA_OFERTA, PAGAMENTO_EM_EURO } from "@/content/proposta/comum"
import { PROPOSTA_SITE } from "@/content/proposta/site"
import type { ConteudoDaProposta } from "@/content/proposta/tipos"
import { Preco } from "@/domain/dinheiro/Preco"
import { CondicaoDePagamento } from "@/domain/oferta/CondicaoDePagamento"
import { Oferta } from "@/domain/oferta/Oferta"

const condicao = new CondicaoDePagamento(Preco.reais(1187), 12, Preco.reais(122.76))
const campanha = "Black Outubro"

/**
 * Proposta para a página Black Outubro.
 * Parte da proposta do site e troca só o que é da campanha: selo, oferta e barra fixa.
 */
export const PROPOSTA_BLACK: ConteudoDaProposta = {
  ...PROPOSTA_SITE,
  meta: { ...PROPOSTA_SITE.meta, titulo: `Mulher Inteira · ${campanha}` },
  faixaDaProposta: {
    titulo: `Proposta de melhoria da página ${campanha} · versão para avaliação.`,
    apoio: PROPOSTA_SITE.faixaDaProposta.apoio,
  },
  capa: {
    ...PROPOSTA_SITE.capa,
    nota: "O selo \"Black Outubro\" deixa de ficar solto e passa a dizer até quando vale a condição. O botão \"Quero entrar na Mulher Inteira\" virou \"Garantir minha vaga\".",
    selo: [`${campanha} · até `, { aConfirmar: "data a confirmar" }],
  },
  paraVoce: { ...PROPOSTA_SITE.paraVoce, nota: undefined },
  oferta: {
    nota: "O total deixa de somar o encontro individual, que é só para as três primeiras. A garantia sai do FAQ e fica colada ao preço. O parcelamento avisa os juros e há caminho para quem paga em euro.",
    rotulo: "Inscrição",
    dados: new Oferta({
      nome: "Mentoria Mulher Inteira",
      campanha,
      itens: ITENS_DA_OFERTA,
      precoDe: Preco.reais(1500),
      condicao,
      checkout: CHECKOUT.black,
    }),
    prazo: [`Condição ${campanha} · válida até `, { aConfirmar: "data a confirmar" }],
    observacao: [`O parcelado inclui os juros do cartão (total de ${condicao.totalParcelado.formatar()}).`],
    garantia: GARANTIA,
    pagamentoEmEuro: PAGAMENTO_EM_EURO,
  },
  barraFixa: {
    destaque: `${condicao.aVista.formatar({ compacto: true })} · Black`,
    apoio: `ou ${condicao.descreverParcelamento()}`,
    botao: BOTAO_PRINCIPAL.replace("minha ", ""),
  },
}
