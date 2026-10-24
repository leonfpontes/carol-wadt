import type { LucideIcon } from "lucide-react"
import { Lock, Mountain, RefreshCcw, ShieldCheck, Sparkles, Swords, Trophy } from "lucide-react"
import { CHECKOUT, IMAGENS, MARCA, WHATSAPP } from "@/content/marca"
import { Preco } from "@/domain/dinheiro/Preco"
import { CondicaoDePagamento } from "@/domain/oferta/CondicaoDePagamento"
import { Oferta } from "@/domain/oferta/Oferta"

/**
 * Conteúdo de carolinawadt.com como está publicado hoje (capturado em
 * 24/10/2026). É uma réplica fiel: textos, erros e escolhas originais foram
 * mantidos de propósito, para a comparação antes/depois ser justa.
 */

export interface ItemComIcone {
  icone: LucideIcon
  texto: string
}

export interface PilarAtual {
  titulo: string
  subtitulo: string
  descricao: string
  imagem: string
}

export interface ItemDeLista {
  titulo: string
  descricao: string
}

export interface ResultadoAtual extends ItemDeLista {
  imagem: string
}

const checkout = CHECKOUT.site.url()

export const SITE_ATUAL = {
  meta: {
    titulo: "Carolina Wadt | Inteligência Sistêmica, Identidade Feminina e Poder Pessoal",
    descricao:
      "Ajudo mulheres a enxergar e romper padrões sistêmicos invisíveis que drenam energia, relações e poder pessoal. Inteligência Sistêmica aplicada à vida real.",
  },
  capa: {
    rotulo: "- MENTORIA -",
    tituloLinha1: "DE GUERREIRA A",
    tituloLinha2: "MULHER INTEIRA",
    subtitulo: "Mentoria para Prosperidade Integral",
    frase: ["A vida que você construiu está pronta.", "Agora falta você estar inteira nela."],
    botao: { texto: "Quero viver essa transformação", url: checkout },
    selos: [
      { icone: ShieldCheck, texto: "Compra Segura" },
      { icone: Trophy, texto: "Satisfação Garantida" },
      { icone: Lock, texto: "Privacidade Protegida" },
    ] satisfies ItemComIcone[],
  },
  identificacao: {
    titulo: "Você se identifica?",
    itens: [
      { icone: RefreshCcw, texto: "Você repete padrões que gostaria de quebrar" },
      { icone: Swords, texto: "Está cansada de guerrear sozinha" },
      { icone: Sparkles, texto: "Entendeu que precisa olhar para si" },
      { icone: Mountain, texto: "Sente que há um teto invisível que não consegue ultrapassar" },
    ] satisfies ItemComIcone[],
    citacao: "\"Esta mentoria é para a mulher que entendeu que a guerra não vale a pena, que agora ela precisa de paz.\"",
    botao: { texto: "Quero viver essa paz", url: checkout },
  },
  pilares: {
    tituloInicio: "Por que a ",
    tituloDestaque: "Mentoria Mulher Inteira",
    tituloFim: " é única?",
    itens: [
      {
        titulo: "EU COMIGO",
        subtitulo: "Prosperidade Interna e Autoestima",
        descricao: "Como sair do modo de guerra e me permitir cuidar e ser cuidada.",
        imagem: IMAGENS.original.pilarChave,
      },
      {
        titulo: "EU E OS RELACIONAMENTOS",
        subtitulo: "Prosperidade Emocional e Relacional",
        descricao: "Construir conexões saudáveis e significativas",
        imagem: IMAGENS.original.pilarAliancas,
      },
      {
        titulo: "EU E O MUNDO",
        subtitulo: "Prosperidade Financeira e Material",
        descricao: "Prosperidade financeira e realização pessoal",
        imagem: IMAGENS.original.pilarDiamante,
      },
    ] satisfies PilarAtual[],
  },
  paraQuem: {
    titulo: "Para Quem É Esta Mentoria?",
    subtitulo: "Esta mentoria é para você que deseja:",
    itens: [
      {
        titulo: "Se sentir leve e prioridade:",
        descricao: "sem carregar o peso de ser forte o tempo todo, sem culpa por ocupar espaço na sua própria vida",
      },
      {
        titulo: "Se sentir vista e pertencente:",
        descricao: "por quem você ama, por você mesma e pela vida que construiu",
      },
      {
        titulo: "Se sentir segura e em paz:",
        descricao:
          "nas suas escolhas, relacionamentos e capacidade de prosperar, sem depender de controle ou aprovação externa",
      },
      {
        titulo: "Viver parceria e se permitir receber:",
        descricao:
          "relacionamentos onde você não carrega tudo sozinha, e pode receber amor, cuidado e prosperidade sem achar que precisa merecer",
      },
    ] satisfies ItemDeLista[],
  },
  naoEhPara: {
    tituloInicio: "Esta mentoria ",
    tituloDestaque: "NÃO",
    tituloFim: " é para quem:",
    itens: [
      { titulo: "Busca solução rápida e mágica", descricao: "sem disposição para olhar padrões profundos" },
      { titulo: "Prefere culpar o externo", descricao: "em vez de investigar padrões internos com sabedoria" },
      { titulo: "Quer apenas motivação superficial", descricao: "e não transformação real e duradoura" },
      { titulo: "Não está pronta para mudar", descricao: "mesmo sabendo que algo precisa ser diferente" },
    ] satisfies ItemDeLista[],
    botao: { texto: "QUERO SER MINHA MELHOR VERSÃO", url: checkout },
  },
  comoFunciona: {
    titulo: "Como Funciona a Mentoria?",
    itens: [
      { titulo: "Encontros ao Vivo", descricao: "Seis encontros online ao vivo com aprendizado profundo" },
      { titulo: "Trabalho Sistêmico", descricao: "Movimentos profundos para transformação pessoal" },
      { titulo: "Bônus", descricao: "• Hotseat ao vivo de tira dúvidas\n• Aula com expert convidada" },
      { titulo: "Plataforma", descricao: "Acesso a aulas gravadas por 6 meses" },
    ] satisfies ItemDeLista[],
    botao: { texto: "Quero Viver Isso", url: checkout },
  },
  resultados: {
    titulo: "Em 2 Meses Você Vai:",
    itens: [
      {
        titulo: "Identificar Padrões",
        descricao: "Compreender de onde vêm suas limitações e deixar para trás o que já não serve.",
        imagem: IMAGENS.original.resultadoPadroes,
      },
      { titulo: "Cuidar de Si", descricao: "Priorizar o autocuidado e bem-estar.", imagem: IMAGENS.original.resultadoCuidar },
      {
        titulo: "Recalcular rota",
        descricao: "Adquirir uma nova postura perante os desafios.",
        imagem: IMAGENS.original.resultadoRota,
      },
      {
        titulo: "Viver com Propósito",
        descricao: "Cultivar uma vida significativa e plena.",
        imagem: IMAGENS.original.resultadoProposito,
      },
    ] satisfies ResultadoAtual[],
  },
  depoimentos: {
    titulo: "Depoimentos",
    itens: [
      "Mesmo nesse pouquinho de tempo, já tô vendo resultados enormes na minha vida e vejo as coisas por uma outra perspectiva! 💎",
      "E o melhor: tô abrindo mão do controle com meu marido e tô dando espaço pra ele ser. Não tá sendo fácil, mas tem sido libertador! 🙌",
      "Quero honrar a @Carolina Wadt. Participei da mentoria mulher inteira e isso mudou a minha vida. Tenho vivido um novo momento no meu casamento...",
      "Que aula fantástica, Carol! Você facilita muito o caminho, sempre com exemplos práticos e tocando no nosso coração.",
      "Eu é que te agradeço Carol, tem sido mesmo uma benção fazer parte da mentoria. Tenho aprendido tanto com você.",
      "Que alegria fechar esse ciclo com vocês hoje. Deus confirma a todo momento esse chamado!",
      "Suas aulas são maravilhosas ❤️ eu tenho aprendido muito!",
    ],
  },
  oferta: {
    introducao:
      "A Mentoria de Guerreira a Mulher Inteira é um processo estruturado para que você tenha suporte e ferramentas práticas ao longo da sua jornada de transformação.",
    urgencia: "Por isso, por tempo limitado....",
    mockup: IMAGENS.original.mockup,
    mockupAlt: "Mentoria De Guerreira a Mulher Inteira - Acesso em todos os dispositivos",
    rotulo: "Mentoria",
    nome: "De Guerreira a Mulher Inteira",
    precoDeTexto: "de R$1500,00",
    botao: "Quero me inscrever agora",
    dados: new Oferta({
      nome: "De Guerreira a Mulher Inteira",
      itens: [{ descricao: "Mentoria", natureza: "incluso" }],
      precoDe: Preco.reais(1500),
      condicao: new CondicaoDePagamento(Preco.reais(1247), 12, Preco.reais(128.97)),
      checkout: CHECKOUT.site,
    }),
  },
  duvida: {
    titulo: "Ficou alguma dúvida?",
    botao: {
      texto: "Quero tirar minhas dúvidas por WhatsApp",
      url: WHATSAPP.linkComMensagem("Olá. Quero informações da Mentoria Mulher Inteira!", {
        type: "phone_number",
        app_absent: "0",
      }),
    },
  },
  sobre: {
    titulo: "Quem é Carolina Wadt?",
    resumo:
      "Mentora de Inteligência Sistêmica, com uma década e meia de experiência em autoconhecimento e desenvolvimento pessoal.",
    historia:
      "Desde muito cedo, me dediquei ao estudo do autoconhecimento, mas percebi que a verdadeira transformação só veio quando conheci a Visão Sistêmica. Foi com um processo estruturado e o apoio certo que minha vida começou a mudar, e passei a alcançar resultados concretos. Já trabalhei e apoiei pessoas na América Latina, Estados Unidos e Europa. Hoje, minha missão é guiar você no mesmo caminho, para viver a prosperidade integral que só uma mulher inteira pode viver!",
    foto: IMAGENS.original.carolina,
    botao: { texto: "QUERO ME INSCREVER", url: checkout },
  },
  rodape: {
    nome: MARCA.programa,
    direitos: `${MARCA.mentora} © 2026`,
  },
} as const
