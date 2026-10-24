import { Preco } from "@/domain/dinheiro/Preco"

/**
 * Como a cliente pode pagar: à vista ou parcelado no cartão.
 *
 * O total parcelado é calculado, nunca digitado, porque foi exatamente esse
 * número escondido que fez o "de R$1.500" do site atual ficar menor que o
 * valor parcelado (12 × R$128,97 = R$1.547,64).
 */
export class CondicaoDePagamento {
  readonly aVista: Preco
  readonly parcelas: number
  readonly valorDaParcela: Preco

  constructor(aVista: Preco, parcelas: number, valorDaParcela: Preco) {
    if (!Number.isInteger(parcelas) || parcelas < 1) {
      throw new RangeError(`Número de parcelas inválido: ${parcelas}`)
    }
    this.aVista = aVista
    this.parcelas = parcelas
    this.valorDaParcela = valorDaParcela
  }

  get totalParcelado(): Preco {
    return this.valorDaParcela.vezes(this.parcelas)
  }

  /** Juros embutidos no cartão (zero quando o parcelado é sem acréscimo). */
  get jurosDoCartao(): Preco {
    return this.totalParcelado.menos(this.aVista)
  }

  get temJuros(): boolean {
    return this.jurosDoCartao.centavos > 0
  }

  /** "12x de R$128,97" */
  descreverParcelamento(): string {
    return `${this.parcelas}x de ${this.valorDaParcela.formatar()}`
  }

  /**
   * Um preço "de" só é honesto se for maior que tudo o que a cliente pode pagar.
   * Usado pelos testes de conteúdo e pela nota de melhoria da oferta.
   */
  precoDeEhCoerente(precoDe: Preco): boolean {
    return precoDe.maiorQue(this.aVista) && precoDe.maiorQue(this.totalParcelado)
  }
}
