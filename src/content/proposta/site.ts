import { CHECKOUT, IMAGENS } from "@/content/marca"
import { BOTAO_PRINCIPAL, GARANTIA, ITENS_DA_OFERTA, PAGAMENTO_EM_EURO, SECOES_COMUNS } from "@/content/proposta/comum"
import type { ConteudoDaProposta } from "@/content/proposta/tipos"
import { Preco } from "@/domain/dinheiro/Preco"
import { CondicaoDePagamento } from "@/domain/oferta/CondicaoDePagamento"
import { Oferta } from "@/domain/oferta/Oferta"

const condicao = new CondicaoDePagamento(Preco.reais(1247), 12, Preco.reais(128.97))

/** Proposta para carolinawadt.com (preço cheio, sem campanha). */
export const PROPOSTA_SITE: ConteudoDaProposta = {
  ...SECOES_COMUNS,
  meta: {
    titulo: "Mentoria Mulher Inteira · Carolina Wadt",
    descricao:
      "Seis semanas com Carolina Wadt para mulheres que dão conta de tudo e querem voltar a sentir a própria vida: em si mesmas, nos relacionamentos e na prosperidade.",
  },
  faixaDaProposta: {
    titulo: "Proposta de melhoria de carolinawadt.com · versão para avaliação.",
    apoio: "As notas amarelas explicam cada mudança; os campos tracejados dependem da Carol.",
  },
  capa: {
    nota: "Saem \"De Guerreira a Mulher Inteira\" e \"Prosperidade Integral\". O topo usa a frase do próprio site que melhor fala com a mulher bem resolvida e já diz formato e prazo. O botão \"Quero entrar na Mulher Inteira\" virou \"Garantir minha vaga\": a frase original tem duplo sentido, ainda mais ao lado da foto da Carol.",
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
  paraVoce: {
    ...SECOES_COMUNS.paraVoce,
    nota: "Esta lista vem da página Black e substitui \"Você se identifica?\". Troca a linguagem de guerra e crise pela rotina real de uma mulher que conquistou muito.",
  },
  oferta: {
    nota: "Sai o \"de R$1.500\": o parcelado custava mais que o preço riscado. A garantia de 7 dias aparece junto do preço, e entra uma saída para quem mora fora do Brasil e quer pagar em euro.",
    rotulo: "Inscrição",
    dados: new Oferta({
      nome: "Mentoria Mulher Inteira",
      itens: ITENS_DA_OFERTA,
      // O "de R$1.500" do site atual fica registrado, mas a seção só o mostra se for coerente (não é).
      precoDe: Preco.reais(1500),
      condicao,
      checkout: CHECKOUT.site,
    }),
    observacao: [`O parcelado inclui os juros do cartão (total de ${condicao.totalParcelado.formatar()}). `, { aConfirmar: "Preço a confirmar" }],
    garantia: GARANTIA,
    pagamentoEmEuro: PAGAMENTO_EM_EURO,
  },
  barraFixa: {
    destaque: `${condicao.aVista.formatar({ compacto: true })} à vista`,
    apoio: `ou ${condicao.descreverParcelamento()}`,
    botao: BOTAO_PRINCIPAL.replace("minha ", ""),
  },
}
