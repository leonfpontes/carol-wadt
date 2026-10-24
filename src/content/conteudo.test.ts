import { describe, expect, it } from "vitest"
import { BLACK_ATUAL } from "@/content/atual/black"
import { ISCAS } from "@/content/iscas"
import { PROPOSTA_BLACK } from "@/content/proposta/black"
import { PROPOSTA_SITE } from "@/content/proposta/site"
import type { ConteudoDaProposta } from "@/content/proposta/tipos"
import { RevisorDeTermos } from "@/domain/vocabulario/RevisorDeTermos"

/**
 * Testes de conteúdo: garantem regras de texto que não podem regredir.
 * Rodam também com `npm run revisar:termos`.
 */

/** Junta todo o texto que a cliente vê, sem as notas de melhoria (que citam os termos antigos de propósito). */
function textoVisivel(conteudo: ConteudoDaProposta): string {
  return JSON.stringify(conteudo, (chave, valor) => (chave === "nota" ? undefined : valor))
}

const PROPOSTAS = { site: PROPOSTA_SITE, black: PROPOSTA_BLACK }

describe.each(Object.entries(PROPOSTAS))("proposta %s", (_, conteudo) => {
  it("não tem termos de duplo sentido bloqueados", () => {
    const ocorrencias = new RevisorDeTermos().revisar(textoVisivel(conteudo), "bloqueia")
    expect(ocorrencias.map((o) => o.trecho)).toEqual([])
  })

  it("usa \"Garantir minha vaga\" como botão principal", () => {
    expect(conteudo.botaoPrincipal).toBe("Garantir minha vaga")
  })

  it("mantém a prosperidade financeira como pilar", () => {
    expect(conteudo.metodo.pilares.map((p) => p.titulo)).toContain("Prosperidade financeira e realização")
  })

  it("aponta a isca do formulário para uma isca que existe", () => {
    expect(ISCAS.buscar(conteudo.material.isca)).toBeDefined()
  })
})

describe("preços", () => {
  it("a Black é uma promoção: mais barata que o site", () => {
    expect(PROPOSTA_SITE.oferta.dados.condicao.aVista.maiorQue(PROPOSTA_BLACK.oferta.dados.condicao.aVista)).toBe(true)
  })

  it("a proposta do site esconde o 'de R$1.500', que é menor que o parcelado", () => {
    expect(PROPOSTA_SITE.oferta.dados.exibePrecoDe).toBe(false)
    expect(PROPOSTA_BLACK.oferta.dados.exibePrecoDe).toBe(true)
  })
})

describe("réplica da Black atual", () => {
  it("continua com o botão original, para a comparação ser honesta", () => {
    const ocorrencias = new RevisorDeTermos().revisar(BLACK_ATUAL.botao.texto, "bloqueia")
    expect(ocorrencias.length).toBeGreaterThan(0)
  })
})
