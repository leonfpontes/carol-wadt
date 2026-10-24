import type { Lead } from "@/domain/leads/Lead"

/**
 * Onde os leads são guardados.
 *
 * O formulário depende só desta interface. Hoje a demonstração usa o
 * navegador; em produção basta escrever um adaptador para a ferramenta de
 * e-mail escolhida (Brevo, MailerLite, Kit…) que implemente `salvar`, sem
 * mudar nenhum componente. Veja docs/captura-de-leads.md.
 */
export interface RepositorioDeLeads {
  salvar(lead: Lead): Promise<void>
}

/**
 * Implementação de demonstração: guarda no `localStorage` do próprio navegador.
 * Não envia nada para lugar nenhum; serve para mostrar o fluxo rodando localmente.
 */
export class RepositorioDeLeadsNoNavegador implements RepositorioDeLeads {
  private readonly chave: string

  constructor(chave = "carolwadt:leads-demo") {
    this.chave = chave
  }

  async salvar(lead: Lead): Promise<void> {
    const atuais = this.listar()
    atuais.push({ ...lead, consentimento: { ...lead.consentimento } })
    try {
      localStorage.setItem(this.chave, JSON.stringify(atuais))
    } catch {
      // Navegação privada ou armazenamento cheio: a demonstração segue sem persistir.
    }
  }

  listar(): Array<Record<string, unknown>> {
    try {
      return JSON.parse(localStorage.getItem(this.chave) ?? "[]")
    } catch {
      return []
    }
  }
}

/**
 * Esqueleto do adaptador de produção: envia o lead para um endpoint HTTP
 * (uma função serverless que fala com a ferramenta de e-mail).
 * A chave da API nunca fica no navegador, só no servidor.
 */
export class RepositorioDeLeadsHttp implements RepositorioDeLeads {
  private readonly endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  async salvar(lead: Lead): Promise<void> {
    const resposta = await fetch(this.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    })
    if (!resposta.ok) throw new Error(`Falha ao registrar o lead (${resposta.status})`)
  }
}
