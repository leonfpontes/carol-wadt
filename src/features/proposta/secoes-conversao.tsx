/**
 * Seções de conversão da página proposta: formato, bônus, oferta, para quem,
 * perguntas frequentes, material gratuito, fechamento e rodapé.
 */
import { Link } from "react-router"
import { ANCORAS, ROTAS } from "@/app/rotas"
import { BotaoCta, Destaque, LinhaDeChamada, LinkSutil, Lide, Rico, Rotulo, Secao, Titulo } from "@/components/shared/editorial"
import { NotaDeMelhoria } from "@/components/shared/notas"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { ConteudoDaProposta } from "@/content/proposta/tipos"
import { FormularioDeMaterial } from "@/features/isca/FormularioDeMaterial"
import { cn } from "@/lib/utils"

type Fatia<K extends keyof ConteudoDaProposta> = { conteudo: ConteudoDaProposta[K]; botao: string }

export function FormatoProposta({ conteudo }: Fatia<"formato">) {
  return (
    <Secao tom="tinta" id="formato">
      <NotaDeMelhoria>{conteudo.nota}</NotaDeMelhoria>
      <Rotulo>{conteudo.rotulo}</Rotulo>
      <Titulo>{conteudo.titulo}</Titulo>
      <div className="mt-9 grid grid-cols-1 border border-linha-escura md:grid-cols-3">
        {conteudo.itens.map((item, i) => (
          <div
            key={item.destaque}
            className={cn(
              "min-w-0 border-linha-escura p-6",
              i < conteudo.itens.length - 1 && "border-b",
              "md:border-r md:border-b md:[&:nth-child(3n)]:border-r-0 md:[&:nth-last-child(-n+3)]:border-b-0",
            )}
          >
            <b className="mb-1 block font-serif text-[1.6rem] font-normal text-ouro-suave">{item.destaque}</b>
            <span className="text-[14.5px] opacity-85">
              <Rico texto={item.texto} />
            </span>
          </div>
        ))}
      </div>
    </Secao>
  )
}

export function BonusProposta({ conteudo }: Fatia<"bonus">) {
  return (
    <Secao tom="claro" id="bonus">
      <NotaDeMelhoria>{conteudo.nota}</NotaDeMelhoria>
      <Rotulo>{conteudo.rotulo}</Rotulo>
      <Titulo>{conteudo.titulo}</Titulo>
      <Lide>{conteudo.apoio}</Lide>
      <div className="mt-9 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {conteudo.especialistas.map((e) => (
          <div key={e.nome} className="min-w-0">
            <img
              src={e.foto}
              alt={e.nome}
              loading="lazy"
              className="mb-3.5 block aspect-[4/5] w-full rounded object-cover object-top grayscale-[0.15]"
            />
            <p className="mb-1 text-[11px] font-extrabold tracking-[0.14em] text-ouro-escuro uppercase">{e.area}</p>
            <h3 className="titulo mb-1.5 text-[1.05rem] sm:text-[1.2rem]">{e.nome}</h3>
            <p className="m-0 text-[13.5px] text-texto-claro sm:text-[14.5px]">{e.tema}</p>
          </div>
        ))}
      </div>
      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {conteudo.extras.map((x) => (
          <div key={x.titulo} className="min-w-0 rounded border border-linha-clara bg-white px-[22px] py-5">
            <b className="mb-1 block">{x.titulo}</b>
            <p className="m-0 text-[15px] text-texto-claro">{x.texto}</p>
          </div>
        ))}
      </div>
    </Secao>
  )
}

export function OfertaProposta({ conteudo, botao }: Fatia<"oferta">) {
  const { dados } = conteudo
  const { condicao } = dados
  return (
    <Secao tom="escuro" id={ANCORAS.oferta}>
      <NotaDeMelhoria>{conteudo.nota}</NotaDeMelhoria>
      <div className="mx-auto max-w-[640px] rounded-md border border-t-3 border-linha-escura border-t-ouro bg-preto px-5 py-11 sm:px-11">
        <Rotulo centro>{conteudo.rotulo}</Rotulo>
        <Titulo className="text-center">{dados.nome}</Titulo>
        <ul className="mt-[26px] list-none border-t border-white/15 p-0">
          {dados.itens.map((item) => (
            <li
              key={item.descricao}
              className={cn("flex justify-between gap-4 border-b border-white/15 py-3 text-[15px]", item.limitado && "opacity-80")}
            >
              <span className="min-w-0">{item.descricao}</span>
              <em className="font-extrabold whitespace-nowrap text-ouro-suave not-italic tabular-nums">
                {item.natureza === "bonus" ? "bônus" : "incluso"}
              </em>
            </li>
          ))}
        </ul>
        <div className="mt-7 text-center">
          {conteudo.prazo && (
            <p className="mb-1.5 text-sm font-bold tracking-[0.04em] text-ouro-suave">
              <Rico texto={conteudo.prazo} />
            </p>
          )}
          {dados.exibePrecoDe && dados.precoDe && (
            <p className="m-0 line-through opacity-60">De {dados.precoDe.formatar({ compacto: true })}</p>
          )}
          <p className="mt-1.5 mb-1 font-serif text-[clamp(3rem,10vw,4.4rem)] leading-[1.05] text-ouro-suave tabular-nums">
            {condicao.aVista.formatar({ compacto: true })}
          </p>
          <p className="mb-1.5 text-[1.02rem]">à vista, ou em até {condicao.descreverParcelamento()} no cartão</p>
          {conteudo.observacao && (
            <p className="mb-[22px] text-[13px] opacity-65">
              <Rico texto={conteudo.observacao} />
            </p>
          )}
          <BotaoCta href={dados.checkout.url()}>{botao}</BotaoCta>
        </div>
        <div className="mt-[26px] flex items-start gap-4 rounded border border-linha-escura px-5 py-[18px] text-left">
          <div className="grid h-[52px] w-[52px] flex-none place-items-center rounded-full border-[1.5px] border-ouro font-serif text-[1.35rem] leading-none text-ouro-suave">
            <span className="text-center">
              7<small className="block font-sans text-[8px] tracking-[0.14em] uppercase">dias</small>
            </span>
          </div>
          <p className="m-0 text-[14.5px] opacity-90">
            <b className="text-ouro-suave">{conteudo.garantia.titulo}</b> {conteudo.garantia.texto}
          </p>
        </div>
        <p className="mt-[18px] text-center text-sm opacity-85">
          {conteudo.pagamentoEmEuro.pergunta}{" "}
          <LinkSutil href={conteudo.pagamentoEmEuro.link.url} target="_blank" rel="noopener noreferrer">
            {conteudo.pagamentoEmEuro.link.texto}
          </LinkSutil>
        </p>
      </div>
    </Secao>
  )
}

export function ParaQuemProposta({ conteudo }: Fatia<"paraQuem">) {
  const colunas = [conteudo.sim, conteudo.agoraNao]
  return (
    <Secao tom="claro" id="para-quem" estreita>
      <NotaDeMelhoria>{conteudo.nota}</NotaDeMelhoria>
      <Rotulo>{conteudo.rotulo}</Rotulo>
      <Titulo>{conteudo.titulo}</Titulo>
      <div className="mt-[30px] grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
        {colunas.map((coluna) => (
          <div key={coluna.titulo} className="min-w-0">
            <h3 className="titulo mb-[18px] text-[1.2rem]">{coluna.titulo}</h3>
            <ul className="m-0 grid list-disc gap-2 pl-5 text-texto-claro">
              {coluna.itens.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Secao>
  )
}

export function FaqProposta({ conteudo }: Fatia<"faq">) {
  return (
    <Secao tom="escuro" id="duvidas" estreita>
      <NotaDeMelhoria>{conteudo.nota}</NotaDeMelhoria>
      <Rotulo>{conteudo.rotulo}</Rotulo>
      <Titulo>{conteudo.titulo}</Titulo>
      <Accordion className="mt-2">
        {conteudo.itens.map((item) => (
          <AccordionItem key={item.pergunta} value={item.pergunta} className="border-b border-linha-escura not-last:border-b">
            <AccordionTrigger className="py-5 text-[17px] font-extrabold hover:no-underline **:data-[slot=accordion-trigger-icon]:text-ouro">
              {item.pergunta}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[17px] leading-relaxed text-white/80 [&_a]:no-underline">
              <p className="m-0 max-w-[64ch]">
                <Rico texto={item.resposta} />
                {item.link && (
                  <>
                    <LinkSutil href={item.link.url} target="_blank" rel="noopener noreferrer" className="underline">
                      {item.link.texto}
                    </LinkSutil>
                    .
                  </>
                )}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <LinhaDeChamada>
        <LinkSutil href={conteudo.contato.url} target="_blank" rel="noopener noreferrer">
          {conteudo.contato.texto}
        </LinkSutil>
      </LinhaDeChamada>
    </Secao>
  )
}

export function MaterialProposta({ conteudo }: Fatia<"material">) {
  return (
    <Secao tom="off" id={ANCORAS.material}>
      <NotaDeMelhoria>{conteudo.nota}</NotaDeMelhoria>
      <div className="grid grid-cols-1 items-center gap-9 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <Rotulo>{conteudo.rotulo}</Rotulo>
          <Titulo>{conteudo.titulo}</Titulo>
          <Lide>
            <Rico texto={conteudo.apoio} />
          </Lide>
        </div>
        <FormularioDeMaterial isca={conteudo.isca} textoDoBotao={conteudo.botao} />
      </div>
    </Secao>
  )
}

export function FechamentoProposta({ conteudo, botao, urlDeCompra }: Fatia<"fechamento"> & { urlDeCompra: string }) {
  return (
    <Secao tom="escuro" estreita className="text-center">
      <Rotulo centro>{conteudo.rotulo}</Rotulo>
      <Titulo className="mx-auto max-w-[22ch]">
        {conteudo.titulo[0]} <Destaque>{conteudo.titulo[1]}</Destaque>
      </Titulo>
      <LinhaDeChamada centro>
        <BotaoCta href={urlDeCompra}>{botao}</BotaoCta>
        <LinkSutil href={conteudo.whatsapp.url} target="_blank" rel="noopener noreferrer">
          {conteudo.whatsapp.texto}
        </LinkSutil>
      </LinhaDeChamada>
    </Secao>
  )
}

export function RodapeProposta({ conteudo }: Fatia<"rodape">) {
  return (
    <footer className="contem border-t border-linha-escura bg-preto pt-9 pb-24 text-center text-[13px] tracking-[0.04em] text-white md:pb-12">
      <NotaDeMelhoria className="mx-auto text-left">{conteudo.nota}</NotaDeMelhoria>
      <p className="mb-2 opacity-70">{conteudo.linha}</p>
      <p className="mb-2 opacity-70">
        <Link to={ROTAS.proposta.termos} className="text-ouro-suave">
          Termos de Uso
        </Link>{" "}
        ·{" "}
        <Link to={ROTAS.proposta.privacidade} className="text-ouro-suave">
          Política de Privacidade
        </Link>{" "}
        · <Rico texto={conteudo.contato} />
      </p>
    </footer>
  )
}

/** Barra fixa no rodapé do celular: aparece depois do método e some na oferta. */
export function BarraFixaProposta({ conteudo, visivel }: { conteudo: ConteudoDaProposta["barraFixa"]; visivel: boolean }) {
  return (
    <div
      className={cn(
        "base-segura fixed inset-x-0 bottom-0 z-20 items-center justify-between gap-3 border-t border-linha-escura bg-preto/95 md:hidden",
        visivel ? "flex" : "hidden",
      )}
    >
      <div className="text-[13px] leading-tight">
        <b className="block text-[15px] text-ouro-suave">{conteudo.destaque}</b>
        {conteudo.apoio}
      </div>
      <BotaoCta href={`#${ANCORAS.oferta}`} tamanho="compacto">
        {conteudo.botao}
      </BotaoCta>
    </div>
  )
}

