import type { Checkout } from "@/domain/checkout/Checkout"
import type { Preco } from "@/domain/dinheiro/Preco"
import type { CondicaoDePagamento } from "@/domain/oferta/CondicaoDePagamento"

/** Natureza de um item da oferta, exibida à direita da lista ("incluso", "bônus"). */
export type NaturezaDoItem = "incluso" | "bonus"

export interface ItemDaOferta {
  readonly descricao: string
  readonly natureza: NaturezaDoItem
  /** Valor de referência mostrado riscado; só a página Black atual usa. */
  readonly valorDeReferencia?: Preco
  /** Item limitado (ex.: só para as três primeiras); fica com destaque menor. */
  readonly limitado?: boolean
}

export interface DadosDaOferta {
  nome: string
  itens: readonly ItemDaOferta[]
  condicao: CondicaoDePagamento
  checkout: Checkout
  precoDe?: Preco
  /** Rótulo de campanha, como "Black Outubro". */
  campanha?: string
}

/**
 * Uma oferta da mentoria: o que está incluso, quanto custa e onde comprar.
 *
 * As seções de preço recebem uma `Oferta` pronta e só desenham; nenhuma conta
 * de dinheiro mora em componente React.
 */
export class Oferta {
  readonly nome: string
  readonly itens: readonly ItemDaOferta[]
  readonly condicao: CondicaoDePagamento
  readonly checkout: Checkout
  readonly precoDe?: Preco
  readonly campanha?: string

  constructor(dados: DadosDaOferta) {
    if (dados.itens.length === 0) throw new Error("Uma oferta precisa de pelo menos um item")
    this.nome = dados.nome
    this.itens = dados.itens
    this.condicao = dados.condicao
    this.checkout = dados.checkout
    this.precoDe = dados.precoDe
    this.campanha = dados.campanha
  }

  get itensInclusos(): ItemDaOferta[] {
    return this.itens.filter((item) => item.natureza === "incluso")
  }

  get bonus(): ItemDaOferta[] {
    return this.itens.filter((item) => item.natureza === "bonus")
  }

  /** Soma dos valores de referência dos bônus (ex.: R$916 + R$481). */
  get somaDosBonus(): Preco | undefined {
    const comValor = this.bonus.map((b) => b.valorDeReferencia).filter((v): v is Preco => v !== undefined)
    return comValor.length ? comValor.reduce((a, b) => a.mais(b)) : undefined
  }

  /** Mostrar o "de" só faz sentido quando ele é maior que o parcelado. */
  get exibePrecoDe(): boolean {
    return this.precoDe !== undefined && this.condicao.precoDeEhCoerente(this.precoDe)
  }
}
