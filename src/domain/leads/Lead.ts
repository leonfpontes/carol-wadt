/**
 * Uma pessoa que pediu um material gratuito e aceitou receber e-mails.
 *
 * A LGPD (Brasil) e o RGPD (Portugal/UE) exigem consentimento livre,
 * informado e registrável. Por isso o lead guarda o texto exato que a pessoa
 * aceitou, quando aceitou e de qual isca veio: é o que a Carol precisa
 * mostrar se alguém pedir "de onde vocês tiraram meu e-mail?".
 */
export interface Consentimento {
  readonly aceito: boolean
  /** Texto exibido ao lado da caixa de seleção no momento do aceite. */
  readonly texto: string
  readonly registradoEm: string
}

export interface DadosDoLead {
  nome: string
  email: string
  consentimento: Consentimento
  /** Slug da isca digital ou "site" quando veio do formulário da página. */
  origem: string
}

export class ErroDeValidacao extends Error {
  readonly campo: keyof DadosDoLead | "consentimento"

  constructor(campo: ErroDeValidacao["campo"], mensagem: string) {
    super(mensagem)
    this.name = "ErroDeValidacao"
    this.campo = campo
  }
}

const FORMATO_DE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export class Lead {
  readonly nome: string
  readonly email: string
  readonly consentimento: Consentimento
  readonly origem: string

  private constructor(dados: DadosDoLead) {
    this.nome = dados.nome
    this.email = dados.email
    this.consentimento = dados.consentimento
    this.origem = dados.origem
  }

  /** Fábrica que valida e normaliza; lança `ErroDeValidacao` com o campo culpado. */
  static criar(dados: DadosDoLead): Lead {
    const nome = dados.nome.trim()
    const email = dados.email.trim().toLowerCase()
    if (nome.length < 2) throw new ErroDeValidacao("nome", "Conte como podemos te chamar.")
    if (!FORMATO_DE_EMAIL.test(email)) throw new ErroDeValidacao("email", "Confira o seu e-mail.")
    if (!dados.consentimento.aceito) {
      throw new ErroDeValidacao("consentimento", "Para enviar o material, precisamos do seu aceite.")
    }
    return new Lead({ ...dados, nome, email })
  }

  /** Primeiro nome, para a mensagem de agradecimento. */
  get primeiroNome(): string {
    return this.nome.split(/\s+/)[0]
  }
}
