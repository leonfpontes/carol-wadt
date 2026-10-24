/**
 * Valor monetário imutável (Value Object).
 *
 * Guarda centavos inteiros para nunca somar ou multiplicar números de ponto
 * flutuante com dinheiro: R$ 128,97 × 12 tem que dar exatamente R$ 1.547,64.
 */
export type Moeda = "BRL" | "EUR"

const LOCALIDADE: Record<Moeda, string> = { BRL: "pt-BR", EUR: "pt-PT" }

export class Preco {
  readonly centavos: number
  readonly moeda: Moeda

  private constructor(centavos: number, moeda: Moeda) {
    if (!Number.isInteger(centavos) || centavos < 0) {
      throw new RangeError(`Preço inválido: ${centavos} centavos`)
    }
    this.centavos = centavos
    this.moeda = moeda
  }

  /** Cria a partir de reais com até duas casas: `Preco.reais(1247)`, `Preco.reais(128.97)`. */
  static reais(valor: number, moeda: Moeda = "BRL"): Preco {
    return new Preco(Math.round(valor * 100), moeda)
  }

  static centavos(valor: number, moeda: Moeda = "BRL"): Preco {
    return new Preco(valor, moeda)
  }

  vezes(fator: number): Preco {
    return new Preco(Math.round(this.centavos * fator), this.moeda)
  }

  mais(outro: Preco): Preco {
    this.exigirMesmaMoeda(outro)
    return new Preco(this.centavos + outro.centavos, this.moeda)
  }

  menos(outro: Preco): Preco {
    this.exigirMesmaMoeda(outro)
    return new Preco(Math.max(0, this.centavos - outro.centavos), this.moeda)
  }

  maiorQue(outro: Preco): boolean {
    this.exigirMesmaMoeda(outro)
    return this.centavos > outro.centavos
  }

  /**
   * Formata no padrão brasileiro.
   * `compacto` omite ",00" de valores redondos (R$1.247), como as páginas usam no título do preço.
   */
  formatar({ compacto = false, comEspaco = false }: { compacto?: boolean; comEspaco?: boolean } = {}): string {
    const inteiro = this.centavos % 100 === 0
    const texto = new Intl.NumberFormat(LOCALIDADE[this.moeda], {
      style: "currency",
      currency: this.moeda,
      minimumFractionDigits: compacto && inteiro ? 0 : 2,
      maximumFractionDigits: 2,
    }).format(this.centavos / 100)
    // Intl separa o símbolo com espaço não separável; as páginas da Carol escrevem "R$1.247".
    return comEspaco ? texto.replace(/ /g, " ") : texto.replace(/ /g, "")
  }

  toString(): string {
    return this.formatar()
  }

  private exigirMesmaMoeda(outro: Preco): void {
    if (outro.moeda !== this.moeda) {
      throw new TypeError(`Moedas diferentes: ${this.moeda} e ${outro.moeda}`)
    }
  }
}
