import { CapturaDeLeads } from "@/domain/leads/CapturaDeLeads"
import {
  RepositorioDeLeadsHttp,
  RepositorioDeLeadsNoNavegador,
  type RepositorioDeLeads,
} from "@/domain/leads/RepositorioDeLeads"

/**
 * Raiz de composição: o único lugar que decide quais implementações concretas
 * a aplicação usa. Os componentes recebem os serviços prontos.
 *
 * Com `VITE_LEADS_ENDPOINT` definido (ex.: uma função serverless que fala com
 * a ferramenta de e-mail), os leads vão para lá; sem ele, ficam no navegador
 * para a demonstração local.
 */
function criarRepositorioDeLeads(): RepositorioDeLeads {
  const endpoint = import.meta.env.VITE_LEADS_ENDPOINT as string | undefined
  return endpoint ? new RepositorioDeLeadsHttp(endpoint) : new RepositorioDeLeadsNoNavegador()
}

export const servicos = {
  capturaDeLeads: new CapturaDeLeads(criarRepositorioDeLeads()),
  emDemonstracao: !import.meta.env.VITE_LEADS_ENDPOINT,
} as const
