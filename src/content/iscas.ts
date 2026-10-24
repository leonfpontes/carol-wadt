import { CatalogoDeIscas, IscaDigital } from "@/domain/leads/IscaDigital"

/**
 * Iscas digitais oferecidas no Instagram.
 *
 * Para criar uma nova: acrescente um `new IscaDigital({...})` aqui, coloque o
 * PDF em `public/materiais/` (ou use o link de uma playlist) e divulgue
 * `carolinawadt.com/isca/<slug>` na automação de comentários da Meta.
 * Passo a passo em docs/captura-de-leads.md.
 */
export const ISCAS = new CatalogoDeIscas([
  new IscaDigital({
    slug: "o-que-nao-e-seu",
    palavraChave: "inteira",
    titulo: "O que você carrega que não é seu",
    subtitulo: "Um primeiro exercício sistêmico, em 15 minutos, para enxergar o peso que você assumiu da sua família.",
    formato: "pdf",
    conteudo: [
      "As três perguntas que mostram o que é seu e o que é herança",
      "Um exercício de escrita para fazer hoje, sem precisar de ninguém",
      "Como dar o primeiro passo para devolver o que não é seu",
    ],
    urlDeEntrega: "/materiais/o-que-nao-e-seu.pdf",
  }),
  new IscaDigital({
    slug: "playlist-mulher-inteira",
    palavraChave: "playlist",
    titulo: "Playlist Mulher Inteira",
    subtitulo: "As músicas que a Carol usa para desacelerar entre um compromisso e outro.",
    formato: "playlist",
    conteudo: ["Uma seleção para os 15 minutos de prática da semana", "Para ouvir no carro, na caminhada ou antes de dormir"],
    urlDeEntrega: "https://www.youtube.com/",
  }),
])
