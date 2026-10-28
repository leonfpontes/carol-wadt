/**
 * Proposta do site oficial, fim da página: inscrição (benefícios + preço),
 * dúvidas, material gratuito, rodapé completo e barra fixa do celular.
 * Fundos: creme → marinho → creme → marinho (rodapé).
 */
import { Check, Lock, ShieldCheck, Trophy } from "lucide-react"
import { Link } from "react-router"
import { ANCORAS, ancora } from "@/app/rotas"
import { LinkExterno } from "@/components/shared/LinkExterno"
import { NotaDeMelhoria } from "@/components/shared/notas"
import { usePublicado } from "@/components/shared/publicacao"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { AConfirmar } from "@/content/proposta/tipos"
import type { ConteudoDoSiteProposto } from "@/content/proposta/tipos-site"
import { FormularioDeMaterial } from "@/features/isca/FormularioDeMaterial"
import { Cena } from "@/features/proposta-site/apresentacao"
import { ApoioDoSite, BotaoDoSite, IconeEmCirculo, RotuloDoSite, SecaoDoSite, TituloDoSite } from "@/features/proposta-site/base"
import { cn } from "@/lib/utils"

type Fatia<K extends keyof ConteudoDoSiteProposto> = { conteudo: ConteudoDoSiteProposto[K]; botao: string }

/** Marca tracejada para dados que dependem da Carol, no tom do site. */
function AConfirmarDoSite({ children, claro }: { children: string; claro?: boolean }) {
  if (usePublicado()) return null
  return (
    <span
      className={cn(
        "inline-block rounded border border-dashed border-legado-ouro/70 px-1.5 text-[0.85em] whitespace-nowrap",
        claro ? "text-legado-ouro-escuro" : "text-legado-ouro",
      )}
    >
      {children}
    </span>
  )
}

function textoRico(partes: Array<string | AConfirmar>, claro?: boolean) {
  return partes.map((p, i) =>
    typeof p === "string" ? <span key={i}>{p}</span> : <AConfirmarDoSite key={i} claro={claro}>{p.aConfirmar}</AConfirmarDoSite>,
  )
}

export function InscricaoDoSite({ conteudo, botao }: Fatia<"inscricao">) {
  const { condicao, checkout, nome } = conteudo.oferta
  return (
    <SecaoDoSite fundo="creme" id={ANCORAS.oferta}>
      <NotaDeMelhoria className="mx-auto">{conteudo.nota}</NotaDeMelhoria>
      <RotuloDoSite>{conteudo.rotulo}</RotuloDoSite>
      <TituloDoSite>{conteudo.titulo}</TituloDoSite>
      <ApoioDoSite>{conteudo.apoio}</ApoioDoSite>
      <div className="mx-auto mt-12 grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
        <ul className="grid list-none gap-4 p-0 sm:grid-cols-2">
          {conteudo.inclui.map(({ icone: Icone, titulo, texto }, i) => (
            <Cena
              key={titulo}
              como="li"
              ordem={i % 2}
              className="cena-do-fundo flex h-full gap-4 rounded-2xl bg-white p-5 shadow-lg shadow-legado-azul/5 ring-1 ring-legado-areia/25"
            >
              <IconeEmCirculo className="h-11 w-11">
                <Icone className="h-5 w-5" aria-hidden="true" />
              </IconeEmCirculo>
              <div className="min-w-0">
                <h3 className="mb-1 font-semibold text-legado-azul">{titulo}</h3>
                <p className="text-sm leading-relaxed text-legado-azul/70">{texto}</p>
              </div>
            </Cena>
          ))}
        </ul>
        {/* O cartão do preço vem do fundo para a frente, como num holofote. */}
        <Cena className="lg:sticky lg:top-20">
          <div className="cena-holofote relative overflow-hidden rounded-3xl bg-legado-marinho p-7 text-center text-legado-gelo shadow-2xl shadow-legado-marinho/30 ring-1 ring-legado-ouro/40 sm:p-9">
            <div className="absolute -top-24 left-1/2 h-48 w-72 -translate-x-1/2 rounded-full bg-legado-ouro/15 blur-3xl" aria-hidden="true" />
            <p className="relative mb-1 text-sm tracking-[0.2em] text-legado-gelo/70 uppercase">Mentoria da</p>
            <p className="relative mb-6 font-serif text-2xl text-legado-ouro md:text-3xl">Mulher Inteira</p>
            <ul className="relative mb-6 grid list-none gap-2 p-0 text-left text-sm text-legado-gelo/85">
              {conteudo.inclui.map((item) => (
                <li key={item.titulo} className="flex items-center gap-2">
                  <Check className="h-4 w-4 flex-none text-legado-ouro" aria-hidden="true" />
                  {item.titulo}
                </li>
              ))}
            </ul>
            <div className="relative border-t border-legado-ouro/20 pt-6">
              <p className="text-sm text-legado-gelo/70">{condicao.parcelas}x de</p>
              <p className="font-serif text-5xl text-legado-ouro tabular-nums md:text-6xl">{condicao.valorDaParcela.formatar({ comEspaco: true })}</p>
              <p className="mt-1 text-legado-gelo/80">ou {condicao.aVista.formatar()} à vista</p>
              <p className="mt-2 text-xs text-legado-gelo/50">{textoRico(conteudo.observacao)}</p>
            </div>
            <LinkExterno
              href={checkout.url()}
              aria-label={`${botao}: ${nome}`}
              className="relative mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-legado-ouro to-legado-ouro-escuro px-8 py-4 font-bold tracking-wider text-legado-marinho uppercase shadow-lg shadow-legado-ouro/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              {botao}
            </LinkExterno>
            <div className="relative mt-6 grid grid-cols-3 gap-2 text-[11px] text-legado-gelo/60">
              <span className="flex flex-col items-center gap-1">
                <ShieldCheck className="h-5 w-5 text-legado-ouro" aria-hidden="true" />
                Compra segura
              </span>
              <span className="flex flex-col items-center gap-1">
                <Trophy className="h-5 w-5 text-legado-ouro" aria-hidden="true" />
                Garantia de 7 dias
              </span>
              <span className="flex flex-col items-center gap-1">
                <Lock className="h-5 w-5 text-legado-ouro" aria-hidden="true" />
                Privacidade protegida
              </span>
            </div>
            <p className="relative mt-5 text-xs text-legado-gelo/60">{conteudo.garantia}</p>
          </div>
          <p className="mt-5 text-center text-sm text-legado-azul/80">
            {conteudo.pagamentoEmEuro.pergunta}{" "}
            <LinkExterno href={conteudo.pagamentoEmEuro.url} className="font-semibold text-legado-azul underline decoration-legado-ouro underline-offset-4">
              {conteudo.pagamentoEmEuro.texto}
            </LinkExterno>
          </p>
        </Cena>
      </div>
    </SecaoDoSite>
  )
}

export function DuvidasDoSite({ conteudo }: Fatia<"duvidas">) {
  return (
    <SecaoDoSite fundo="marinho" id="duvidas">
      <NotaDeMelhoria className="mx-auto">{conteudo.nota}</NotaDeMelhoria>
      <RotuloDoSite>{conteudo.rotulo}</RotuloDoSite>
      <TituloDoSite>{conteudo.titulo}</TituloDoSite>
      <Accordion className="mx-auto mt-10 max-w-3xl">
        {conteudo.itens.map((item) => (
          <AccordionItem key={item.pergunta} value={item.pergunta} className="border-b border-white/15 not-last:border-b">
            <AccordionTrigger className="py-5 text-base font-semibold text-legado-gelo hover:no-underline md:text-lg **:data-[slot=accordion-trigger-icon]:text-legado-ouro">
              {item.pergunta}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-base leading-relaxed text-legado-gelo/75">{item.resposta}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-10 text-center">
        <LinkExterno
          href={conteudo.whatsapp.url}
          className="inline-block rounded-sm bg-gradient-to-r from-legado-profundo to-legado-marinho px-8 py-4 font-medium text-white ring-1 ring-legado-ouro/30 transition-all duration-300 hover:opacity-90"
        >
          {conteudo.whatsapp.texto}
        </LinkExterno>
      </div>
    </SecaoDoSite>
  )
}

export function MaterialDoSite({ conteudo }: Fatia<"material">) {
  return (
    <SecaoDoSite fundo="creme" id={ANCORAS.material}>
      <NotaDeMelhoria className="mx-auto">{conteudo.nota}</NotaDeMelhoria>
      <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-3xl bg-white p-6 shadow-xl shadow-legado-azul/5 ring-1 ring-legado-areia/25 sm:p-10 md:grid-cols-2">
        <div className="min-w-0 text-center md:text-left">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] text-legado-ouro-escuro uppercase">{conteudo.rotulo}</p>
          <h2 className="mb-4 font-serif text-3xl leading-tight text-legado-azul md:text-4xl">{conteudo.titulo}</h2>
          <p className="text-lg leading-relaxed text-legado-azul/75">{textoRico(conteudo.apoio, true)}</p>
        </div>
        <FormularioDeMaterial
          isca={conteudo.isca}
          textoDoBotao={conteudo.botao}
          classeDoBotao="rounded-full bg-gradient-to-r from-legado-azul to-legado-azul-medio px-8 py-4 font-semibold tracking-wider text-white uppercase text-sm"
        />
      </div>
    </SecaoDoSite>
  )
}

export function RodapeDoSite({ conteudo }: Fatia<"rodape">) {
  const publicado = usePublicado()
  // No ar, os dados ainda sem confirmação somem em vez de aparecer tracejados.
  const visivel = (link: (typeof conteudo.colunas)[number]["links"][number]) => !(publicado && "aConfirmar" in link)
  return (
    <footer className="border-t border-legado-ouro/15 bg-legado-marinho pt-16 pb-28 text-legado-gelo md:pb-10">
      <div className="contem-legado">
        <NotaDeMelhoria className="mx-auto">{conteudo.nota}</NotaDeMelhoria>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="mb-4 font-serif text-2xl text-legado-gelo">{conteudo.marca}</p>
            <p className="max-w-xs text-sm leading-relaxed text-legado-gelo/60">{conteudo.descricao}</p>
          </div>
          {conteudo.colunas.map((coluna) => (
            <nav key={coluna.titulo} aria-label={coluna.titulo}>
              <p className="mb-4 text-sm font-semibold tracking-wide text-legado-ouro">{coluna.titulo}</p>
              <ul className="grid list-none gap-2.5 p-0 text-sm">
                {coluna.links.filter(visivel).map((link, i) => (
                  <li key={i} className="text-legado-gelo/60">
                    {"aConfirmar" in link ? (
                      <AConfirmarDoSite>{link.aConfirmar}</AConfirmarDoSite>
                    ) : link.externo ? (
                      <LinkExterno href={link.destino} className="transition-colors hover:text-legado-ouro">
                        {link.texto}
                      </LinkExterno>
                    ) : link.destino.startsWith("#") ? (
                      <a href={link.destino} className="transition-colors hover:text-legado-ouro">
                        {link.texto}
                      </a>
                    ) : (
                      <Link to={link.destino} className="transition-colors hover:text-legado-ouro">
                        {link.texto}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <ul className="mt-12 flex list-none flex-wrap justify-center gap-x-8 gap-y-3 border-t border-white/10 p-0 pt-8 text-xs text-legado-gelo/60">
          {conteudo.selos.map((selo) => (
            <li key={selo} className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-legado-ouro" aria-hidden="true" />
              {selo}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-xs text-legado-gelo/40">{conteudo.linhaFinal}</p>
      </div>
    </footer>
  )
}

export function BarraFixaDoSite({ conteudo, visivel }: { conteudo: ConteudoDoSiteProposto["barraFixa"]; visivel: boolean }) {
  return (
    <div
      className={cn(
        "base-segura fixed inset-x-0 bottom-0 z-20 items-center justify-between gap-3 border-t border-legado-ouro/20 bg-legado-marinho/95 text-legado-gelo backdrop-blur md:hidden",
        visivel ? "flex" : "hidden",
      )}
    >
      <div className="text-xs leading-tight">
        <b className="block text-[15px] text-legado-ouro">{conteudo.destaque}</b>
        {conteudo.apoio}
      </div>
      <BotaoDoSite href={ancora(ANCORAS.oferta)} destaque className="px-5 py-3 text-xs">
        {conteudo.botao}
      </BotaoDoSite>
    </div>
  )
}
