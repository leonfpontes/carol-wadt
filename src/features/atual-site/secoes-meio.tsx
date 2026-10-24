/**
 * Réplica fiel do meio de carolinawadt.com: para quem é, para quem não é,
 * como funciona, resultados e depoimentos.
 */
import { CircleCheck, Diamond, Star, X } from "lucide-react"
import { LinkExterno } from "@/components/shared/LinkExterno"
import { Surgir } from "@/components/shared/Surgir"
import { SITE_ATUAL } from "@/content/atual/site"
import { FioDourado } from "@/features/atual-site/secoes-topo"

const { paraQuem, naoEhPara, comoFunciona, resultados, depoimentos } = SITE_ATUAL

export function ParaQuemAtual() {
  return (
    <section className="relative overflow-hidden bg-legado-creme py-24 md:py-32">
      <FioDourado />
      <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-legado-areia/5 blur-3xl" />
      <div className="absolute right-10 bottom-20 h-48 w-48 rounded-full bg-legado-areia/5 blur-3xl" />
      <div className="relative z-10 contem-legado">
        <Surgir className="mb-14 text-center md:mb-16">
          <h2 className="mb-5 font-serif text-3xl text-legado-areia italic md:text-4xl lg:text-5xl">{paraQuem.titulo}</h2>
          <p className="text-lg font-medium text-legado-azul md:text-xl">{paraQuem.subtitulo}</p>
        </Surgir>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 lg:gap-14">
          {paraQuem.itens.map((item, i) => (
            <Surgir key={item.titulo} atraso={i * 100} className="flex items-start gap-5">
              <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-legado-turquesa/20 to-legado-celeste/10">
                <Diamond strokeWidth={1.5} className="h-5 w-5 fill-legado-celeste/30 text-legado-turquesa" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-legado-areia">{item.titulo}</h3>
                <p className="text-base leading-relaxed text-legado-azul/80">{item.descricao}</p>
              </div>
            </Surgir>
          ))}
        </div>
      </div>
    </section>
  )
}

export function NaoEhParaAtual() {
  return (
    <section className="relative overflow-hidden bg-legado-marfim py-24 md:py-32">
      <div className="pointer-events-none absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-legado-ouro/5 to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-legado-ouro/5 to-transparent" />
      <div className="relative z-10 contem-legado">
        <Surgir className="mb-16 text-center">
          <h2 className="font-serif text-3xl text-legado-azul italic md:text-4xl lg:text-5xl">
            {naoEhPara.tituloInicio}
            <span className="font-bold text-legado-ouro not-italic">{naoEhPara.tituloDestaque}</span>
            {naoEhPara.tituloFim}
          </h2>
        </Surgir>
        <div className="mx-auto mb-16 grid max-w-4xl gap-x-16 gap-y-10 md:grid-cols-2">
          {naoEhPara.itens.map((item, i) => (
            <Surgir key={item.titulo} atraso={i * 100} className="flex items-start gap-4">
              <X strokeWidth={2.5} className="mt-1 h-6 w-6 flex-shrink-0 text-legado-alerta" />
              <div>
                <h3 className="mb-1 text-lg font-bold text-legado-azul">{item.titulo}</h3>
                <p className="text-base leading-relaxed text-legado-azul/70">{item.descricao}</p>
              </div>
            </Surgir>
          ))}
        </div>
        <Surgir className="text-center">
          <LinkExterno
            href={naoEhPara.botao.url}
            className="inline-block rounded-full bg-gradient-to-r from-legado-azul to-legado-azul-medio px-10 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-legado-azul/30"
          >
            {naoEhPara.botao.texto}
          </LinkExterno>
        </Surgir>
      </div>
    </section>
  )
}

export function ComoFuncionaAtual() {
  return (
    <section className="relative overflow-hidden bg-legado-marinho py-24 md:py-32">
      <div className="contem-legado">
        <Surgir className="mb-16 text-center">
          <h2 className="font-serif text-3xl text-legado-ouro italic md:text-4xl lg:text-5xl">{comoFunciona.titulo}</h2>
        </Surgir>
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {comoFunciona.itens.map((item, i) => (
            <Surgir key={item.titulo} atraso={i * 100} className="relative pt-8">
              <div className="h-full rounded-2xl border border-white/30 bg-transparent p-6 pt-10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg">
                    <CircleCheck className="h-8 w-8 text-legado-marinho" />
                  </div>
                </div>
                <h3 className="mb-3 text-center font-serif text-xl font-bold text-legado-ouro">{item.titulo}</h3>
                <p className="text-center text-sm leading-relaxed whitespace-pre-line text-legado-gelo">{item.descricao}</p>
              </div>
            </Surgir>
          ))}
        </div>
        <Surgir className="text-center">
          <LinkExterno
            href={comoFunciona.botao.url}
            className="inline-block rounded-full bg-gradient-to-r from-legado-azul to-legado-verde-agua px-10 py-4 text-sm font-bold tracking-wider text-white uppercase transition-opacity hover:opacity-90 md:text-base"
          >
            {comoFunciona.botao.texto}
          </LinkExterno>
        </Surgir>
      </div>
    </section>
  )
}

export function ResultadosAtual() {
  return (
    <section className="relative overflow-hidden bg-legado-creme py-24 md:py-32">
      <div className="relative z-10 contem-legado">
        <Surgir className="mb-16 text-center md:mb-20">
          <h2 className="font-serif text-3xl text-legado-azul italic md:text-4xl lg:text-5xl">{resultados.titulo}</h2>
        </Surgir>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {resultados.itens.map((item, i) => (
            <Surgir key={item.titulo} atraso={i * 100} className="group text-center">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  loading="lazy"
                  className="aspect-square w-full rounded-lg object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-legado-azul italic md:text-2xl">{item.titulo}</h3>
              <p className="text-sm leading-relaxed text-legado-azul/80 md:text-base">{item.descricao}</p>
            </Surgir>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DepoimentosAtual() {
  return (
    <section className="relative overflow-hidden bg-legado-creme py-24 md:py-32">
      <FioDourado />
      <div className="contem-legado">
        <Surgir className="mb-12 text-center">
          <h2 className="mb-6 font-serif text-3xl text-legado-areia italic md:text-4xl lg:text-5xl">{depoimentos.titulo}</h2>
          <div className="flex justify-center gap-1" aria-label="5 estrelas">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className="h-5 w-5 fill-legado-areia text-legado-areia" />
            ))}
          </div>
        </Surgir>
        <div className="mx-auto max-w-5xl columns-1 gap-5 md:columns-2 lg:columns-3">
          {depoimentos.itens.map((texto, i) => (
            <Surgir key={texto} atraso={i * 60} className="mb-5 break-inside-avoid">
              <div className="rounded-xl bg-legado-grafite p-5 shadow-lg">
                <p className="text-sm leading-relaxed text-white/95 md:text-base">{texto}</p>
              </div>
            </Surgir>
          ))}
        </div>
      </div>
    </section>
  )
}
