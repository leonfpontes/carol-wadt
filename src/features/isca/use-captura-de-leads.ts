import { useState } from "react"
import { servicos } from "@/app/servicos"
import { ErroDeValidacao, type Lead } from "@/domain/leads/Lead"

export type EstadoDoEnvio =
  | { fase: "editando" }
  | { fase: "enviando" }
  | { fase: "erro"; campo?: string; mensagem: string }
  | { fase: "enviado"; lead: Lead }

/**
 * Estado do formulário de material gratuito.
 * O hook só traduz o caso de uso `CapturaDeLeads` para estado de tela.
 */
export function useCapturaDeLeads(origem: string) {
  const [estado, setEstado] = useState<EstadoDoEnvio>({ fase: "editando" })

  async function enviar(dados: { nome: string; email: string; aceitou: boolean }) {
    setEstado({ fase: "enviando" })
    try {
      const lead = await servicos.capturaDeLeads.registrar({
        nome: dados.nome,
        email: dados.email,
        aceitouReceberEmails: dados.aceitou,
        origem,
      })
      setEstado({ fase: "enviado", lead })
    } catch (erro) {
      if (erro instanceof ErroDeValidacao) {
        setEstado({ fase: "erro", campo: erro.campo, mensagem: erro.message })
      } else {
        setEstado({ fase: "erro", mensagem: "Não conseguimos enviar agora. Tente de novo em instantes." })
      }
    }
  }

  return { estado, enviar, emDemonstracao: servicos.emDemonstracao }
}
