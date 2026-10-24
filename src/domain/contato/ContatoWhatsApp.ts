/**
 * Monta links de WhatsApp com mensagem pronta.
 *
 * Cada botão de contato abre a conversa já dizendo de onde a pessoa veio
 * ("moro fora e quero pagar em euro", "tenho uma dúvida"), o que poupa a
 * Carol de perguntar e ajuda a medir qual chamada funciona melhor.
 */
export class ContatoWhatsApp {
  readonly telefone: string

  /** @param telefone só dígitos, com DDI: `351929051974` */
  constructor(telefone: string) {
    if (!/^\d{10,15}$/.test(telefone)) {
      throw new Error(`Telefone de WhatsApp inválido: ${telefone}`)
    }
    this.telefone = telefone
  }

  /** Link curto, sem mensagem, como o da página Black atual. */
  linkCurto(): string {
    return `https://wa.me/${this.telefone}`
  }

  /** Link da API oficial com mensagem; espaços viram "+", como a API espera. */
  linkComMensagem(mensagem: string, extras: Record<string, string> = {}): string {
    const parametros = new URLSearchParams({ phone: this.telefone, text: mensagem, ...extras })
    return `https://api.whatsapp.com/send/?${parametros.toString()}`
  }
}
