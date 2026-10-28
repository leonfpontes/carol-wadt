/**
 * Contrato único de rotas.
 *
 * Nenhum componente escreve caminhos à mão ("/proposta/site"): todos usam
 * este objeto, para que renomear uma rota seja mudar uma linha.
 */
export const ROTAS = {
  /** Site oficial da Carol, no ar. */
  inicio: "/",
  termos: "/termos",
  privacidade: "/privacidade",
  /** Demonstração para a Carol: vitrine com as páginas atuais e as propostas. */
  vitrine: "/demonstracao",
  atual: {
    site: "/atual/site",
    black: "/atual/black",
    privacidade: "/atual/privacidade",
    termos: "/atual/termos",
  },
  proposta: {
    site: "/proposta/site",
    black: "/proposta/black",
    privacidade: "/proposta/privacidade",
    termos: "/proposta/termos",
  },
  isca: (slug: string) => `/isca/${slug}`,
  padraoIsca: "/isca/:slug",
} as const

/** Âncoras internas usadas pelos botões "ir para a oferta". */
export const ANCORAS = {
  oferta: "oferta",
  metodo: "metodo",
  material: "material",
} as const

export const ancora = (id: string) => `#${id}`
