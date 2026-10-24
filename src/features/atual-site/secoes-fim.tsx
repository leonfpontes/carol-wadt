/**
 * Réplica fiel do fim de carolinawadt.com: oferta, dúvidas, "Quem é" e rodapé.
 */
import { Link } from "react-router"
import { ANCORAS, ROTAS } from "@/app/rotas"
import { LinkExterno } from "@/components/shared/LinkExterno"
import { Surgir } from "@/components/shared/Surgir"
import { SITE_ATUAL } from "@/content/atual/site"

const { oferta, duvida, sobre, rodape } = SITE_ATUAL
const botaoProfundo =
  "inline-block rounded-sm bg-gradient-to-r from-legado-profundo to-legado-marinho px-8 py-4 font-medium text-white transition-all duration-300 hover:opacity-90"

export function OfertaAtual() {
  const { condicao, checkout } = oferta.dados
  return (
    <section id={ANCORAS.oferta} className="relative overflow-hidden bg-legado-marinho py-24 md:py-32">
      <div className="relative z-10 contem-legado">
        <Surgir className="mx-auto max-w-4xl text-center">
          <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-legado-gelo/90 md:text-xl">{oferta.introducao}</p>
          <p className="mb-12 text-lg text-legado-gelo/70 italic">{oferta.urgencia}</p>
          <div className="mb-12 flex justify-center">
            <img src={oferta.mockup} alt={oferta.mockupAlt} loading="lazy" className="mx-auto w-full max-w-3xl" />
          </div>
          <p className="mb-2 text-lg text-legado-gelo/80">{oferta.rotulo}</p>
          <h2 className="mb-8 font-serif text-3xl text-legado-ouro md:text-4xl lg:text-5xl">{oferta.nome}</h2>
          <p className="mb-6 text-xl text-legado-gelo/50 line-through">{oferta.precoDeTexto}</p>
          <p className="mb-2 text-sm tracking-wide text-legado-ouro">por {condicao.parcelas}x de</p>
          <p className="mb-4 font-serif text-5xl text-legado-ouro md:text-6xl lg:text-7xl">
            {condicao.valorDaParcela.formatar({ comEspaco: true })}
          </p>
          <p className="mb-10 text-sm text-legado-gelo/50">ou {condicao.aVista.formatar()} à vista</p>
          <LinkExterno
            href={checkout.url()}
            className="inline-block rounded-sm bg-gradient-to-r from-legado-ouro to-legado-ouro-escuro px-10 py-4 text-base font-bold tracking-wider text-legado-marinho uppercase shadow-lg shadow-legado-ouro/20 transition-all duration-300 hover:shadow-xl hover:shadow-legado-ouro/30 md:px-14 md:text-lg"
          >
            {oferta.botao}
          </LinkExterno>
        </Surgir>
      </div>
    </section>
  )
}

export function DuvidaAtual() {
  return (
    <section className="relative bg-legado-marinho py-16 md:py-24">
      <div className="contem-legado">
        <Surgir className="mx-auto max-w-xl text-center">
          <h3 className="mb-8 font-serif text-2xl text-legado-gelo md:text-3xl">{duvida.titulo}</h3>
          <LinkExterno href={duvida.botao.url} className={botaoProfundo}>
            {duvida.botao.texto}
          </LinkExterno>
        </Surgir>
      </div>
    </section>
  )
}

export function SobreAtual() {
  return (
    <section className="relative bg-legado-gelo py-24 md:py-32">
      <div className="contem-legado">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Surgir className="flex justify-center lg:justify-start">
            <div className="relative rounded-2xl bg-gradient-to-br from-legado-ouro via-legado-ouro-claro to-legado-ouro-moldura p-1 shadow-xl">
              <img src={sobre.foto} alt="Carolina Wadt" loading="lazy" className="h-auto w-80 rounded-xl object-cover md:w-96" />
            </div>
          </Surgir>
          <Surgir className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="mb-6 font-serif text-3xl text-legado-marinho md:text-4xl">{sobre.titulo}</h2>
              <p className="text-lg leading-relaxed text-legado-marinho/80">{sobre.resumo}</p>
            </div>
            <p className="leading-relaxed text-legado-marinho/70 italic">{sobre.historia}</p>
            <LinkExterno href={sobre.botao.url} className={`${botaoProfundo} mt-4`}>
              {sobre.botao.texto}
            </LinkExterno>
          </Surgir>
        </div>
      </div>
    </section>
  )
}

export function RodapeAtual() {
  return (
    <footer className="border-t border-legado-ouro/10 bg-legado-marinho py-12">
      <div className="contem-legado">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-serif text-xl text-legado-gelo">{rodape.nome}</p>
            <p className="mt-1 text-sm text-legado-gelo/40">{rodape.direitos}</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link className="text-legado-gelo/40 transition-colors hover:text-legado-ouro" to={ROTAS.atual.privacidade}>
              Política de Privacidade
            </Link>
            <Link className="text-legado-gelo/40 transition-colors hover:text-legado-ouro" to={ROTAS.atual.termos}>
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
