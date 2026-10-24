import { Check } from "lucide-react"
import { Link, useParams } from "react-router"
import { ROTAS } from "@/app/rotas"
import { Rotulo, Secao, Titulo } from "@/components/shared/editorial"
import { IMAGENS, MARCA } from "@/content/marca"
import { ISCAS } from "@/content/iscas"
import { FormularioDeMaterial } from "@/features/isca/FormularioDeMaterial"
import { useTitulo } from "@/hooks/use-titulo"

/**
 * Página de captura de uma isca digital (`/isca/:slug`).
 *
 * É o link que a automação de comentários do Instagram envia. Uma página
 * curta, sem menu e sem distrações: o que é o material, para quem é, e o
 * formulário. Depois do envio, convida para conhecer a mentoria.
 */
export function PaginaDeIsca() {
  const { slug = "" } = useParams()
  const isca = ISCAS.buscar(slug)
  useTitulo(isca ? `${isca.titulo} · ${MARCA.mentora}` : `Material não encontrado · ${MARCA.mentora}`)

  if (!isca) {
    return (
      <Secao tom="escuro" estreita className="min-h-screen">
        <Titulo como="h1">Este material não está mais disponível</Titulo>
        <p className="mb-6 opacity-80">Talvez o link tenha mudado. Veja a página da mentoria ou chame a Carol no Instagram.</p>
        <Link to={ROTAS.proposta.site} className="text-ouro-suave underline underline-offset-4">
          Conhecer a Mentoria Mulher Inteira
        </Link>
      </Secao>
    )
  }

  return (
    <main className="min-h-screen bg-preto">
      <Secao tom="escuro">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <Rotulo>
              {isca.rotuloDoFormato} gratuito · comente {isca.palavraChave}
            </Rotulo>
            <Titulo como="h1" className="text-[clamp(2rem,5vw,3.2rem)]">
              {isca.titulo}
            </Titulo>
            <p className="mb-6 max-w-[48ch] text-lg text-white/80">{isca.subtitulo}</p>
            <ul className="m-0 grid list-none gap-3 p-0">
              {isca.conteudo.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 h-4 w-4 flex-none text-ouro" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <img src={IMAGENS.proposta.carolinaAzul} alt="" className="h-14 w-14 rounded-full object-cover object-top" />
              <p className="m-0 text-sm text-white/70">
                Por <b className="text-white">{MARCA.mentora}</b>, mentora de Inteligência Sistêmica
              </p>
            </div>
          </div>
          <div className="min-w-0 rounded-md bg-off p-6 sm:p-8">
            <p className="titulo mb-4 text-2xl text-preto">Receba no seu e-mail</p>
            <FormularioDeMaterial isca={isca.slug} textoDoBotao="Quero receber" urlDeEntrega={isca.urlDeEntrega} />
          </div>
        </div>
      </Secao>
      <footer className="contem pb-10 text-center text-xs text-white/50">
        {MARCA.mentora} · {MARCA.cidade} ·{" "}
        <Link to={ROTAS.proposta.privacidade} className="underline">
          Política de Privacidade
        </Link>
      </footer>
    </main>
  )
}
