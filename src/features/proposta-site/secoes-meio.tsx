/**
 * Proposta do site oficial, meio da página: para quem é, para quem não é,
 * trilha de como funciona, quem é a Carolina e depoimentos em carrossel.
 * Fundos: marinho → marfim → azul → gelo → marinho.
 */
import { Quote, Star } from "lucide-react"
import { ANCORAS, ancora } from "@/app/rotas"
import { NotaDeMelhoria } from "@/components/shared/notas"
import { Surgir } from "@/components/shared/Surgir"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import type { ConteudoDoSiteProposto, ItemIlustrado } from "@/content/proposta/tipos-site"
import { ApoioDoSite, BotaoDoSite, IconeEmCirculo, RotuloDoSite, SecaoDoSite, TituloDoSite } from "@/features/proposta-site/base"
import { cn } from "@/lib/utils"

type Fatia<K extends keyof ConteudoDoSiteProposto> = { conteudo: ConteudoDoSiteProposto[K]; botao: string }

/** Foto com moldura dourada fina e cantos arredondados, usada nas seções de reconhecimento. */
function FotoEmoldurada({ src, className }: { src: string; className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-[380px]", className)}>
      <div className="absolute -inset-3 rounded-[28px] border border-legado-ouro/35" aria-hidden="true" />
      <img src={src} alt="" loading="lazy" className="relative block aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl shadow-black/25" />
    </div>
  )
}

function ListaIlustrada({ itens, escuro }: { itens: ItemIlustrado[]; escuro: boolean }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      {itens.map(({ icone: Icone, titulo, texto }, i) => (
        <Surgir key={titulo} atraso={i * 90}>
          <li
            className={cn(
              "flex h-full gap-4 rounded-2xl p-5",
              escuro ? "bg-white/5 ring-1 ring-white/10" : "bg-white shadow-lg shadow-legado-azul/5 ring-1 ring-legado-areia/25",
            )}
          >
            <IconeEmCirculo>
              <Icone className="h-5 w-5" aria-hidden="true" />
            </IconeEmCirculo>
            <div className="min-w-0">
              <h3 className={cn("mb-1 text-lg font-semibold", escuro ? "text-legado-ouro" : "text-legado-azul")}>{titulo}</h3>
              <p className={cn("text-base leading-relaxed", escuro ? "text-legado-gelo/75" : "text-legado-azul/70")}>{texto}</p>
            </div>
          </li>
        </Surgir>
      ))}
    </ul>
  )
}

export function ParaQuemDoSite({ conteudo }: Fatia<"paraQuem">) {
  return (
    <SecaoDoSite fundo="marinho" id="para-quem">
      <NotaDeMelhoria className="mx-auto">{conteudo.nota}</NotaDeMelhoria>
      <RotuloDoSite>{conteudo.rotulo}</RotuloDoSite>
      <TituloDoSite>{conteudo.titulo}</TituloDoSite>
      <ApoioDoSite>{conteudo.apoio}</ApoioDoSite>
      <div className="mx-auto mt-12 grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <Surgir>
          <FotoEmoldurada src={conteudo.foto} />
        </Surgir>
        <ListaIlustrada itens={conteudo.itens} escuro />
      </div>
    </SecaoDoSite>
  )
}

export function NaoEhParaDoSite({ conteudo }: Fatia<"naoEhPara">) {
  const [antes, depois] = conteudo.titulo.split(conteudo.destaque)
  return (
    <SecaoDoSite fundo="marfim" id="nao-e-para">
      <NotaDeMelhoria className="mx-auto">{conteudo.nota}</NotaDeMelhoria>
      <RotuloDoSite>{conteudo.rotulo}</RotuloDoSite>
      <TituloDoSite>
        {antes}
        <span className="font-semibold text-legado-ouro-escuro uppercase">{conteudo.destaque}</span>
        {depois}
      </TituloDoSite>
      <ApoioDoSite>{conteudo.apoio}</ApoioDoSite>
      <div className="mx-auto mt-12 grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="order-2 lg:order-1">
          <ListaIlustrada itens={conteudo.itens} escuro={false} />
        </div>
        <Surgir className="order-1 lg:order-2">
          <FotoEmoldurada src={conteudo.foto} />
        </Surgir>
      </div>
      <Surgir className="mt-12 text-center">
        <BotaoDoSite href={ancora(ANCORAS.oferta)}>{conteudo.botao}</BotaoDoSite>
      </Surgir>
    </SecaoDoSite>
  )
}

/**
 * Trilha "Como funciona": uma linha dourada liga quem a visitante é hoje a
 * quem ela se torna, passando por cada parte da mentoria. Vertical no
 * celular; em zigue-zague a partir do tablet.
 */
export function TrilhaDoSite({ conteudo }: Fatia<"trilha">) {
  return (
    <SecaoDoSite fundo="azul" id={ANCORAS.metodo}>
      <NotaDeMelhoria className="mx-auto">{conteudo.nota}</NotaDeMelhoria>
      <RotuloDoSite>{conteudo.rotulo}</RotuloDoSite>
      <TituloDoSite>{conteudo.titulo}</TituloDoSite>
      <ApoioDoSite>{conteudo.apoio}</ApoioDoSite>
      <ol className="relative mx-auto mt-14 max-w-4xl list-none p-0">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-6 w-px bg-gradient-to-b from-legado-ouro/10 via-legado-ouro to-legado-ouro/10 md:left-1/2"
        />
        {conteudo.etapas.map((etapa, i) => {
          const Icone = etapa.icone
          const aDireita = i % 2 === 1
          return (
            <li key={etapa.titulo} className="relative mb-10 grid grid-cols-[48px_minmax(0,1fr)] gap-5 last:mb-0 md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:gap-8">
              <div
                className={cn(
                  "relative z-10 flex h-12 w-12 items-center justify-center rounded-full md:col-start-2 md:h-14 md:w-14",
                  etapa.ponta
                    ? "bg-gradient-to-br from-legado-ouro to-legado-ouro-escuro text-legado-marinho shadow-lg shadow-legado-ouro/30"
                    : "border border-legado-ouro/60 bg-legado-marinho text-legado-ouro",
                )}
              >
                <Icone className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
              </div>
              <Surgir
                atraso={i * 80}
                className={cn("min-w-0 md:row-start-1", aDireita ? "md:col-start-3" : "md:col-start-1 md:text-right")}
              >
                <div
                  className={cn(
                    "rounded-2xl p-5 md:p-6",
                    etapa.ponta ? "bg-legado-marinho/70 ring-1 ring-legado-ouro/50" : "bg-white/5 ring-1 ring-white/15",
                  )}
                >
                  <p className="mb-1 text-xs font-medium tracking-[0.25em] text-legado-ouro uppercase">{etapa.rotulo}</p>
                  <h3 className="mb-2 font-serif text-xl text-legado-gelo md:text-2xl">{etapa.titulo}</h3>
                  <p className="text-sm leading-relaxed text-legado-gelo/75 md:text-base">{etapa.texto}</p>
                </div>
              </Surgir>
            </li>
          )
        })}
      </ol>
      <Surgir className="mt-14 text-center">
        <BotaoDoSite href={ancora(ANCORAS.oferta)}>{conteudo.botao}</BotaoDoSite>
      </Surgir>
    </SecaoDoSite>
  )
}

export function MentoraDoSite({ conteudo, botao }: Fatia<"mentora">) {
  return (
    <SecaoDoSite fundo="gelo" id="carolina">
      <NotaDeMelhoria className="mx-auto">{conteudo.nota}</NotaDeMelhoria>
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Surgir className="flex justify-center lg:justify-start">
          <div className="relative rounded-2xl bg-gradient-to-br from-legado-ouro via-legado-ouro-claro to-legado-ouro-moldura p-1 shadow-xl">
            <img src={conteudo.foto} alt="Carolina Wadt" loading="lazy" className="h-auto w-72 rounded-xl object-cover sm:w-80 md:w-96" />
          </div>
        </Surgir>
        <Surgir className="space-y-6 text-center lg:text-left">
          <div>
            <TituloDoSite centro={false} className="text-center text-3xl md:text-4xl lg:text-left lg:text-4xl">
              {conteudo.titulo}
            </TituloDoSite>
            <p className="text-lg leading-relaxed text-legado-marinho/80">{conteudo.resumo}</p>
          </div>
          <p className="leading-relaxed text-legado-marinho/70">{conteudo.historia}</p>
          <div className="flex justify-center gap-10 lg:justify-start">
            {conteudo.numeros.map((n) => (
              <div key={n.valor}>
                <p className="font-serif text-3xl text-legado-ouro-escuro">{n.valor}</p>
                <p className="text-xs text-legado-marinho/60">{n.legenda}</p>
              </div>
            ))}
          </div>
          <a
            href={ancora(ANCORAS.oferta)}
            className="inline-block rounded-sm bg-gradient-to-r from-legado-profundo to-legado-marinho px-8 py-4 font-medium tracking-wide text-white uppercase transition-all duration-300 hover:opacity-90"
          >
            {botao}
          </a>
        </Surgir>
      </div>
    </SecaoDoSite>
  )
}

function Estrelas({ className }: { className?: string }) {
  return (
    <div className={cn("flex gap-1", className)} aria-label="5 de 5 estrelas" role="img">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="h-4 w-4 fill-legado-ouro text-legado-ouro" aria-hidden="true" />
      ))}
    </div>
  )
}

const inicial = (nome: string) => nome.trim().charAt(0).toUpperCase()

export function DepoimentosDoSite({ conteudo }: Fatia<"depoimentos">) {
  return (
    <SecaoDoSite fundo="marinho" id="depoimentos">
      <NotaDeMelhoria className="mx-auto">{conteudo.nota}</NotaDeMelhoria>
      <RotuloDoSite>{conteudo.rotulo}</RotuloDoSite>
      <TituloDoSite>{conteudo.titulo}</TituloDoSite>
      <div className="mb-12 flex flex-col items-center gap-2">
        <Estrelas className="[&_svg]:h-6 [&_svg]:w-6" />
        <p className="text-sm text-legado-gelo/60">{conteudo.nota5}</p>
      </div>
      <Carousel opts={{ align: "start", loop: true }} className="mx-auto max-w-6xl px-0 md:px-14">
        <CarouselContent className="-ml-5">
          {conteudo.itens.map((d, i) => (
            <CarouselItem key={i} className="basis-[88%] pl-5 sm:basis-1/2 lg:basis-1/3">
              <figure className="relative m-0 flex h-full flex-col rounded-2xl bg-legado-creme p-7 text-legado-azul shadow-xl shadow-black/20">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-legado-ouro/30" aria-hidden="true" />
                <Estrelas className="mb-4" />
                <blockquote className="m-0 flex-1 text-base leading-relaxed text-legado-azul/85">{d.texto}</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-legado-areia/30 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-legado-ouro to-legado-ouro-escuro font-serif text-lg text-legado-marinho">
                    {inicial(d.autora)}
                  </span>
                  <span>
                    <b className="block text-sm text-legado-azul">{d.autora}</b>
                    <span className="text-xs text-legado-azul/60">{d.detalhe}</span>
                  </span>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-8 flex justify-center gap-3 md:mt-0">
          <CarouselPrevious className="static size-11 translate-y-0 border-legado-ouro/50 bg-transparent text-legado-ouro hover:bg-legado-ouro hover:text-legado-marinho md:absolute md:top-1/2 md:left-0 md:-translate-y-1/2" />
          <CarouselNext className="static size-11 translate-y-0 border-legado-ouro/50 bg-transparent text-legado-ouro hover:bg-legado-ouro hover:text-legado-marinho md:absolute md:top-1/2 md:right-0 md:-translate-y-1/2" />
        </div>
      </Carousel>
    </SecaoDoSite>
  )
}
