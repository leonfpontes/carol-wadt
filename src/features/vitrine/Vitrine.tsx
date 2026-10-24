import { ArrowRight } from "lucide-react"
import { Link } from "react-router"
import { ROTAS } from "@/app/rotas"
import { Rotulo, Secao, Titulo } from "@/components/shared/editorial"
import { IMAGENS } from "@/content/marca"
import { ISCAS } from "@/content/iscas"
import { useTitulo } from "@/hooks/use-titulo"
import { cn } from "@/lib/utils"

/**
 * Vitrine da demonstração: ponto de partida para comparar as páginas atuais
 * da Carol com as propostas. Não faz parte do site final.
 */
interface CartaoDePagina {
  titulo: string
  descricao: string
  atual: string
  proposta: string
  imagem: string
  estiloDaImagem: string
}

const PAGINAS: CartaoDePagina[] = [
  {
    titulo: "Site principal",
    descricao: "carolinawadt.com: a página oficial da Mentoria da Mulher Inteira, com preço cheio. A proposta mantém a identidade azul e dourada do site.",
    atual: ROTAS.atual.site,
    proposta: ROTAS.proposta.site,
    imagem: IMAGENS.original.carolina,
    estiloDaImagem: "object-top",
  },
  {
    titulo: "Página Black Outubro",
    descricao: "A promoção de Black Friday, com preço especial por tempo limitado. É uma página separada, com identidade própria em preto e dourado.",
    atual: ROTAS.atual.black,
    proposta: ROTAS.proposta.black,
    imagem: IMAGENS.proposta.carolinaFrente,
    estiloDaImagem: "object-top grayscale",
  },
]

const MELHORIAS = [
  "Site oficial e Black continuam distintos, cada um com a sua identidade.",
  "Nome da mentoria em destaque, com a foto da Carol na capa.",
  "Dores, para quem é e para quem não é com fotos e ícones em que a visitante se reconhece.",
  "Como funciona em trilha, da mulher que chega à mulher inteira.",
  "Botão \"Garantir minha vaga\" no lugar de \"Quero entrar na Mulher Inteira\".",
  "Prosperidade financeira como um dos três pilares, sem prometer valores.",
  "Preço honesto: o riscado nunca menor que o parcelado, juros avisados.",
  "Preço junto de tudo o que está incluso, com garantia de 7 dias e caminho para pagar em euro.",
  "Depoimentos em carrossel, com estrelas e nome das alunas.",
  "Captura de e-mail com consentimento LGPD e RGPD, pronta para as iscas do Instagram.",
  "Totalmente responsivo, com barra de compra fixa no celular.",
]

const botaoBase = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold transition-colors"

export function Vitrine() {
  useTitulo("Mulher Inteira · Antes e depois")
  return (
    <main className="min-h-screen bg-preto">
      <Secao tom="escuro">
        <Rotulo>Demonstração local · Carolina Wadt</Rotulo>
        <Titulo como="h1" className="max-w-[20ch] text-[clamp(2.2rem,6vw,4rem)]">
          Mulher Inteira, antes e depois
        </Titulo>
        <p className="max-w-[60ch] text-lg text-white/75">
          Cada página aparece duas vezes: a réplica fiel do que está no ar hoje e a proposta de melhoria. Na proposta, as notas
          amarelas explicam o porquê de cada mudança e podem ser ocultadas para ver a página limpa.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PAGINAS.map((p) => (
            <article key={p.titulo} className="flex min-w-0 flex-col overflow-hidden rounded-md border border-linha-escura bg-carvao">
              <img src={p.imagem} alt="" className={cn("aspect-[16/9] w-full object-cover", p.estiloDaImagem)} />
              <div className="flex flex-1 flex-col p-6">
                <h2 className="titulo mb-2 text-2xl">{p.titulo}</h2>
                <p className="mb-6 text-[15px] text-white/70">{p.descricao}</p>
                <div className="mt-auto flex flex-wrap gap-3">
                  <Link to={p.atual} className={cn(botaoBase, "border border-white/25 text-white hover:border-white/60")}>
                    Ver como está hoje
                  </Link>
                  <Link to={p.proposta} className={cn(botaoBase, "bg-ouro text-preto hover:bg-ouro-suave")}>
                    Ver a proposta <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Secao>
      <Secao tom="off">
        <Rotulo>O que muda</Rotulo>
        <Titulo>As principais melhorias</Titulo>
        <ul className="mt-8 grid list-none grid-cols-1 gap-3 p-0 md:grid-cols-3">
          {MELHORIAS.map((m) => (
            <li key={m} className="flex min-w-0 gap-3 rounded border border-linha-clara bg-white p-4 text-[15px] text-texto-claro">
              <span className="losango mt-2" aria-hidden="true" />
              {m}
            </li>
          ))}
        </ul>
      </Secao>
      <Secao tom="escuro">
        <Rotulo>Iscas do Instagram</Rotulo>
        <Titulo>Páginas de material gratuito</Titulo>
        <p className="max-w-[60ch] text-white/75">
          O link que a automação de comentários envia. A pessoa deixa nome e e-mail, aceita receber mensagens e recebe o material.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {ISCAS.todas().map((isca) => (
            <Link key={isca.slug} to={ROTAS.isca(isca.slug)} className={cn(botaoBase, "border border-ouro text-ouro-suave hover:bg-ouro hover:text-preto")}>
              {isca.titulo} · comente {isca.palavraChave}
            </Link>
          ))}
        </div>
      </Secao>
    </main>
  )
}
