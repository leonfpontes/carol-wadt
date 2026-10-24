/**
 * Seções de apresentação da página proposta: capa, para você, promessa,
 * método (pilares), mentora e depoimentos.
 * Cada seção recebe só a fatia do conteúdo que usa (Segregação de Interface).
 */
import { ANCORAS, ancora } from "@/app/rotas"
import { BotaoCta, Destaque, LinhaDeChamada, Lide, Rico, Rotulo, Secao, Titulo } from "@/components/shared/editorial"
import { NotaDeMelhoria } from "@/components/shared/notas"
import type { ConteudoDaProposta } from "@/content/proposta/tipos"

type Fatia<K extends keyof ConteudoDaProposta> = { conteudo: ConteudoDaProposta[K]; botao: string }

export function CapaProposta({ conteudo: capa, botao }: Fatia<"capa">) {
  return (
    <header className="relative overflow-hidden bg-preto">
      <div className="contem grid grid-cols-1 items-center gap-6 pt-10 pb-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:pt-14 md:pb-[72px]">
        <div className="relative z-10 min-w-0">
          <NotaDeMelhoria>{capa.nota}</NotaDeMelhoria>
          {capa.selo && (
            <div className="mb-[22px] inline-flex items-center gap-2.5 rounded-full border border-ouro px-3.5 py-1.5 text-xs font-extrabold tracking-[0.16em] text-ouro-suave uppercase">
              <Rico texto={capa.selo} />
            </div>
          )}
          <Rotulo>{capa.rotulo}</Rotulo>
          <p className="mb-[30px] font-serif text-[clamp(2.6rem,6.4vw,4.9rem)] leading-[0.95] tracking-[0.04em] uppercase" aria-hidden="true">
            <span className="block">{capa.marca[0]}</span>
            <span className="block">{capa.marca[1]}</span>
          </p>
          <h1 className="titulo mb-4 max-w-[26ch] text-[clamp(1.35rem,2.6vw,1.85rem)] leading-[1.3]">{capa.titulo}</h1>
          <p className="max-w-[46ch] text-base text-white/80">{capa.apoio}</p>
          <LinhaDeChamada>
            <BotaoCta href={ancora(ANCORAS.oferta)}>{botao}</BotaoCta>
          </LinhaDeChamada>
          <div className="mt-[18px] flex flex-wrap gap-x-[18px] gap-y-2 text-[13px] text-white/75">
            {capa.destaques.map((d, i) => (
              <span key={i}>
                {d.forte && <b className="font-bold text-ouro-suave">{d.forte}</b>}
                <Rico texto={d.resto} />
              </span>
            ))}
          </div>
        </div>
        <div className="min-w-0">
          <img
            src={capa.foto}
            alt="Carolina Wadt, mentora da Mulher Inteira"
            width={832}
            height={1248}
            className="vinheta mx-auto block h-auto w-full max-w-[230px] md:mr-0 md:ml-auto md:max-w-[460px]"
          />
        </div>
      </div>
    </header>
  )
}

export function ParaVoceProposta({ conteudo }: Fatia<"paraVoce">) {
  return (
    <Secao tom="escuro" id="para-voce">
      <NotaDeMelhoria>{conteudo.nota}</NotaDeMelhoria>
      <Rotulo>{conteudo.rotulo}</Rotulo>
      <Titulo>{conteudo.titulo}</Titulo>
      <ul className="mt-8 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-2">
        {conteudo.itens.map((item) => (
          <li key={item} className="relative min-w-0 rounded border border-linha-escura py-4 pr-5 pl-12">
            <span className="absolute top-6 left-5 h-3 w-3 rotate-45 bg-ouro" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
      <p className="titulo mt-10 max-w-[30ch] text-[clamp(1.4rem,3vw,1.9rem)]">
        {conteudo.fecho[0]} <Destaque>{conteudo.fecho[1]}</Destaque>
      </p>
    </Secao>
  )
}

export function PromessaProposta({ conteudo, botao }: Fatia<"promessa">) {
  return (
    <Secao tom="claro" id="promessa">
      <NotaDeMelhoria>{conteudo.nota}</NotaDeMelhoria>
      <Rotulo>{conteudo.rotulo}</Rotulo>
      <Titulo>{conteudo.titulo}</Titulo>
      <Lide>{conteudo.apoio}</Lide>
      <div className="mt-9 grid grid-cols-1 border-t border-linha-clara md:grid-cols-2">
        {conteudo.resultados.map((r) => (
          <div
            key={r.titulo}
            className="min-w-0 border-b border-linha-clara py-[22px] md:pr-6 md:odd:border-r md:even:pl-6"
          >
            <b className="mb-1.5 block font-serif text-[1.25rem] font-normal">{r.titulo}</b>
            <p className="m-0 text-[15px] text-texto-claro">{r.texto}</p>
          </div>
        ))}
      </div>
      <LinhaDeChamada>
        <BotaoCta href={ancora(ANCORAS.oferta)}>{botao}</BotaoCta>
        <span className="text-[13px] opacity-70">{conteudo.dica}</span>
      </LinhaDeChamada>
    </Secao>
  )
}

export function MetodoProposta({ conteudo }: Fatia<"metodo">) {
  return (
    <Secao tom="escuro" id={ANCORAS.metodo}>
      <NotaDeMelhoria>{conteudo.nota}</NotaDeMelhoria>
      <Rotulo>{conteudo.rotulo}</Rotulo>
      <Titulo>{conteudo.titulo}</Titulo>
      <Lide className="opacity-75">{conteudo.apoio}</Lide>
      <div className="mt-9 grid grid-cols-1 gap-[18px] lg:grid-cols-3">
        {conteudo.pilares.map((p) => (
          <article key={p.etiqueta} className="flex min-w-0 flex-col border border-t-2 border-linha-escura border-t-ouro bg-carvao px-6 py-[26px]">
            <p className="mb-2.5 text-[11px] font-extrabold tracking-[0.18em] text-ouro uppercase">{p.etiqueta}</p>
            <h3 className="titulo mb-3.5 text-[1.35rem]">{p.titulo}</h3>
            <p className="mb-3.5 font-serif text-[1.08rem] text-ouro-suave italic">{p.pergunta}</p>
            <dl className="mt-auto grid gap-2.5 text-[14.5px]">
              <div>
                <dt className="text-[11px] font-extrabold tracking-[0.14em] uppercase opacity-60">Prática</dt>
                <dd className="mt-0.5 opacity-90">{p.pratica}</dd>
              </div>
              <div>
                <dt className="text-[11px] font-extrabold tracking-[0.14em] uppercase opacity-60">Entrega</dt>
                <dd className="mt-0.5 opacity-90">{p.entrega}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Secao>
  )
}

export function MentoraProposta({ conteudo }: Fatia<"mentora">) {
  return (
    <Secao tom="off" id="carolina">
      <NotaDeMelhoria>{conteudo.nota}</NotaDeMelhoria>
      <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-12">
        <img
          src={conteudo.foto}
          alt={conteudo.nome}
          loading="lazy"
          className="block aspect-[4/5] w-full max-w-[280px] rounded object-cover object-top md:max-w-[360px]"
        />
        <div className="min-w-0">
          <Rotulo>{conteudo.rotulo}</Rotulo>
          <Titulo>{conteudo.nome}</Titulo>
          {conteudo.paragrafos.map((p) => (
            <p key={p.slice(0, 24)} className="mb-4">
              {p}
            </p>
          ))}
          <div className="mt-[22px] flex flex-wrap gap-x-7 gap-y-2.5">
            {conteudo.numeros.map((n) => (
              <div key={n.valor}>
                <b className="block font-serif text-[1.9rem] leading-none font-normal text-ouro-escuro">{n.valor}</b>
                <span className="text-[13px] text-texto-claro">{n.legenda}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Secao>
  )
}

export function DepoimentosProposta({ conteudo, botao }: Fatia<"depoimentos">) {
  return (
    <Secao tom="off" id="depoimentos" semTopo>
      <NotaDeMelhoria>{conteudo.nota}</NotaDeMelhoria>
      <Rotulo>{conteudo.rotulo}</Rotulo>
      <Titulo>{conteudo.titulo}</Titulo>
      <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-2">
        {conteudo.itens.map((d) => (
          <figure key={d.autora} className="m-0 min-w-0 rounded border-l-3 border-ouro bg-white px-[26px] py-6">
            <p className="m-0 text-[15.5px] text-texto-claro">{d.texto}</p>
            <figcaption className="mt-3.5 text-[13px] font-extrabold tracking-[0.04em] text-preto">{d.autora}</figcaption>
          </figure>
        ))}
      </div>
      <LinhaDeChamada>
        <BotaoCta href={ancora(ANCORAS.oferta)}>{botao}</BotaoCta>
      </LinhaDeChamada>
    </Secao>
  )
}
