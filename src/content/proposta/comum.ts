import { IMAGENS, MARCA, MENSAGENS, WHATSAPP } from "@/content/marca"
import type { ConteudoDaProposta } from "@/content/proposta/tipos"
import type { Oferta } from "@/domain/oferta/Oferta"

/**
 * Conteúdo comum às duas páginas propostas (site e Black).
 *
 * Regras que este texto segue (veja docs/conteudo.md):
 *  - "Prosperidade financeira" continua sendo um dos três pilares.
 *  - O botão de compra é "Garantir minha vaga". "Quero entrar na Mulher
 *    Inteira" saiu por ter duplo sentido sexual ao lado da foto da Carol.
 *  - Os outros termos da Carol ficam como ela escreveu (decisão do Leonardo).
 */

export const BOTAO_PRINCIPAL = "Garantir minha vaga"

const linkEuro = WHATSAPP.linkComMensagem(MENSAGENS.pagarEmEuro)
const linkDuvida = WHATSAPP.linkComMensagem(MENSAGENS.saberMais)

/** Itens da oferta iguais no site e na Black; a condição de preço muda. */
export const ITENS_DA_OFERTA: Oferta["itens"] = [
  { descricao: "6 encontros ao vivo com a Carolina", natureza: "incluso" },
  { descricao: "Grupo de acompanhamento no WhatsApp", natureza: "incluso" },
  { descricao: "Gravações por 6 meses", natureza: "incluso" },
  { descricao: "4 aulas com especialistas", natureza: "bonus" },
  { descricao: "Hotseat ao vivo", natureza: "bonus" },
  { descricao: "Encontro individual com a Carolina (três primeiras inscritas)", natureza: "bonus", limitado: true },
]

/** Seções idênticas nas duas páginas. Capa, oferta e barra fixa ficam em cada arquivo. */
export const SECOES_COMUNS: Omit<ConteudoDaProposta, "meta" | "faixaDaProposta" | "capa" | "oferta" | "barraFixa"> = {
  botaoPrincipal: BOTAO_PRINCIPAL,
  paraVoce: {
    rotulo: "Para você",
    titulo: "Você é a gerente geral da sua própria vida",
    itens: [
      "Você carrega a carga mental de tudo e, mesmo assim, não se sente realmente satisfeita com o que entrega.",
      "Você conquistou muito, mas a cada conquista já está pensando na próxima.",
      "Você cumpre as expectativas dos outros, e isso cansa mais do que parece.",
      "Sua mente não para, e você quase nunca comemora o que alcança.",
      "Você sente que falta algo, mesmo com uma vida bonita e organizada.",
      "Você percebe que repete escolhas da sua família no amor, no trabalho e com o dinheiro.",
    ],
    fecho: ["Não falta nada na sua vida.", "Falta você dentro dela."],
  },
  promessa: {
    nota: "\"Em 2 meses\" vira \"em seis semanas\", que é a duração real. Os quatro resultados ficaram concretos e incluem a prosperidade financeira como fruto do processo, sem prometer valores.",
    rotulo: "A promessa",
    titulo: "Encontrar o seu lugar de potência dentro da sua própria vida",
    apoio:
      "Não é sobre mudar tudo por fora. Quando a mudança acontece por dentro, o que está em volta começa a se ajustar: a rotina, os vínculos e a forma como a prosperidade chega até você.",
    resultados: [
      { titulo: "Ver o que decide por você", texto: "Enxergar os padrões da sua história familiar que ainda escolhem no seu lugar." },
      { titulo: "Devolver o que não é seu", texto: "Fazer o inventário do que você carrega e assumir só o que é seu de verdade." },
      { titulo: "Relações mais leves", texto: "Se posicionar com quem você ama sem precisar dar conta de tudo sozinha." },
      { titulo: "Prosperar sem guerra", texto: "Destravar a relação com dinheiro, trabalho e reconhecimento, e se permitir receber." },
    ],
    dica: "Veja valores e condições",
  },
  metodo: {
    nota: "Juntamos os dois conjuntos de pilares num só: os nomes do site (Eu comigo, Eu e os relacionamentos, Eu e o mundo) com a pergunta, a prática e a entrega da página Black. A Carol valida a fusão.",
    rotulo: "Como o programa funciona",
    titulo: "Três frentes de prosperidade, uma de cada vez",
    apoio: "Cada pilar tem uma pergunta, uma prática e uma entrega concreta.",
    pilares: [
      {
        etiqueta: "Pilar 1 · Eu comigo",
        titulo: "Prosperidade interna",
        pergunta: "Quanto da sua presença você perde para dar conta de tudo?",
        pratica: "Ver o custo da sua velocidade mental e o poço sem fundo das expectativas.",
        entrega: "Uma área da vida escolhida para desacelerar e o que você decide devolver.",
      },
      {
        etiqueta: "Pilar 2 · Eu e os relacionamentos",
        titulo: "Prosperidade nos vínculos",
        pergunta: "Como fazer os meus relacionamentos serem mais gostosos de viver?",
        pratica: "Identificar as suas âncoras relacionais e o lugar que você ocupa em cada vínculo.",
        entrega: "Um passo concreto dado dentro do programa, numa relação que importa para você.",
      },
      {
        etiqueta: "Pilar 3 · Eu e o mundo",
        titulo: "Prosperidade financeira e realização",
        pergunta: "O que da sua história ainda decide quanto você se permite receber?",
        pratica: "Olhar sistêmico para a relação com dinheiro, trabalho e reconhecimento herdada da família.",
        entrega: "O teto que você carrega com nome e um movimento para ultrapassá-lo.",
      },
    ],
  },
  mentora: {
    nota: "\"Quem é a Carolina\" sobe para antes dos depoimentos e da oferta. A cliente confia na mentora antes de ver o preço. A Inteligência Sistêmica ganha uma explicação de uma frase.",
    rotulo: "Quem conduz",
    nome: MARCA.mentora,
    foto: IMAGENS.proposta.carolinaAzul,
    paragrafos: [
      "Sou mentora de Inteligência Sistêmica. Há quinze anos sigo no meu próprio caminho de desenvolvimento pessoal, e há cinco trabalho com mulheres que querem reencontrar a sua potência e a satisfação de viver a própria vida.",
      "Inteligência Sistêmica é olhar para a sua vida como parte de um sistema: a família de onde você veio, os vínculos que você construiu e o lugar que você ocupa em cada um. Quando esse lugar fica claro, a vida volta a ser sua.",
      "Atendo mulheres de vários países a partir de Aveiro, em Portugal. Criei a Mulher Inteira para ajudar a mulher a enxergar o que é realmente seu e a construir a vida que deseja viver.",
    ],
    numeros: [
      { valor: "15 anos", legenda: "de caminho pessoal" },
      { valor: "5 anos", legenda: "mentorando mulheres" },
      { valor: "10+", legenda: "países atendidos" },
    ],
  },
  depoimentos: {
    nota: "Entram os depoimentos com nome da página Black. Saem as frases soltas de WhatsApp, com emojis e sem autora, e as falas que eram da própria Carol. Confirmar autorização de uso com cada aluna.",
    rotulo: "Depoimentos",
    titulo: "O que dizem as alunas",
    itens: [
      {
        autora: "Lorena T.",
        texto:
          "Descobri que estava vivendo debaixo de um teto de repetição familiar em relação à minha carreira. A mentoria mal tinha acabado e o meu trabalho já começou a desaguar em lugares que eu nem imaginava.",
      },
      {
        autora: "Camila G.",
        texto:
          "Hoje entendo de onde eu vim e por que me relaciono como me relaciono com as pessoas e com o dinheiro. Já tenho colocado em prática coisas que vieram à tona durante o processo.",
      },
      {
        autora: "Denise T.",
        texto:
          "Foi um espaço de olhar profundo para mim mesma e para a minha história. Vi que as áreas da vida estão todas interligadas, e quando a gente olha com verdade para dentro, tudo começa a se reorganizar fora.",
      },
      {
        autora: "Janielle M.",
        texto:
          "A mentoria foi o divisor de águas para mim. A Carolina consegue, de uma forma leve, levar a gente a ver em nós o valor e a grandeza que temos. Desbloqueei muitas coisas e aprendi a valorizar o meu potencial.",
      },
    ],
  },
  formato: {
    nota: "Respostas que hoje só aparecem no WhatsApp: quando começa, em que horário e fuso, quanto tempo exige e o que fica gravado.",
    rotulo: "Formato",
    titulo: "Cabe numa agenda cheia",
    itens: [
      { destaque: "6 encontros", texto: ["ao vivo e online, um por semana, de 60 a 90 minutos"] },
      { destaque: "Até 2 h", texto: ["por semana, contando o encontro e uma prática de 15 minutos"] },
      { destaque: "Grupo", texto: ["no WhatsApp entre os encontros, com a tutoria da Carolina"] },
      { destaque: "6 meses", texto: ["de acesso às gravações, para rever ou recuperar um encontro ", { aConfirmar: "confirmar" }] },
      { destaque: "Início", texto: [{ aConfirmar: "data a confirmar" }] },
      { destaque: "Horário", texto: [{ aConfirmar: "dia e hora a confirmar" }, " · horário de Brasília e de Lisboa"] },
    ],
  },
  bonus: {
    nota: "Site e página Black passam a ter a mesma lista de bônus. Hotseat e encontro individual entram na mesma seção, logo antes do preço.",
    rotulo: "Bônus",
    titulo: "Quatro aulas com especialistas",
    apoio: "Cada aula amplia um dos pilares, para você levar o aprendizado para a sua rotina.",
    especialistas: [
      { nome: "Ju Nogueira", area: "Imagem e estilo", tema: "Como a sua imagem acompanha quem você está se tornando.", foto: IMAGENS.proposta.ju },
      { nome: "Nara Yacovazzo", area: "Posicionamento digital", tema: "Suas crenças, valores e histórias mostrados nas redes.", foto: IMAGENS.proposta.nara },
      { nome: "Ana Vasconcelos", area: "Nutrição", tema: "Alimentação e energia para uma rotina cheia.", foto: IMAGENS.proposta.ana },
      { nome: "Lore Torsani", area: "Ciclicidade feminina", tema: "Ritmo, descanso e potência de entrega sem culpa.", foto: IMAGENS.proposta.lore },
    ],
    extras: [
      { titulo: "Hotseat ao vivo", texto: "Um encontro extra para trazer as suas dúvidas e receber orientação da Carolina." },
      { titulo: "Encontro individual com a Carolina", texto: "Para as três primeiras inscritas da turma." },
    ],
  },
  paraQuem: {
    nota: "O bloco \"NÃO é para quem\" saiu do meio da página e perdeu o tom de bronca. Perto da oferta, funciona como critério de entrada.",
    rotulo: "Antes de entrar",
    titulo: "A Mulher Inteira é para você se",
    sim: {
      titulo: "Faz sentido se você",
      itens: [
        "Já construiu muito e quer viver o que construiu",
        "Quer olhar para a própria história com profundidade",
        "Está disposta a dar passos concretos durante as seis semanas",
      ],
    },
    agoraNao: {
      titulo: "Talvez não seja agora se você",
      itens: [
        "Procura uma fórmula rápida de dinheiro ou de emagrecimento",
        "Busca apenas motivação para a semana",
        "Precisa de acompanhamento terapêutico ou médico neste momento",
      ],
    },
  },
  faq: {
    nota: "O site não tinha perguntas frequentes. Entram as da página Black e novas respostas para dúvidas que travam a compra: terapia, dinheiro, fuso e pagamento em euro.",
    rotulo: "Dúvidas",
    titulo: "Perguntas frequentes",
    itens: [
      {
        pergunta: "A mentoria é terapia?",
        resposta: [
          "Não. É uma mentoria em grupo de desenvolvimento pessoal com abordagem sistêmica. Ela não substitui acompanhamento psicológico, psiquiátrico ou médico.",
        ],
      },
      {
        pergunta: "Vou ter resultado financeiro?",
        resposta: [
          "Não é um curso de finanças e não prometemos valores. Trabalhamos o que trava a sua prosperidade: os padrões herdados na relação com dinheiro, trabalho e reconhecimento. Muitas alunas relatam mudanças nessa área como fruto do processo.",
        ],
      },
      {
        pergunta: "Quanto tempo preciso ter por semana?",
        resposta: ["No máximo duas horas: um encontro ao vivo, uma prática de 15 minutos e o acompanhamento pelo grupo de WhatsApp."],
      },
      {
        pergunta: "E se eu perder um encontro?",
        resposta: ["Todos os encontros ficam gravados e você tem 6 meses de acesso para assistir quando puder. ", { aConfirmar: "confirmar" }],
      },
      {
        pergunta: "Moro fora do Brasil. Posso participar?",
        resposta: ["Sim. Os encontros são online e o horário é informado nos fusos de Brasília e de Lisboa. Para pagar em euro, "],
        link: { texto: "fale com a Carol pelo WhatsApp", url: linkEuro },
      },
      {
        pergunta: "Posso desistir depois de entrar?",
        resposta: ["Sim. Você tem 7 dias corridos, a partir da compra, para desistir. Nesse prazo, devolvemos integralmente o valor que você pagou."],
      },
    ],
    contato: { texto: "Ainda tem dúvida? Fale com a Carol pelo WhatsApp", url: linkDuvida },
  },
  material: {
    nota: "Captura de e-mail com consentimento (LGPD e RGPD). É o destino das iscas do Instagram e começa uma lista de e-mails própria da Carol. Nesta demonstração o formulário guarda os dados só no seu navegador.",
    rotulo: "Ainda não é o momento?",
    titulo: "Comece por um material gratuito",
    apoio: [
      "Receba no seu e-mail ",
      { aConfirmar: "nome do material a definir" },
      ", um primeiro exercício sistêmico para enxergar o que você carrega que não é seu.",
    ],
    isca: "o-que-nao-e-seu",
    botao: "Quero receber o material",
  },
  fechamento: {
    rotulo: "Mulher Inteira",
    titulo: ["Não basta a sua vida ser boa.", "O seu coração precisa pulsar dentro dela."],
    whatsapp: { texto: "Falar pelo WhatsApp", url: linkDuvida },
  },
  rodape: {
    nota: "Termos de Uso e Política de Privacidade novos, escritos para mentoria (não para consultório de psicologia), com LGPD e RGPD.",
    linha: `${MARCA.mentora} · ${MARCA.instituto} · ${MARCA.cidade}`,
    contato: ["contato: ", { aConfirmar: "e-mail oficial a confirmar" }],
  },
}

export const GARANTIA = {
  titulo: "Garantia de 7 dias.",
  texto: "Se não for para você, peça o reembolso em até 7 dias corridos depois da compra e devolvemos o valor integral.",
}

export const PAGAMENTO_EM_EURO = {
  pergunta: "Mora fora do Brasil?",
  link: { texto: "Fale com a Carol para pagar em euro", url: linkEuro },
}
