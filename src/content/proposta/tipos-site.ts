import type { LucideIcon } from "lucide-react"
import type { TextoRico } from "@/content/proposta/tipos"
import type { Oferta } from "@/domain/oferta/Oferta"

/**
 * Formato do conteúdo da proposta do SITE OFICIAL.
 *
 * O site oficial e a página Black são produtos distintos: a proposta do site
 * mantém a identidade dele (azul-marinho, dourado, turquesa, Playfair + Inter,
 * as pinturas dos pilares e dos resultados) e melhora seção por seção.
 * Por isso tem um tipo próprio, separado do `ConteudoDaProposta` da Black.
 */

export interface ItemIlustrado {
  titulo: string
  texto: string
  icone: LucideIcon
}

export interface ItemComFoto {
  texto: string
  foto: string
  /** Texto alternativo da foto (acessibilidade). */
  alt: string
}

export interface EtapaDaTrilha {
  rotulo: string
  titulo: string
  texto: string
  icone: LucideIcon
  /** Pontas da trilha (quem chega e quem sai) ganham destaque. */
  ponta?: boolean
}

export interface EspecialistaDoSite {
  nome: string
  area: string
  tema: string
  foto: string
}

export interface DepoimentoDoSite {
  texto: string
  autora: string
  detalhe: string
}

export interface ColunaDoRodape {
  titulo: string
  links: Array<{ texto: string; destino: string; externo?: boolean } | { aConfirmar: string }>
}

export interface ConteudoDoSiteProposto {
  meta: { titulo: string; descricao: string }
  faixaDaProposta: { titulo: string; apoio: string }
  /**
   * Faixa fixa no topo do site que chama para uma campanha (ex.: Black).
   * Opcional: sem ela, a faixa some. Tirar a campanha é apagar o campo.
   */
  chamadaDaCampanha?: { destaque: string; texto: string; botao: string; url: string }
  botaoPrincipal: string
  capa: {
    nota: string
    rotulo: string
    produto: [string, string]
    promessa: string
    apoio: string
    beneficios: ItemIlustrado[]
    foto: string
    selo: { valor: string; legenda: string }
  }
  dores: { nota: string; rotulo: string; titulo: string; itens: ItemComFoto[]; citacao: string; botao: string }
  resultados: {
    nota: string
    rotulo: string
    titulo: string
    itens: Array<{ titulo: string; texto: string; imagem: string }>
  }
  pilares: {
    nota: string
    rotulo: string
    titulo: string
    apoio: string
    itens: Array<{ nome: string; foco: string; texto: string; imagem: string }>
  }
  paraQuem: { nota: string; rotulo: string; titulo: string; apoio: string; foto: string; itens: ItemIlustrado[] }
  naoEhPara: { nota: string; rotulo: string; titulo: string; destaque: string; apoio: string; foto: string; itens: ItemIlustrado[]; botao: string }
  trilha: { nota: string; rotulo: string; titulo: string; apoio: string; etapas: EtapaDaTrilha[]; botao: string }
  especialistas: { nota: string; rotulo: string; titulo: string; apoio: string; itens: EspecialistaDoSite[] }
  mentora: {
    nota: string
    titulo: string
    resumo: string
    historia: string
    foto: string
    numeros: Array<{ valor: string; legenda: string }>
  }
  depoimentos: { nota: string; rotulo: string; titulo: string; nota5: string; itens: DepoimentoDoSite[] }
  inscricao: {
    nota: string
    rotulo: string
    titulo: string
    apoio: string
    inclui: ItemIlustrado[]
    oferta: Oferta
    observacao: TextoRico
    garantia: string
    pagamentoEmEuro: { pergunta: string; texto: string; url: string }
  }
  duvidas: {
    nota: string
    rotulo: string
    titulo: string
    itens: Array<{ pergunta: string; resposta: string }>
    whatsapp: { texto: string; url: string }
  }
  material: { nota: string; rotulo: string; titulo: string; apoio: TextoRico; isca: string; botao: string }
  rodape: {
    nota: string
    marca: string
    descricao: string
    colunas: ColunaDoRodape[]
    selos: string[]
    linhaFinal: string
  }
  barraFixa: { destaque: string; apoio: string; botao: string }
}
