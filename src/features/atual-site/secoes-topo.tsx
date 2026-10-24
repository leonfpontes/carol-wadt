/**
 * Réplica fiel do topo de carolinawadt.com: capa, "Você se identifica?" e pilares.
 * As classes reproduzem o Tailwind do site publicado, trocando os hex soltos
 * pelos tokens "legado-*" de src/index.css.
 */
import { LinkExterno } from "@/components/shared/LinkExterno"
import { Surgir } from "@/components/shared/Surgir"
import { SITE_ATUAL } from "@/content/atual/site"

const { capa, identificacao, pilares } = SITE_ATUAL

export function CapaAtual() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-legado-marinho">
      <div className="absolute inset-0 bg-gradient-to-br from-legado-marinho via-legado-marinho to-legado-marinho-claro opacity-80" />
      <div className="absolute top-20 left-10 h-32 w-32 rounded-full border border-legado-ouro/10" />
      <div className="absolute right-20 bottom-40 h-48 w-48 rounded-full border border-legado-ouro/5" />
      <div className="absolute top-1/3 right-1/4 h-32 w-1 bg-gradient-to-b from-transparent via-legado-ouro/20 to-transparent" />
      <div className="absolute bottom-1/3 left-1/4 h-32 w-1 bg-gradient-to-b from-transparent via-legado-ouro/20 to-transparent" />
      <div className="relative z-10 contem-legado">
        <div className="mx-auto flex max-w-4xl animate-surgir flex-col items-center space-y-8 text-center">
          <span className="text-sm font-light tracking-[0.3em] text-legado-ouro uppercase">{capa.rotulo}</span>
          <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-legado-gelo md:text-5xl lg:text-6xl xl:text-7xl">
            {capa.tituloLinha1}
            <br />
            <span className="text-legado-ouro">{capa.tituloLinha2}</span>
          </h1>
          <p className="text-xl font-light tracking-wide text-legado-gelo/80 md:text-2xl">{capa.subtitulo}</p>
          <p className="max-w-2xl text-lg leading-relaxed font-light text-legado-ouro md:text-xl">
            {capa.frase[0]}
            <br />
            {capa.frase[1]}
          </p>
          <LinkExterno
            href={capa.botao.url}
            className="mt-4 rounded-full bg-gradient-to-r from-legado-ciano to-legado-petroleo px-10 py-4 text-base font-medium tracking-wider text-legado-gelo uppercase shadow-lg shadow-legado-ciano/20 transition-all duration-300 hover:shadow-xl hover:shadow-legado-ciano/30 md:text-lg"
          >
            {capa.botao.texto}
          </LinkExterno>
          <div className="mt-12 flex flex-wrap justify-center gap-8 pt-8 md:gap-12">
            {capa.selos.map(({ icone: Icone, texto }) => (
              <div key={texto} className="flex items-center gap-2 text-legado-gelo/60">
                <Icone className="h-5 w-5 text-legado-ouro" />
                <span className="text-sm tracking-wide">{texto}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-legado-marinho to-transparent" />
    </section>
  )
}

/** Fio dourado centralizado que o site usa no topo das seções claras. */
export function FioDourado() {
  return (
    <div className="absolute top-0 left-1/2 h-1 w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-legado-areia to-transparent" />
  )
}

export function IdentificacaoAtual() {
  return (
    <section className="relative bg-legado-creme py-24 md:py-32">
      <FioDourado />
      <div className="relative z-10 contem-legado">
        <Surgir className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-legado-areia italic md:text-4xl lg:text-5xl">{identificacao.titulo}</h2>
        </Surgir>
        <Surgir>
          <div className="mx-auto max-w-5xl rounded-3xl bg-legado-marinho p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
              {identificacao.itens.map(({ icone: Icone, texto }, i) => (
                <Surgir key={texto} atraso={i * 100} className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-legado-ouro/20">
                    <Icone className="h-6 w-6 text-legado-ouro" />
                  </div>
                  <p className="text-sm leading-relaxed text-legado-gelo/90 md:text-base">{texto}</p>
                </Surgir>
              ))}
            </div>
          </div>
        </Surgir>
        <Surgir className="mt-12 space-y-8 text-center">
          <p className="mx-auto max-w-3xl font-serif text-lg text-legado-azul/80 italic md:text-xl">{identificacao.citacao}</p>
          <LinkExterno
            href={identificacao.botao.url}
            className="inline-block rounded-full bg-gradient-to-r from-legado-ciano-claro to-legado-ardosia px-10 py-4 font-medium tracking-wider text-white uppercase shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            {identificacao.botao.texto}
          </LinkExterno>
        </Surgir>
      </div>
    </section>
  )
}

export function PilaresAtual() {
  return (
    <section className="relative overflow-hidden bg-legado-azul py-24 md:py-32">
      <div className="absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-legado-areia/10 blur-3xl" />
      <div className="relative z-10 contem-legado">
        <Surgir className="mb-16 text-center md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            <span className="text-white">{pilares.tituloInicio}</span>
            <span className="text-legado-areia italic">{pilares.tituloDestaque}</span>
            <span className="text-white">{pilares.tituloFim}</span>
          </h2>
        </Surgir>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {pilares.itens.map((pilar, i) => (
            <Surgir key={pilar.titulo} atraso={i * 120} className="text-center">
              <h3 className="mb-2 font-inter text-lg font-semibold tracking-wide text-white md:text-xl">{pilar.titulo}</h3>
              <p className="mb-3 font-serif text-base text-legado-areia italic md:text-lg">{pilar.subtitulo}</p>
              <p className="mx-auto mb-8 max-w-xs text-sm leading-relaxed text-white/80 md:text-base">{pilar.descricao}</p>
              <img src={pilar.imagem} alt={pilar.titulo} loading="lazy" className="mx-auto w-full max-w-[280px] object-contain" />
            </Surgir>
          ))}
        </div>
      </div>
    </section>
  )
}
