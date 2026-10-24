import { Lead, type DadosDoLead } from "@/domain/leads/Lead"
import type { RepositorioDeLeads } from "@/domain/leads/RepositorioDeLeads"

/** Texto de consentimento padrão, citado palavra por palavra no registro do lead. */
export const TEXTO_DE_CONSENTIMENTO =
  "Aceito receber e-mails da Carolina Wadt e sei que posso cancelar quando quiser, conforme a Política de Privacidade."

export interface PedidoDeMaterial {
  nome: string
  email: string
  aceitouReceberEmails: boolean
  origem: string
}

/**
 * Caso de uso "pedir um material gratuito".
 *
 * Valida, carimba o consentimento com data e hora e entrega ao repositório.
 * Não sabe nada de React nem de onde os dados vão parar.
 */
export class CapturaDeLeads {
  private readonly repositorio: RepositorioDeLeads
  private readonly relogio: () => Date

  constructor(repositorio: RepositorioDeLeads, relogio: () => Date = () => new Date()) {
    this.repositorio = repositorio
    this.relogio = relogio
  }

  async registrar(pedido: PedidoDeMaterial): Promise<Lead> {
    const dados: DadosDoLead = {
      nome: pedido.nome,
      email: pedido.email,
      origem: pedido.origem,
      consentimento: {
        aceito: pedido.aceitouReceberEmails,
        texto: TEXTO_DE_CONSENTIMENTO,
        registradoEm: this.relogio().toISOString(),
      },
    }
    const lead = Lead.criar(dados)
    await this.repositorio.salvar(lead)
    return lead
  }
}
