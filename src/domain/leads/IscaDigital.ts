/**
 * Material gratuito oferecido no Instagram ("comenta PALAVRA que eu te mando").
 *
 * Cada isca tem uma página própria no site (`/isca/<slug>`). A automação de
 * comentários da Meta responde com esse link; a pessoa deixa nome e e-mail e
 * recebe o material. Assim a Carol passa a ter uma lista de e-mails própria,
 * que não depende do alcance do Instagram.
 */
export type FormatoDaIsca = "pdf" | "playlist" | "video" | "audio"

export interface DadosDaIsca {
  slug: string
  /** Palavra que a pessoa comenta no post para receber o link. */
  palavraChave: string
  titulo: string
  subtitulo: string
  formato: FormatoDaIsca
  /** O que a pessoa vai encontrar no material, em itens curtos. */
  conteudo: readonly string[]
  /** Onde o material está hospedado (PDF no próprio site, playlist do YouTube…). */
  urlDeEntrega: string
}

const ROTULO_DO_FORMATO: Record<FormatoDaIsca, string> = {
  pdf: "Guia em PDF",
  playlist: "Playlist",
  video: "Aula em vídeo",
  audio: "Áudio guiado",
}

export class IscaDigital {
  readonly slug: string
  readonly palavraChave: string
  readonly titulo: string
  readonly subtitulo: string
  readonly formato: FormatoDaIsca
  readonly conteudo: readonly string[]
  readonly urlDeEntrega: string

  constructor(dados: DadosDaIsca) {
    if (!/^[a-z0-9-]+$/.test(dados.slug)) {
      throw new Error(`Slug de isca inválido: "${dados.slug}" (use letras minúsculas, números e hífen)`)
    }
    this.slug = dados.slug
    this.palavraChave = dados.palavraChave.toUpperCase()
    this.titulo = dados.titulo
    this.subtitulo = dados.subtitulo
    this.formato = dados.formato
    this.conteudo = dados.conteudo
    this.urlDeEntrega = dados.urlDeEntrega
  }

  get rotuloDoFormato(): string {
    return ROTULO_DO_FORMATO[this.formato]
  }
}

/** Catálogo de iscas; procurar por slug fica num só lugar. */
export class CatalogoDeIscas {
  private readonly iscas: ReadonlyMap<string, IscaDigital>

  constructor(iscas: IscaDigital[]) {
    this.iscas = new Map(iscas.map((isca) => [isca.slug, isca]))
  }

  buscar(slug: string): IscaDigital | undefined {
    return this.iscas.get(slug)
  }

  todas(): IscaDigital[] {
    return [...this.iscas.values()]
  }
}
