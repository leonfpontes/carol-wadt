/**
 * Destino de compra de uma oferta.
 *
 * É uma interface (e não a URL solta) para que trocar de plataforma, ou
 * acrescentar um checkout em euro para clientes da Europa, seja uma nova
 * classe, sem tocar nas seções que exibem o botão (Aberto/Fechado + Inversão
 * de Dependência).
 */
export interface Checkout {
  /** Nome legível da plataforma, para documentação e telas internas. */
  readonly plataforma: string
  /** URL final que o botão de compra abre. */
  url(): string
}

/** Checkout hospedado na Eduzz, onde estão os produtos da Carol hoje. */
export class CheckoutEduzz implements Checkout {
  readonly plataforma = "Eduzz"
  readonly codigo: string
  readonly pais: string

  /** @param codigo trecho final do link, por exemplo `glvpycz3` */
  constructor(codigo: string, pais = "BRA") {
    this.codigo = codigo
    this.pais = pais
  }

  url(): string {
    return `https://chk.eduzz.com/${this.codigo}?country=${this.pais}`
  }
}

/** Link de pagamento genérico (Stripe, PayPal…), útil para o futuro checkout em euro. */
export class CheckoutPorLink implements Checkout {
  readonly plataforma: string
  readonly endereco: string

  constructor(plataforma: string, endereco: string) {
    this.plataforma = plataforma
    this.endereco = endereco
  }

  url(): string {
    return this.endereco
  }
}
