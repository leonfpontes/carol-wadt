/**
 * Proposta do site oficial, primeira metade: capa, dores, resultados e pilares.
 * Ordem dos fundos: marinho → creme → azul → creme (alternância escuro/claro).
 */
import { ANCORAS, ancora } from "@/app/rotas"
import { LinkExterno } from "@/components/shared/LinkExterno"
import { NotaDeMelhoria } from "@/components/shared/notas"
import { Surgir } from "@/components/shared/Surgir"
import type { ConteudoDoSiteProposto } from "@/content/proposta/tipos-site"
import { ApoioDoSite, BotaoDoSite, IconeEmCirculo, RotuloDoSite, SecaoDoSite, TituloDoSite } from "@/features/proposta-site/base"

type Fatia<K extends keyof ConteudoDoSiteProposto> = { conteudo: ConteudoDoSiteProposto[K]; botao: string }

export function CapaDoSite({ conteudo: capa, botao }: Fatia<"capa">) {
  return (
    <header className="relative overflow-hidden bg-legado-marinho text-legado-gelo">
      <div className="absolute inset-0 bg-gradient-to-br from-legado-marinho via-legado-marinho to-legado-marinho-claro" />
      <div className="absolute top-20 left-10 h-32 w-32 rounded-full border border-legado-ouro/10" aria-hidden="true" />
      <div className="absolute right-1/3 bottom-24 h-48 w-48 rounded-full border border-legado-ouro/5" aria-hidden="true" />
      <div className="relative z-10 contem-legado grid items-center gap-10 pt-12 pb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14 lg:pt-20 lg:pb-24">
        <div className="min-w-0 animate-surgir text-center lg:text-left">
          <NotaDeMelhoria className="mx-auto text-left lg:mx-0">{capa.nota}</NotaDeMelhoria>
          <p className="mb-6 text-xs font-light tracking-[0.3em] text-legado-ouro uppercase sm:text-sm">{capa.rotulo}</p>
          <h1 className="font-serif leading-[1.02] tracking-tight">
            <span className="block text-2xl text-legado-gelo/85 uppercase sm:text-3xl md:text-4xl">{capa.produto[0]}</span>
            <span className="block text-5xl text-legado-ouro uppercase sm:text-6xl md:text-7xl xl:text-8xl">{capa.produto[1]}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-serif text-xl leading-snug text-legado-gelo md:text-2xl lg:mx-0">{capa.promessa}</p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-legado-gelo/70 md:text-lg lg:mx-0">{capa.apoio}</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <BotaoDoSite href={ancora(ANCORAS.oferta)} destaque>
              {botao}
            </BotaoDoSite>
            <a href={ancora(ANCORAS.metodo)} className="text-sm tracking-wide text-legado-gelo/70 underline decoration-legado-ouro/60 underline-offset-4 hover:text-legado-gelo">
              Como funciona
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]">
          <div className="absolute -inset-3 rounded-[999px] border border-legado-ouro/30" aria-hidden="true" />
          <div className="overflow-hidden rounded-[999px] bg-gradient-to-br from-legado-ouro via-legado-ouro-claro to-legado-ouro-moldura p-1 shadow-2xl shadow-black/40">
            <img
              src={capa.foto}
              alt="Carolina Wadt, mentora da Mentoria Mulher Inteira"
              width={832}
              height={1248}
              className="block aspect-[4/5] w-full rounded-[999px] object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-legado-ouro/40 bg-legado-marinho/95 px-5 py-2 text-center shadow-lg whitespace-nowrap lg:left-auto lg:-right-4 lg:translate-x-0">
            <b className="font-serif text-lg font-normal text-legado-ouro">{capa.selo.valor}</b>
            <span className="ml-2 text-xs text-legado-gelo/70">{capa.selo.legenda}</span>
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-legado-ouro/15 bg-legado-marinho-claro/40">
        <ul className="contem-legado grid grid-cols-2 gap-x-4 gap-y-6 py-8 lg:grid-cols-4">
          {capa.beneficios.map(({ icone: Icone, titulo, texto }) => (
            <li key={titulo} className="flex min-w-0 flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
              <IconeEmCirculo>
                <Icone className="h-5 w-5" aria-hidden="true" />
              </IconeEmCirculo>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-legado-gelo md:text-base">{titulo}</p>
                <p className="text-xs text-legado-gelo/60 md:text-sm">{texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export function DoresDoSite({ conteudo }: Fatia<"dores">) {
  return (
    <SecaoDoSite fundo="creme" id="para-voce">
      <NotaDeMelhoria className="mx-auto">{conteudo.nota}</NotaDeMelhoria>
      <RotuloDoSite>{conteudo.rotulo}</RotuloDoSite>
      <TituloDoSite>{conteudo.titulo}</TituloDoSite>
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {conteudo.itens.map((dor, i) => (
          <Surgir key={dor.texto} atraso={i * 100}>
            <figure className="group relative m-0 h-full overflow-hidden rounded-2xl bg-legado-marinho shadow-lg shadow-legado-marinho/15">
              <img
                src={dor.foto}
                alt={dor.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-legado-marinho via-legado-marinho/40 to-transparent" aria-hidden="true" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="mb-3 block h-px w-10 bg-legado-ouro" aria-hidden="true" />
                <span className="text-base leading-snug font-medium text-legado-gelo md:text-lg">{dor.texto}</span>
              </figcaption>
            </figure>
          </Surgir>
        ))}
      </div>
      <Surgir className="mt-14 space-y-8 text-center">
        <blockquote className="mx-auto max-w-3xl font-serif text-xl leading-relaxed text-legado-azul/85 md:text-2xl">
          “{conteudo.citacao}”
        </blockquote>
        <BotaoDoSite href={ancora(ANCORAS.oferta)}>{conteudo.botao}</BotaoDoSite>
      </Surgir>
    </SecaoDoSite>
  )
}

export function ResultadosDoSite({ conteudo }: Fatia<"resultados">) {
  return (
    <SecaoDoSite fundo="azul" id="resultados">
      <div className="absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-legado-areia/10 blur-3xl" aria-hidden="true" />
      <NotaDeMelhoria className="mx-auto">{conteudo.nota}</NotaDeMelhoria>
      <RotuloDoSite>{conteudo.rotulo}</RotuloDoSite>
      <TituloDoSite>{conteudo.titulo}</TituloDoSite>
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {conteudo.itens.map((r, i) => (
          <Surgir key={r.titulo} atraso={i * 100} className="group text-center">
            {/* Moldura de quadro: passe-partout creme + filete dourado. */}
            <div className="mx-auto mb-6 max-w-[300px] rounded-sm bg-legado-creme p-3 shadow-2xl shadow-black/30 ring-1 ring-legado-ouro/50">
              <div className="overflow-hidden ring-1 ring-legado-areia/60">
                <img
                  src={r.imagem}
                  alt={r.titulo}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <h3 className="mb-2 font-serif text-xl text-legado-ouro md:text-2xl">{r.titulo}</h3>
            <p className="mx-auto max-w-[28ch] text-sm leading-relaxed text-legado-gelo/80 md:text-base">{r.texto}</p>
          </Surgir>
        ))}
      </div>
    </SecaoDoSite>
  )
}

export function PilaresDoSite({ conteudo }: Fatia<"pilares">) {
  return (
    <SecaoDoSite fundo="creme" id="pilares">
      <NotaDeMelhoria className="mx-auto">{conteudo.nota}</NotaDeMelhoria>
      <RotuloDoSite>{conteudo.rotulo}</RotuloDoSite>
      <TituloDoSite>{conteudo.titulo}</TituloDoSite>
      <ApoioDoSite>{conteudo.apoio}</ApoioDoSite>
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
        {conteudo.itens.map((p, i) => (
          <Surgir key={p.nome} atraso={i * 120}>
            <article className="flex h-full flex-col rounded-2xl border border-legado-areia/30 bg-white p-6 text-center shadow-xl shadow-legado-azul/5">
              <div className="mx-auto mb-6 w-full max-w-[260px] rounded-xl bg-gradient-to-br from-legado-ouro via-legado-ouro-claro to-legado-ouro-moldura p-[3px]">
                <img src={p.imagem} alt="" loading="lazy" className="block aspect-[9/8] w-full rounded-[10px] object-cover" />
              </div>
              <p className="mb-2 text-xs font-medium tracking-[0.25em] text-legado-ouro-escuro uppercase">Pilar {i + 1}</p>
              <h3 className="mb-1 font-serif text-2xl text-legado-azul">{p.nome}</h3>
              <p className="mb-4 text-sm font-semibold text-legado-areia">{p.foco}</p>
              <p className="mt-auto text-base leading-relaxed text-legado-azul/75">{p.texto}</p>
            </article>
          </Surgir>
        ))}
      </div>
    </SecaoDoSite>
  )
}

/**
 * Faixa da campanha: fica presa no topo durante a rolagem e leva para a
 * página da promoção. Usa as cores do site (marinho e dourado), não as da Black.
 */
export function FaixaDaCampanha({ conteudo }: { conteudo: NonNullable<ConteudoDoSiteProposto["chamadaDaCampanha"]> }) {
  return (
    <LinkExterno
      href={conteudo.url}
      className="sticky top-0 z-30 flex items-center justify-center gap-3 border-b border-legado-ouro/30 bg-legado-marinho/95 px-4 py-2.5 font-inter text-legado-gelo backdrop-blur transition-colors hover:bg-legado-marinho"
    >
      <span className="shrink-0 rounded-full bg-gradient-to-r from-legado-ouro to-legado-ouro-escuro px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-legado-marinho uppercase">
        {conteudo.destaque}
      </span>
      <span className="hidden text-sm sm:inline">{conteudo.texto}</span>
      <span className="shrink-0 text-sm font-semibold whitespace-nowrap text-legado-ouro underline underline-offset-4">{conteudo.botao} →</span>
    </LinkExterno>
  )
}
