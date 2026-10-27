import { describe, expect, it } from "vitest"
import { BLACK_ATUAL } from "@/content/atual/black"
import { ISCAS } from "@/content/iscas"
import { PROPOSTA_BLACK } from "@/content/proposta/black"
import { PROPOSTA_SITE } from "@/content/proposta/site"
import type { ConteudoDaProposta } from "@/content/proposta/tipos"
import type { ConteudoDoSiteProposto } from "@/content/proposta/tipos-site"
import { RevisorDeTermos } from "@/domain/vocabulario/RevisorDeTermos"

/**
 * Testes de conteúdo: garantem regras de texto que não podem regredir.
 * Rodam também com `npm run revisar:termos`.
 */

/** Junta todo o texto que a cliente vê, sem as notas de melhoria (que citam os termos antigos de propósito). */
function textoVisivel(conteudo: ConteudoDaProposta | ConteudoDoSiteProposto): string {
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

  it("aponta a isca do formulário para uma isca que existe", () => {
    expect(ISCAS.buscar(conteudo.material.isca)).toBeDefined()
  })
})

describe("proposta do site oficial", () => {
  it("usa o nome \"Mentoria da Mulher Inteira\" no topo", () => {
    expect(PROPOSTA_SITE.capa.produto.join(" ")).toBe("Mentoria da Mulher Inteira")
  })

  it("não usa mais \"Guerreira\" (decisão da Carol)", () => {
    expect(textoVisivel(PROPOSTA_SITE)).not.toMatch(/guerreira/i)
    expect(textoVisivel(PROPOSTA_BLACK)).not.toMatch(/guerreira/i)
  })

  it("usa os pilares da página Black (reunião de 27/10)", () => {
    expect(PROPOSTA_SITE.pilares.itens.map((p) => p.nome)).toEqual(BLACK_ATUAL.pilares.itens.map((p) => p.titulo.replace(/^Pilar \d: /, "")))
  })

  it("traz as quatro especialistas da Black", () => {
    expect(PROPOSTA_SITE.especialistas.itens.map((e) => e.nome)).toEqual(BLACK_ATUAL.especialistas.itens.map((e) => e.nome))
  })

  it("usa as pinturas do site atual nos pilares e nos resultados", () => {
    const imagens = [...PROPOSTA_SITE.pilares.itens, ...PROPOSTA_SITE.resultados.itens].map((i) => i.imagem)
    expect(imagens.every((src) => src.startsWith("/imagens/original/"))).toBe(true)
  })
})

describe("proposta da Black", () => {
  it("mantém a prosperidade financeira como pilar", () => {
    expect(PROPOSTA_BLACK.metodo.pilares.map((p) => p.titulo)).toContain("Prosperidade financeira e realização")
  })
})

describe("preços", () => {
  it("a Black é uma promoção: mais barata que o site", () => {
    expect(PROPOSTA_SITE.inscricao.oferta.condicao.aVista.maiorQue(PROPOSTA_BLACK.oferta.dados.condicao.aVista)).toBe(true)
  })

  it("a proposta do site esconde o 'de R$1.500', que é menor que o parcelado", () => {
    expect(PROPOSTA_SITE.inscricao.oferta.exibePrecoDe).toBe(false)
    expect(PROPOSTA_BLACK.oferta.dados.exibePrecoDe).toBe(true)
  })
})

describe("réplica da Black atual", () => {
  it("continua com o botão original, para a comparação ser honesta", () => {
    const ocorrencias = new RevisorDeTermos().revisar(BLACK_ATUAL.botao.texto, "bloqueia")
    expect(ocorrencias.length).toBeGreaterThan(0)
  })
})
