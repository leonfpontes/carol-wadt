/**
 * Réplica fiel da página "Black Outubro" que a Carol publicou como artefato.
 * Cada seção é um componente pequeno; a página só escolhe a ordem.
 */
import type { ReactNode } from "react"
import { ANCORAS } from "@/app/rotas"
import { LinkExterno } from "@/components/shared/LinkExterno"
import { BLACK_ATUAL } from "@/content/atual/black"
import { cn } from "@/lib/utils"

const B = BLACK_ATUAL

type Tom = "escuro" | "claro"

function Bloco({ tom, children, id, className }: { tom: Tom; children: ReactNode; id?: string; className?: string }) {
  return (
    <section id={id} className={cn(tom === "escuro" ? "bg-preto text-white" : "bg-white text-preto", className)}>
      <div className="contem py-20">{children}</div>
    </section>
  )
}

function Rotulo({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-xs font-extrabold tracking-[0.22em] text-ouro uppercase">{children}</p>
}

function Titulo({ children, className }: { children: ReactNode; className?: string }) {
  return <h2 className={cn("titulo mb-[18px] text-[clamp(1.9rem,4.6vw,2.8rem)] leading-[1.15]", className)}>{children}</h2>
}

function BotaoCompra({ tom }: { tom: Tom }) {
  return (
    <a
      href={B.botao.url}
      className={cn(
        "inline-block rounded-full px-7 py-4 text-[15px] font-extrabold tracking-[0.02em] no-underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ouro-suave",
        tom === "escuro" ? "bg-ouro text-preto" : "bg-preto text-white",
      )}
    >
      {B.botao.texto}
    </a>
  )
}

/** Ícone da chave estilizada que acompanha o rótulo "Mentoria" na capa. */
function IconeChave() {
  return (
    <svg viewBox="0 0 60 150" aria-hidden="true" className="h-auto w-[22px] flex-none text-ouro">
      <circle cx="30" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="30" cy="20" r="4" fill="currentColor" />
      <rect x="27" y="34" width="6" height="108" fill="currentColor" />
      <rect x="34" y="106" width="14" height="5" fill="currentColor" />
      <rect x="34" y="122" width="10" height="5" fill="currentColor" />
    </svg>
  )
}

export function CapaBlackAtual() {
  const { capa } = B
  return (
    <header className="overflow-hidden bg-preto text-white">
      <div className="relative mx-auto grid max-w-[1040px] grid-cols-1 gap-9 px-5 pt-12 pb-14 md:min-h-[820px] md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-stretch md:gap-8 md:py-16">
        <div className="relative z-10 flex min-w-0 flex-col justify-between gap-8 md:gap-10">
          <div>
            <p className="m-0 flex items-center gap-3 text-xs font-extrabold tracking-[0.28em] text-ouro uppercase">
              <IconeChave />
              {capa.rotulo}
            </p>
            <h1 className="mt-[22px] font-serif text-[clamp(46px,7.4vw,92px)] leading-[0.96] font-normal tracking-[0.01em] uppercase">
              <span className="block">{capa.tituloLinha1}</span>
              <span className="block">{capa.tituloLinha2}</span>
            </h1>
          </div>
          <div>
            <h2 className="titulo mb-3.5 max-w-[28ch] text-[clamp(1.2rem,2.2vw,1.6rem)] leading-[1.3]">{capa.frase}</h2>
            <p className="mb-[22px] text-[15px] text-white/80">{capa.apoio}</p>
            <BotaoCompra tom="escuro" />
          </div>
          <p className="m-0 font-sans text-[clamp(54px,9vw,112px)] leading-[0.88] font-extrabold tracking-[-0.01em] uppercase">
            <span className="block text-white">{capa.campanhaLinha1}</span>
            <span className="block text-ouro-suave">{capa.campanhaLinha2}</span>
          </p>
        </div>
        <div className="pointer-events-none order-2 md:absolute md:top-6 md:-right-5 md:z-0 md:w-[66%]">
          <img src={capa.foto} alt="Carolina Wadt" className="vinheta mx-auto block h-auto w-full max-w-[320px] md:max-w-none" />
        </div>
      </div>
    </header>
  )
}

export function ParaVoceBlackAtual() {
  return (
    <Bloco tom="escuro">
      <Rotulo>{B.paraVoce.rotulo}</Rotulo>
      <Titulo>{B.paraVoce.titulo}</Titulo>
      <ul className="mt-8 grid list-none gap-3 p-0">
        {B.paraVoce.itens.map((item) => (
          <li key={item} className="relative rounded border border-legado-linha py-4 pr-5 pl-12">
            <span className="absolute top-1/2 left-5 -mt-[7px] h-3.5 w-3.5 rotate-45 bg-ouro" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </Bloco>
  )
}

export function PromessaBlackAtual() {
  return (
    <Bloco tom="claro">
      <Rotulo>{B.promessa.rotulo}</Rotulo>
      <Titulo>{B.promessa.titulo}</Titulo>
      <p className="mb-4 text-[1.15rem]">{B.promessa.destaque}</p>
      <p className="mb-4 opacity-70">{B.promessa.apoio}</p>
      <div className="mt-9">
        <BotaoCompra tom="claro" />
      </div>
    </Bloco>
  )
}

export function PilaresBlackAtual() {
  return (
    <Bloco tom="escuro">
      <Rotulo>{B.pilares.rotulo}</Rotulo>
      <Titulo>{B.pilares.titulo}</Titulo>
      <p className="mb-4 opacity-70">{B.pilares.apoio}</p>
      <div className="mt-9 grid grid-cols-1 gap-[18px] lg:grid-cols-3">
        {B.pilares.itens.map((pilar) => (
          <article key={pilar.titulo} className="border border-t-2 border-legado-linha border-t-ouro bg-legado-cartao-escuro px-6 py-[26px]">
            <h3 className="titulo mb-[18px] text-[1.3rem] leading-[1.15]">{pilar.titulo}</h3>
            <p className="mb-3 font-serif text-[1.12rem] text-ouro-suave italic">{pilar.pergunta}</p>
            <p className="m-0 text-[15px] opacity-80">{pilar.pratica}</p>
          </article>
        ))}
      </div>
      <p className="mt-9 mb-4">{B.pilares.formato}</p>
      <p className="mb-4 opacity-70">{B.pilares.grupo}</p>
      <div className="mt-9">
        <BotaoCompra tom="escuro" />
      </div>
    </Bloco>
  )
}

export function EspecialistasBlackAtual() {
  return (
    <Bloco tom="claro">
      <Rotulo>{B.especialistas.rotulo}</Rotulo>
      <Titulo>{B.especialistas.titulo}</Titulo>
      <p className="mb-4 opacity-70">{B.especialistas.apoio}</p>
      <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-4">
        {B.especialistas.itens.map((pessoa) => (
          <article key={pessoa.nome} className="rounded-md border border-linha-clara bg-off p-3 sm:p-[18px]">
            <img src={pessoa.foto} alt={pessoa.nome} loading="lazy" className="mb-3.5 block aspect-[4/5] w-full rounded object-cover object-top" />
            <p className="mb-1.5 text-[10px] font-extrabold tracking-[0.14em] text-ouro uppercase sm:text-[11px]">{pessoa.papel}</p>
            <h3 className="titulo mb-2 text-base sm:text-[1.25rem]">{pessoa.nome}</h3>
            <p className="m-0 text-[13px] text-legado-texto-cartao sm:text-[15px]">{pessoa.tema}</p>
          </article>
        ))}
      </div>
      <div className="mt-9">
        <BotaoCompra tom="claro" />
      </div>
    </Bloco>
  )
}

export function BonusExclusivosBlackAtual() {
  return (
    <Bloco tom="escuro">
      <Rotulo>{B.bonusExclusivos.rotulo}</Rotulo>
      <Titulo>{B.bonusExclusivos.titulo}</Titulo>
      <ul className="mt-8 grid list-none gap-3.5 p-0">
        {B.bonusExclusivos.itens.map((item) => (
          <li key={item.titulo} className="rounded border border-legado-linha px-[22px] py-[18px]">
            <strong className="font-extrabold text-ouro-suave">{item.titulo}</strong> {item.texto}
          </li>
        ))}
      </ul>
      <div className="mt-9">
        <BotaoCompra tom="escuro" />
      </div>
    </Bloco>
  )
}

export function DepoimentosBlackAtual() {
  return (
    <Bloco tom="claro">
      <Rotulo>{B.depoimentos.rotulo}</Rotulo>
      <Titulo>{B.depoimentos.titulo}</Titulo>
      <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
        {B.depoimentos.itens.map((d) => (
          <blockquote key={d.autora} className="m-0 rounded border-l-3 border-ouro bg-off px-6 py-[22px]">
            <p className="m-0 text-[15px] text-texto-claro">{d.texto}</p>
            <p className="mt-3.5 text-[13px] font-extrabold text-preto">{d.autora}</p>
          </blockquote>
        ))}
      </div>
      <div className="mt-9">
        <BotaoCompra tom="claro" />
      </div>
    </Bloco>
  )
}

export function OfertaBlackAtual() {
  const { oferta } = B
  const { condicao, precoDe, bonus, somaDosBonus } = oferta.dados
  const total = precoDe && somaDosBonus ? precoDe.mais(somaDosBonus) : undefined
  return (
    <Bloco tom="escuro" id={ANCORAS.oferta}>
      <div className="rounded-md bg-preto px-5 py-11 text-center sm:px-8">
        <p className="mb-2 font-serif text-[clamp(1.4rem,3vw,1.9rem)] leading-[1.2]">
          {oferta.tituloDaMentoria} <s className="opacity-60">{precoDe?.formatar({ compacto: true })}</s>
        </p>
        <p className="mt-6 font-extrabold tracking-[0.02em] text-ouro-suave">{oferta.tituloDosBonus}</p>
        <ul className="mt-6 list-none border-t border-white/20 p-0 text-left">
          {bonus.map((item) => (
            <li key={item.descricao} className="flex flex-col gap-1 border-b border-white/20 py-3 text-[15px] sm:flex-row sm:justify-between sm:gap-4">
              <span>{item.descricao}</span>
              <em className="font-extrabold whitespace-nowrap text-ouro-suave not-italic">
                <s>{item.valorDeReferencia?.formatar({ compacto: true })}</s>
              </em>
            </li>
          ))}
        </ul>
        <p className="mt-[18px] mb-2 font-extrabold">
          Soma dos bônus: {somaDosBonus?.formatar({ compacto: true })}, mais a mentoria, {precoDe?.formatar({ compacto: true })}.
          Total: {total?.formatar({ compacto: true })}
        </p>
        <p className="mb-2.5 text-sm opacity-80">{oferta.chamadaDaCondicao}</p>
        <p className="m-0 text-[1.05rem]">até {condicao.parcelas}x de</p>
        <p className="mt-2.5 mb-1 font-serif text-[clamp(3.2rem,10vw,4.6rem)] leading-[1.05] text-ouro-suave tabular-nums">
          {condicao.valorDaParcela.formatar()}
        </p>
        <p className="mb-[18px] text-[1.05rem]">ou {condicao.aVista.formatar({ compacto: true })} à vista</p>
        <p className="mb-2.5 text-sm opacity-80">{oferta.escassez}</p>
        <BotaoCompra tom="escuro" />
      </div>
    </Bloco>
  )
}

export function SobreBlackAtual() {
  return (
    <Bloco tom="claro">
      <Rotulo>{B.sobre.rotulo}</Rotulo>
      <div className="mt-9 grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
        <img src={B.sobre.foto} alt="Carolina Wadt" loading="lazy" className="block aspect-[4/5] w-full max-w-[260px] rounded object-cover object-top md:max-w-[340px]" />
        <div>
          <p className="mb-4">{B.sobre.paragrafos[0]}</p>
          <p className="opacity-70">{B.sobre.paragrafos[1]}</p>
        </div>
      </div>
    </Bloco>
  )
}

export function ContatoBlackAtual() {
  const { contato } = B
  return (
    <Bloco tom="claro" className="text-center">
      <Rotulo>{contato.rotulo}</Rotulo>
      <Titulo>{contato.titulo}</Titulo>
      <p className="mb-4">{contato.texto}</p>
      <LinkExterno href={contato.botao.url} className="inline-block rounded-full bg-preto px-7 py-4 text-[15px] font-extrabold text-white">
        {contato.botao.texto}
      </LinkExterno>
    </Bloco>
  )
}

export function FaqBlackAtual() {
  return (
    <Bloco tom="escuro">
      <Rotulo>{B.faq.rotulo}</Rotulo>
      <Titulo>{B.faq.titulo}</Titulo>
      {B.faq.itens.map((item) => (
        <details key={item.pergunta} className="border-b border-legado-linha py-[18px]">
          <summary className="cursor-pointer list-none font-extrabold">{item.pergunta}</summary>
          <p className="mt-3 opacity-80">{item.resposta}</p>
        </details>
      ))}
    </Bloco>
  )
}

export function RodapeBlackAtual() {
  return (
    <footer className="border-t border-legado-linha bg-preto px-5 py-9 text-center text-[13px] tracking-[0.04em] text-white">
      <p className="m-0 opacity-70">{B.rodape}</p>
    </footer>
  )
}
