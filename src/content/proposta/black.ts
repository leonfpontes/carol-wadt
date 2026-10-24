import { CHECKOUT, IMAGENS } from "@/content/marca"
import { BOTAO_PRINCIPAL, GARANTIA, ITENS_DA_OFERTA, PAGAMENTO_EM_EURO, SECOES_COMUNS } from "@/content/proposta/comum"
import type { ConteudoDaProposta } from "@/content/proposta/tipos"
import { Preco } from "@/domain/dinheiro/Preco"
import { CondicaoDePagamento } from "@/domain/oferta/CondicaoDePagamento"
import { Oferta } from "@/domain/oferta/Oferta"

const condicao = new CondicaoDePagamento(Preco.reais(1187), 12, Preco.reais(122.76))
const campanha = "Black Outubro"

/**
 * Proposta para a página Black Outubro: a promoção de Black Friday.
 *
 * É um produto distinto do site oficial, com identidade própria (editorial,
 * preto e branco com dourado), preço promocional, prazo e checkout próprio.
 * A proposta do site oficial fica em `site.ts` e não reaproveita este visual.
 */
export const PROPOSTA_BLACK: ConteudoDaProposta = {
  ...SECOES_COMUNS,
  meta: {
    titulo: `Mulher Inteira · ${campanha}`,
    descricao:
      "Seis semanas com Carolina Wadt para mulheres que dão conta de tudo e querem voltar a sentir a própria vida: em si mesmas, nos relacionamentos e na prosperidade.",
  },
  faixaDaProposta: {
    titulo: `Proposta de melhoria da página ${campanha} · versão para avaliação.`,
    apoio: "As notas amarelas explicam cada mudança; os campos tracejados dependem da Carol.",
  },
  capa: {
    nota: "O selo \"Black Outubro\" deixa de ficar solto e passa a dizer até quando vale a condição. O botão \"Quero entrar na Mulher Inteira\" virou \"Garantir minha vaga\": a frase original tem duplo sentido, ainda mais ao lado da foto da Carol.",
    selo: [`${campanha} · até `, { aConfirmar: "data a confirmar" }],
    rotulo: "Mentoria em grupo · Inteligência Sistêmica",
    marca: ["Mulher", "Inteira"],
    titulo: "A vida que você construiu está pronta. Agora falta você estar inteira nela.",
    apoio:
      "Seis semanas com Carolina Wadt para mulheres que dão conta de tudo e querem voltar a sentir a própria vida: em si mesmas, nos relacionamentos e na prosperidade.",
    destaques: [
      { forte: "6 encontros", resto: [" ao vivo e online"] },
      { forte: "Até 2 h", resto: [" por semana"] },
      { resto: ["Início: ", { aConfirmar: "data a confirmar" }] },
    ],
    foto: IMAGENS.proposta.carolinaFrente,
  },
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
