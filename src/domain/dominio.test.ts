import { describe, expect, it } from "vitest"
import { CheckoutEduzz } from "@/domain/checkout/Checkout"
import { ContatoWhatsApp } from "@/domain/contato/ContatoWhatsApp"
import { Preco } from "@/domain/dinheiro/Preco"
import { CapturaDeLeads } from "@/domain/leads/CapturaDeLeads"
import { CatalogoDeIscas, IscaDigital } from "@/domain/leads/IscaDigital"
import { ErroDeValidacao, type Lead } from "@/domain/leads/Lead"
import type { RepositorioDeLeads } from "@/domain/leads/RepositorioDeLeads"
import { CondicaoDePagamento } from "@/domain/oferta/CondicaoDePagamento"
import { Oferta } from "@/domain/oferta/Oferta"

describe("Preco", () => {
  it("multiplica sem erro de ponto flutuante", () => {
    expect(Preco.reais(128.97).vezes(12).centavos).toBe(154764)
  })

  it("formata como as páginas da Carol escrevem", () => {
    expect(Preco.reais(1247).formatar({ compacto: true })).toBe("R$1.247")
    expect(Preco.reais(1247).formatar()).toBe("R$1.247,00")
    expect(Preco.reais(128.97).formatar({ comEspaco: true })).toBe("R$ 128,97")
  })

  it("recusa valores negativos e moedas misturadas", () => {
    expect(() => Preco.reais(-1)).toThrow(RangeError)
    expect(() => Preco.reais(1).mais(Preco.reais(1, "EUR"))).toThrow(TypeError)
  })
})

describe("CondicaoDePagamento", () => {
  const site = new CondicaoDePagamento(Preco.reais(1247), 12, Preco.reais(128.97))
  const black = new CondicaoDePagamento(Preco.reais(1187), 12, Preco.reais(122.76))

  it("calcula o total parcelado e os juros", () => {
    expect(site.totalParcelado.formatar()).toBe("R$1.547,64")
    expect(site.jurosDoCartao.formatar()).toBe("R$300,64")
    expect(black.totalParcelado.formatar()).toBe("R$1.473,12")
  })

  it("aponta o problema do site atual: o 'de R$1.500' é menor que o parcelado", () => {
    expect(site.precoDeEhCoerente(Preco.reais(1500))).toBe(false)
    expect(black.precoDeEhCoerente(Preco.reais(1500))).toBe(true)
  })
})

describe("Oferta", () => {
  it("soma os bônus e só exibe o preço 'de' quando é coerente", () => {
    const oferta = new Oferta({
      nome: "Mentoria",
      precoDe: Preco.reais(1500),
      condicao: new CondicaoDePagamento(Preco.reais(1187), 12, Preco.reais(122.76)),
      checkout: new CheckoutEduzz("aapwxpno"),
      itens: [
        { descricao: "Mentoria", natureza: "incluso" },
        { descricao: "Aulas", natureza: "bonus", valorDeReferencia: Preco.reais(916) },
        { descricao: "Individual", natureza: "bonus", valorDeReferencia: Preco.reais(481) },
      ],
    })
    expect(oferta.somaDosBonus?.formatar({ compacto: true })).toBe("R$1.397")
    expect(oferta.exibePrecoDe).toBe(true)
    expect(oferta.checkout.url()).toBe("https://chk.eduzz.com/aapwxpno?country=BRA")
  })
})

describe("ContatoWhatsApp", () => {
  it("monta o link com a mensagem codificada como a API espera", () => {
    const zap = new ContatoWhatsApp("351929051974")
    expect(zap.linkCurto()).toBe("https://wa.me/351929051974")
    expect(zap.linkComMensagem("Olá, Carol.")).toBe("https://api.whatsapp.com/send/?phone=351929051974&text=Ol%C3%A1%2C+Carol.")
  })
})

describe("CapturaDeLeads", () => {
  class RepositorioEmMemoria implements RepositorioDeLeads {
    salvos: Lead[] = []
    async salvar(lead: Lead) {
      this.salvos.push(lead)
    }
  }
  const agora = () => new Date("2026-10-24T12:00:00Z")

  it("registra o lead com o texto e a data do consentimento", async () => {
    const repo = new RepositorioEmMemoria()
    const lead = await new CapturaDeLeads(repo, agora).registrar({
      nome: "  Ana Paula ",
      email: "ANA@Exemplo.com ",
      aceitouReceberEmails: true,
      origem: "o-que-nao-e-seu",
    })
    expect(lead.email).toBe("ana@exemplo.com")
    expect(lead.primeiroNome).toBe("Ana")
    expect(lead.consentimento.registradoEm).toBe("2026-10-24T12:00:00.000Z")
    expect(repo.salvos).toHaveLength(1)
  })

  it("não guarda nada sem consentimento", async () => {
    const repo = new RepositorioEmMemoria()
    const pedido = { nome: "Ana", email: "ana@exemplo.com", aceitouReceberEmails: false, origem: "site" }
    await expect(new CapturaDeLeads(repo, agora).registrar(pedido)).rejects.toBeInstanceOf(ErroDeValidacao)
    expect(repo.salvos).toHaveLength(0)
  })
})

describe("IscaDigital", () => {
  it("valida o slug e encontra a isca no catálogo", () => {
    const isca = new IscaDigital({
      slug: "playlist",
      palavraChave: "musica",
      titulo: "Playlist",
      subtitulo: "",
      formato: "playlist",
      conteudo: [],
      urlDeEntrega: "https://youtube.com",
    })
    expect(isca.palavraChave).toBe("MUSICA")
    expect(new CatalogoDeIscas([isca]).buscar("playlist")).toBe(isca)
    expect(() => new IscaDigital({ ...isca, slug: "Com Espaço" })).toThrow()
  })
})
