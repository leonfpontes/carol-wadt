import { CHECKOUT, IMAGENS, MARCA, WHATSAPP } from "@/content/marca"
import { Preco } from "@/domain/dinheiro/Preco"
import { CondicaoDePagamento } from "@/domain/oferta/CondicaoDePagamento"
import { Oferta } from "@/domain/oferta/Oferta"

/**
 * Conteúdo da página "Black Outubro" como a Carol publicou (um artefato do
 * Claude, fora do site). Réplica fiel, inclusive a ordem visual dos
 * especialistas e o botão "Quero entrar na Mulher Inteira", que a proposta troca.
 */

export interface PilarBlackAtual {
  titulo: string
  pergunta: string
  pratica: string
}

export interface EspecialistaAtual {
  nome: string
  papel: string
  tema: string
  foto: string
}

export interface DepoimentoComAutora {
  texto: string
  autora: string
}

const checkout = CHECKOUT.black.url()

export const BLACK_ATUAL = {
  titulo: "Mentoria Mulher Inteira",
  botao: { texto: "Quero entrar na Mulher Inteira", url: checkout },
  capa: {
    rotulo: "Mentoria",
    tituloLinha1: "Mulher",
    tituloLinha2: "Inteira",
    frase: "Não basta a sua vida ser boa. O seu coração precisa pulsar dentro dela.",
    apoio: "Descubra o seu lugar de potência dentro da sua própria vida.",
    campanhaLinha1: "Black",
    campanhaLinha2: "Outubro",
    foto: IMAGENS.proposta.carolinaFrente,
  },
  paraVoce: {
    rotulo: "Para você",
    titulo: "Você é a gerente geral da sua própria vida",
    itens: [
      "Você carrega a carga mental de tudo, e mesmo assim não se sente realmente satisfeita com o que entrega.",
      "Você conquistou muito, mas a cada nova conquista já está pensando na próxima.",
      "Você cumpre expectativas dos outros, e isso cansa mais do que parece.",
      "Sua mente não para, e você quase nunca comemora o que alcança.",
      "Você sente que falta algo, mesmo tendo uma vida bonita e organizada.",
    ],
  },
  promessa: {
    rotulo: "A promessa",
    titulo: "Encontrar o seu lugar de potência dentro da sua própria vida",
    destaque: "Para que ela seja, de fato, sua.",
    apoio: "Não é sobre mudar tudo por fora. Quando a mudança acontece por dentro, o que está em volta começa a se ajustar.",
  },
  pilares: {
    rotulo: "Como o programa funciona",
    titulo: "Três pilares",
    apoio: "Cada pilar tem uma pergunta, uma prática e uma entrega concreta.",
    itens: [
      {
        titulo: "Pilar 1: Mulher Mais Viva",
        pergunta: "Quanto da sua presença você perde para dar conta de tudo?",
        pratica: "Você vê o custo da sua velocidade mental e escolhe uma área da vida para desacelerar.",
      },
      {
        titulo: "Pilar 2: O Poço Sem Fundo das Expectativas",
        pergunta: "De quem é o jeito certo que eu defendo?",
        pratica: "Você faz o inventário do que carrega, decide o que devolve e assume só o que é seu de verdade.",
      },
      {
        titulo: "Pilar 3: Me posicionando nos meus relacionamentos",
        pergunta: "Como fazer os meus relacionamentos serem mais gostosos de viver?",
        pratica: "Você identifica as suas âncoras relacionais e dá um passo concreto dentro do programa.",
      },
    ] satisfies PilarBlackAtual[],
    formato:
      "Seis encontros ao vivo, um por semana, de 60 a 90 minutos. O grupo de WhatsApp acompanha você entre os encontros, com uma carga de no máximo duas horas por semana.",
    grupo:
      "É um grupo de mulheres caminhando para o mesmo lugar que você, com a tutoria da Carolina e uma ambiência feminina de crescimento.",
  },
  especialistas: {
    rotulo: "Bônus",
    titulo: "Quatro aulas com especialistas",
    apoio: "Cada aula amplia um dos pilares, para você levar o aprendizado para a sua rotina.",
    /** Ordem visual da página original: Ju, Nara, Ana, Lore. */
    itens: [
      { nome: "Ju Nogueira", papel: "Consultora de imagem e estilo", tema: "Como a sua imagem acompanha quem você está se tornando.", foto: IMAGENS.proposta.ju },
      {
        nome: "Nara Yacovazzo",
        papel: "Redes sociais",
        tema: "Posicionamento na vida e no digital: suas crenças, valores e histórias mostrados nas redes.",
        foto: IMAGENS.proposta.nara,
      },
      { nome: "Ana Vasconcelos", papel: "Nutricionista", tema: "Alimentação e energia para uma rotina cheia.", foto: IMAGENS.proposta.ana },
      {
        nome: "Lore Torsani",
        papel: "Doula e mentora de mães",
        tema: "Ciclicidade feminina: ritmo, descanso e potência de entrega sem culpa.",
        foto: IMAGENS.proposta.lore,
      },
    ] satisfies EspecialistaAtual[],
  },
  bonusExclusivos: {
    rotulo: "Bônus exclusivos",
    titulo: "Hotseat e encontro individual",
    itens: [
      { titulo: "Hotseat bônus:", texto: "um encontro para trazer as suas dúvidas e receber orientação ao vivo." },
      { titulo: "Encontro individual com a Carolina:", texto: "as três primeiras inscritas ganham um encontro individual com a Carolina." },
    ],
  },
  depoimentos: {
    rotulo: "Depoimentos",
    titulo: "O que dizem as alunas",
    itens: [
      {
        autora: "Janielle M.",
        texto:
          "A mentoria foi o divisor de águas para mim. Parece clichê, mas a Carolina Wadt consegue, de uma forma leve, levar a gente a ver em nós o valor e a grandeza que temos. Obrigada por tanto. Eu, sem sombra de dúvidas, desbloqueei muitas coisas, aprendi a valorizar o meu potencial e sigo colocando em prática os ensinamentos e conselhos que ela traz.",
      },
      {
        autora: "Denise T.",
        texto:
          "Participar da mentoria foi uma experiência muito especial para mim. Mais do que os conteúdos e encontros, foi um espaço de olhar profundo para mim mesma e para a minha história. Ao longo do processo, vi que as áreas da vida estão todas interligadas, e quando a gente se permite olhar com verdade para dentro, tudo começa a se reorganizar fora. Quero agradecer pela forma sensível e respeitosa com que a Carol conduziu cada etapa, abrindo caminhos para que cada mulher encontre o seu próprio lugar. E a troca com os outros participantes foi muito rica também.",
      },
      {
        autora: "Lorena T.",
        texto:
          "Participei da mentoria Mulher Inteira com a Carolina e descobri que estava vivendo debaixo de um teto de repetição familiar em relação à minha carreira. A mentoria mal tinha acabado e o meu trabalho já começou a desaguar em lugares que eu nem imaginava. Fizemos atividades sistêmicas, e consegui identificar exatamente onde estava o meu bloqueio.",
      },
      {
        autora: "Camila G.",
        texto:
          "Hoje eu consigo ter uma leitura mais clara das minhas influências desde pequena. Entendo de onde eu vim e por que me relaciono como me relaciono com as pessoas e com o dinheiro. Tenho total consciência de que depende de mim dar um passo em direção às minhas intenções. Já tenho colocado em prática algumas coisas que vieram à tona durante o processo.",
      },
    ] satisfies DepoimentoComAutora[],
  },
  oferta: {
    tituloDaMentoria: "Mentoria Mulher Inteira:",
    tituloDosBonus: "Além do método Mulher Inteira, você ainda leva estes bônus",
    chamadaDaCondicao: "Mas, numa condição especial de Black Outubro:",
    escassez: "Esta condição existe apenas na Black Outubro e não se repetirá neste formato.",
    dados: new Oferta({
      nome: "Mentoria Mulher Inteira",
      campanha: "Black Outubro",
      precoDe: Preco.reais(1500),
      itens: [
        { descricao: "Mentoria Mulher Inteira", natureza: "incluso", valorDeReferencia: Preco.reais(1500) },
        {
          descricao: "Aulas com especialistas: Ju Nogueira, Nara Yacovazzo, Ana Vasconcelos e Lore Torsani",
          natureza: "bonus",
          valorDeReferencia: Preco.reais(916),
        },
        {
          descricao: "Encontro individual com Carolina WADT (para as três primeiras inscritas)",
          natureza: "bonus",
          valorDeReferencia: Preco.reais(481),
          limitado: true,
        },
      ],
      condicao: new CondicaoDePagamento(Preco.reais(1187), 12, Preco.reais(122.76)),
      checkout: CHECKOUT.black,
    }),
  },
  sobre: {
    rotulo: "Quem é a Carolina",
    foto: IMAGENS.proposta.carolinaAzul,
    paragrafos: [
      "Sou Carolina Wadt, mentora de Inteligência Sistêmica. Há quinze anos sigo no meu próprio caminho de desenvolvimento pessoal, e há cinco trabalho com mulheres que querem reencontrar a sua potência e a satisfação de viver a própria vida.",
      "Atendo mulheres em mais de dez países, a partir de Aveiro, em Portugal. Sou criadora do método MES e do grupo Mulher Inteira, e ajudo a mulher a enxergar o que é realmente seu e a construir a vida que deseja viver.",
    ],
  },
  contato: {
    rotulo: "Contato",
    titulo: "Ficou alguma dúvida?",
    texto: "Esclareça suas dúvidas antes de entrar. Fale diretamente pelo WhatsApp.",
    botao: { texto: "Falar pelo WhatsApp", url: WHATSAPP.linkCurto() },
  },
  faq: {
    rotulo: "Dúvidas",
    titulo: "Antes de entrar",
    itens: [
      {
        pergunta: "Este grupo é para mim?",
        resposta: "Eu não vendo fórmulas de dinheiro nem de emagrecimento. Aqui, o trabalho é com você, com o seu lugar e com as suas escolhas.",
      },
      {
        pergunta: "Quanto tempo preciso ter por semana?",
        resposta: "No máximo duas horas: um encontro ao vivo, uma prática de 15 minutos e o acompanhamento pelo grupo de WhatsApp.",
      },
      {
        pergunta: "Posso desistir depois de entrar?",
        resposta: "Sim. Você tem 7 dias corridos, a partir da compra, para desistir. Nesse prazo, devolvemos integralmente o valor que você já pagou.",
      },
    ],
  },
  rodape: `${MARCA.mentora} · ${MARCA.instituto} · ${MARCA.cidade}`,
} as const
