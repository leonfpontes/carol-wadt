import { CheckoutEduzz } from "@/domain/checkout/Checkout"
import { ContatoWhatsApp } from "@/domain/contato/ContatoWhatsApp"

/**
 * Dados da marca compartilhados por todas as páginas.
 * Trocar telefone, checkout ou caminho de foto acontece só aqui.
 */
export const MARCA = {
  mentora: "Carolina Wadt",
  instituto: "Instituto Carolina Wadt",
  cidade: "Aveiro, Portugal",
  programa: "Mentoria Mulher Inteira",
  emailAtual: "contato@carolinawadt.com.br",
} as const

export const WHATSAPP = new ContatoWhatsApp("351929051974")

export const CHECKOUT = {
  /** Link de vendas do site (preço cheio). */
  site: new CheckoutEduzz("glvpycz3"),
  /** Link de vendas da condição Black Outubro. */
  black: new CheckoutEduzz("aapwxpno"),
} as const

/** Mensagens prontas do WhatsApp usadas nas propostas. */
export const MENSAGENS = {
  saberMais: "Olá, Carol. Quero saber mais sobre a Mentoria Mulher Inteira.",
  pagarEmEuro: "Olá, Carol. Moro fora do Brasil e quero fazer a Mulher Inteira pagando em euro.",
} as const

const pasta = (grupo: "original" | "proposta", arquivo: string) => `/imagens/${grupo}/${arquivo}`

export const IMAGENS = {
  original: {
    pilarChave: pasta("original", "pilar-chave.png"),
    pilarAliancas: pasta("original", "pilar-aliancas.png"),
    pilarDiamante: pasta("original", "pilar-diamante.png"),
    resultadoPadroes: pasta("original", "resultado-padroes.png"),
    resultadoCuidar: pasta("original", "resultado-cuidar.png"),
    resultadoRota: pasta("original", "resultado-rota.png"),
    resultadoProposito: pasta("original", "resultado-proposito.png"),
    mockup: pasta("original", "mockup-dispositivos.png"),
    carolina: pasta("original", "carolina-wadt.jpg"),
  },
  proposta: {
    carolinaFrente: pasta("proposta", "carolina-frente.jpg"),
    carolinaAzul: pasta("proposta", "carolina-azul.jpg"),
    ju: pasta("proposta", "ju.jpg"),
    nara: pasta("proposta", "nara.jpg"),
    ana: pasta("proposta", "ana.jpg"),
    lore: pasta("proposta", "lore.jpg"),
  },
} as const
