import type { Oferta } from "@/domain/oferta/Oferta"

/**
 * Formato do conteúdo das páginas propostas (site e Black).
 *
 * As duas páginas compartilham as mesmas seções; o que muda (capa, oferta e
 * algumas notas) é sobrescrito em cada arquivo. Toda seção aceita uma `nota`:
 * a explicação amarela "Melhoria" que mostra à Carol o que mudou e por quê.
 * As notas não fazem parte da página final e podem ser ocultadas.
 */

/** Parte de texto que depende de confirmação da Carol (data, preço…). */
export interface AConfirmar {
  aConfirmar: string
}

/** Texto corrido que pode ter trechos "a confirmar" no meio. */
export type TextoRico = Array<string | AConfirmar>

export interface Botao {
  texto: string
  /** Âncora interna (`#oferta`) ou URL externa. */
  destino: string
}

export interface ItemRotulado {
  titulo: string
  texto: string
}

export interface PilarProposto {
  etiqueta: string
  titulo: string
  pergunta: string
  pratica: string
  entrega: string
}

export interface EspecialistaProposta {
  nome: string
  area: string
  tema: string
  foto: string
}

export interface Depoimento {
  texto: string
  autora: string
}

export interface PerguntaFrequente {
  pergunta: string
  resposta: TextoRico
  /** Link opcional no fim da resposta (ex.: WhatsApp para pagar em euro). */
  link?: { texto: string; url: string }
}

export interface DadoDeFormato {
  destaque: string
  texto: TextoRico
}

export interface ConteudoDaProposta {
  meta: { titulo: string; descricao: string }
  faixaDaProposta: { titulo: string; apoio: string }
  botaoPrincipal: string
  capa: {
    nota?: string
    selo?: TextoRico
    rotulo: string
    marca: [string, string]
    titulo: string
    apoio: string
    /** Dados rápidos sob o botão; `forte` aparece em dourado. */
    destaques: Array<{ forte?: string; resto: TextoRico }>
    foto: string
  }
  paraVoce: { nota?: string; rotulo: string; titulo: string; itens: string[]; fecho: [string, string] }
  promessa: { nota?: string; rotulo: string; titulo: string; apoio: string; resultados: ItemRotulado[]; dica: string }
  metodo: { nota?: string; rotulo: string; titulo: string; apoio: string; pilares: PilarProposto[] }
  mentora: {
    nota?: string
    rotulo: string
    nome: string
    foto: string
    paragrafos: string[]
    numeros: Array<{ valor: string; legenda: string }>
  }
  depoimentos: { nota?: string; rotulo: string; titulo: string; itens: Depoimento[] }
  formato: { nota?: string; rotulo: string; titulo: string; itens: DadoDeFormato[] }
  bonus: {
    nota?: string
    rotulo: string
    titulo: string
    apoio: string
    especialistas: EspecialistaProposta[]
    extras: ItemRotulado[]
  }
  oferta: {
    nota?: string
    rotulo: string
    dados: Oferta
    prazo?: TextoRico
    observacao?: TextoRico
    garantia: { titulo: string; texto: string }
    pagamentoEmEuro: { pergunta: string; link: { texto: string; url: string } }
  }
  paraQuem: {
    nota?: string
    rotulo: string
    titulo: string
    sim: { titulo: string; itens: string[] }
    agoraNao: { titulo: string; itens: string[] }
  }
  faq: { nota?: string; rotulo: string; titulo: string; itens: PerguntaFrequente[]; contato: { texto: string; url: string } }
  material: {
    nota?: string
    rotulo: string
    titulo: string
    apoio: TextoRico
    /** Slug da isca entregue por este formulário. */
    isca: string
    botao: string
  }
  fechamento: { rotulo: string; titulo: [string, string]; whatsapp: { texto: string; url: string } }
  rodape: { nota?: string; linha: string; contato: TextoRico }
  barraFixa: { destaque: string; apoio: string; botao: string }
}
