import {
  CalendarCheck,
  Crown,
  Eye,
  Feather,
  Gift,
  GraduationCap,
  HeartHandshake,
  Hourglass,
  MapPin,
  Megaphone,
  MessageCircle,
  Mic,
  MonitorPlay,
  ShieldCheck,
  Sprout,
  Users,
  Video,
  WandSparkles,
  Zap,
} from "lucide-react"
import { ANCORAS, ROTAS, ancora } from "@/app/rotas"
import { CHECKOUT, IMAGENS, MARCA, MENSAGENS, WHATSAPP } from "@/content/marca"
import { BOTAO_PRINCIPAL } from "@/content/proposta/comum"
import type { ConteudoDoSiteProposto } from "@/content/proposta/tipos-site"
import { Preco } from "@/domain/dinheiro/Preco"
import { CondicaoDePagamento } from "@/domain/oferta/CondicaoDePagamento"
import { Oferta } from "@/domain/oferta/Oferta"

/**
 * Proposta do SITE OFICIAL (carolinawadt.com).
 *
 * Mantém a identidade do site da Carol (cores, fontes, pinturas dos pilares e
 * dos resultados, textos) e melhora a apresentação seção por seção, seguindo
 * o direcionamento do Leonardo de 24/10/2026. Não é a página Black.
 *
 * Reunião com a Carol (27/10/2026): os pilares passam a ser os da Black (os
 * três pilares de prosperidade vão para o grupo avançado, "Rainha da própria
 * vida", ainda sem página) e as quatro especialistas entram no site.
 */

const condicao = new CondicaoDePagamento(Preco.reais(1247), 12, Preco.reais(128.97))
const whatsappDuvidas = WHATSAPP.linkComMensagem("Olá. Quero informações da Mentoria Mulher Inteira!")

export const PROPOSTA_SITE: ConteudoDoSiteProposto = {
  meta: {
    titulo: "Mentoria da Mulher Inteira · Carolina Wadt",
    descricao:
      "Mentoria em grupo de Inteligência Sistêmica com Carolina Wadt: seis encontros ao vivo para encontrar o seu lugar de potência dentro da sua própria vida.",
  },
  faixaDaProposta: {
    titulo: "Proposta de melhoria de carolinawadt.com · versão para avaliação.",
    apoio: "Mesma identidade do site atual; as notas amarelas explicam cada mudança.",
  },
  botaoPrincipal: BOTAO_PRINCIPAL,
  // Black Outubro (pedido do Leonardo, 28/10). Apague este campo quando a campanha acabar.
  chamadaDaCampanha: {
    destaque: "Black Outubro",
    texto: "Condição especial da Mentoria da Mulher Inteira por tempo limitado.",
    botao: "Ver a oferta",
    url: "https://claude.ai/artifact/9eAkwWkMs1MDrzPW3VimXN",
  },

  capa: {
    nota: "O nome da mentoria aparece de cara, em letras grandes, ao lado da foto da Carol (como na Black). Sai o \"De Guerreira a\": o nome passa a ser Mentoria da Mulher Inteira. No lugar de \"Compra Segura\", \"Satisfação Garantida\" e \"Privacidade Protegida\", entram os benefícios da mentoria. Os selos de segurança descem para junto do preço. As \"3 frentes de prosperidade\" dão lugar às aulas com especialistas (reunião de 27/10).",
    rotulo: "Mentoria em grupo de Inteligência Sistêmica",
    produto: ["Mentoria da", "Mulher Inteira"],
    promessa: "A vida que você construiu está pronta. Agora falta você estar inteira nela.",
    apoio:
      "Seis encontros ao vivo com Carolina Wadt para mulheres que dão conta de tudo e querem voltar a sentir a própria vida.",
    beneficios: [
      { icone: Video, titulo: "6 encontros ao vivo", texto: "com a Carolina, em grupo" },
      { icone: GraduationCap, titulo: "4 aulas com especialistas", texto: "imagem, redes, nutrição e ciclicidade" },
      { icone: Users, titulo: "Grupo de apoio", texto: "mulheres no mesmo caminho" },
      { icone: MonitorPlay, titulo: "6 meses de acesso", texto: "às aulas gravadas" },
    ],
    foto: IMAGENS.proposta.carolinaFrente,
    selo: { valor: "15 anos", legenda: "de caminho em autoconhecimento" },
  },

  dores: {
    nota: "Cada dor ganha uma imagem em que a visitante se reconhece (fotos livres da Unsplash). O texto é o mesmo do site.",
    rotulo: "Para você",
    titulo: "Você se identifica?",
    itens: [
      { texto: "Você repete padrões que gostaria de quebrar", foto: IMAGENS.banco.dorPadroes, alt: "Mão segurando uma fotografia antiga de família" },
      { texto: "Está cansada de guerrear sozinha", foto: IMAGENS.banco.dorSozinha, alt: "Mulher com a cabeça apoiada nos braços ao lado de um laptop" },
      { texto: "Entendeu que precisa olhar para si", foto: IMAGENS.banco.dorOlharParaSi, alt: "Mulher escrevendo num caderno" },
      {
        texto: "Sente que há um teto invisível que não consegue ultrapassar",
        foto: IMAGENS.banco.dorTeto,
        alt: "Mulher olhando pela janela",
      },
    ],
    citacao: "Esta mentoria é para a mulher que entendeu que a guerra não vale a pena, que agora ela precisa de paz.",
    botao: "Quero viver essa paz",
  },

  resultados: {
    nota: "\"Em 2 meses você vai\" sobe para logo depois das dores: a visitante vê a transformação antes do método. As pinturas ganham moldura, como quadros. Confirmar com a Carol se o prazo é de 2 meses ou de seis semanas.",
    rotulo: "A transformação",
    titulo: "Em 2 meses você vai",
    itens: [
      {
        titulo: "Identificar padrões",
        texto: "Compreender de onde vêm suas limitações e deixar para trás o que já não serve.",
        imagem: IMAGENS.original.resultadoPadroes,
      },
      { titulo: "Cuidar de si", texto: "Priorizar o autocuidado e bem-estar.", imagem: IMAGENS.original.resultadoCuidar },
      { titulo: "Recalcular rota", texto: "Adquirir uma nova postura perante os desafios.", imagem: IMAGENS.original.resultadoRota },
      { titulo: "Viver com propósito", texto: "Cultivar uma vida significativa e plena.", imagem: IMAGENS.original.resultadoProposito },
    ],
  },

  pilares: {
    nota: "Os pilares passam a ser os da página Black, como a Carol pediu na reunião de 27/10: a estrutura anterior, com as três frentes de prosperidade, entregava demais e vai para o grupo avançado. As pinturas ganham moldura dourada dentro de cartões; confirmar com a Carol qual pintura combina com cada pilar.",
    rotulo: "O método",
    titulo: "Por que a Mentoria da Mulher Inteira é única?",
    apoio: "Três pilares. Cada um tem uma pergunta, uma prática e uma entrega concreta.",
    itens: [
      {
        nome: "Mulher Mais Viva",
        foco: "Quanto da sua presença você perde para dar conta de tudo?",
        texto: "Você vê o custo da sua velocidade mental e escolhe uma área da vida para desacelerar.",
        imagem: IMAGENS.original.pilarChave,
      },
      {
        nome: "O Poço Sem Fundo das Expectativas",
        foco: "De quem é o jeito certo que eu defendo?",
        texto: "Você faz o inventário do que carrega, decide o que devolve e assume só o que é seu de verdade.",
        imagem: IMAGENS.original.pilarDiamante,
      },
      {
        nome: "Me posicionando nos meus relacionamentos",
        foco: "Como fazer os meus relacionamentos serem mais gostosos de viver?",
        texto: "Você identifica as suas âncoras relacionais e dá um passo concreto dentro do programa.",
        imagem: IMAGENS.original.pilarAliancas,
      },
    ],
  },

  paraQuem: {
    nota: "Mais respiro e uma foto de uma mulher madura e realizada, para a visitante se reconhecer. Cada desejo ganha um ícone próprio no lugar do mesmo losango repetido.",
    rotulo: "Para quem é",
    titulo: "Para quem é esta mentoria?",
    apoio: "Esta mentoria é para você que deseja:",
    foto: IMAGENS.banco.paraQuem,
    itens: [
      {
        icone: Feather,
        titulo: "Se sentir leve e prioridade",
        texto: "sem carregar o peso de ser forte o tempo todo, sem culpa por ocupar espaço na sua própria vida",
      },
      { icone: Eye, titulo: "Se sentir vista e pertencente", texto: "por quem você ama, por você mesma e pela vida que construiu" },
      {
        icone: ShieldCheck,
        titulo: "Se sentir segura e em paz",
        texto: "nas suas escolhas, relacionamentos e capacidade de prosperar, sem depender de controle ou aprovação externa",
      },
      {
        icone: HeartHandshake,
        titulo: "Viver parceria e se permitir receber",
        texto:
          "relacionamentos onde você não carrega tudo sozinha, e pode receber amor, cuidado e prosperidade sem achar que precisa merecer",
      },
    ],
  },

  naoEhPara: {
    nota: "Os quatro \"X\" vermelhos dão lugar a cartões com ícones próprios e uma foto, no mesmo padrão da seção anterior. O texto é o mesmo.",
    rotulo: "Combinado honesto",
    titulo: "Esta mentoria não é para quem",
    destaque: "não",
    apoio: "Transformação de verdade pede disposição para olhar para dentro.",
    foto: IMAGENS.banco.naoEhPara,
    itens: [
      { icone: WandSparkles, titulo: "Busca solução rápida e mágica", texto: "sem disposição para olhar padrões profundos" },
      { icone: Megaphone, titulo: "Prefere culpar o externo", texto: "em vez de investigar padrões internos com sabedoria" },
      { icone: Zap, titulo: "Quer apenas motivação superficial", texto: "e não transformação real e duradoura" },
      { icone: Hourglass, titulo: "Não está pronta para mudar", texto: "mesmo sabendo que algo precisa ser diferente" },
    ],
    botao: "Quero ser minha melhor versão",
  },

  trilha: {
    nota: "Os quatro quadros soltos viram uma trilha: começa em quem a visitante é hoje, passa por cada parte da mentoria e termina na mulher inteira. Assim ela entende o valor de cada etapa.",
    rotulo: "Como funciona",
    titulo: "Como funciona a mentoria?",
    apoio: "Uma jornada guiada, do lugar onde você está até a mulher inteira que você quer ser.",
    etapas: [
      {
        ponta: true,
        icone: MapPin,
        rotulo: "Onde você está",
        titulo: "A mulher que construiu muito",
        texto: "Dá conta de tudo, carrega a carga mental e sente que falta ela mesma na própria vida.",
      },
      {
        icone: Video,
        rotulo: "Etapa 1",
        titulo: "Encontros ao vivo",
        texto: "Seis encontros online ao vivo com aprendizado profundo, em grupo, com a Carolina.",
      },
      {
        icone: Sprout,
        rotulo: "Etapa 2",
        titulo: "Trabalho sistêmico",
        texto: "Movimentos profundos para transformação pessoal: você enxerga os padrões que herdou e escolhe o que é seu.",
      },
      {
        icone: Gift,
        rotulo: "Etapa 3",
        titulo: "Bônus",
        texto: "Quatro aulas com especialistas e um hotseat ao vivo de tira-dúvidas.",
      },
      {
        icone: MonitorPlay,
        rotulo: "Etapa 4",
        titulo: "Plataforma",
        texto: "Acesso às aulas gravadas por 6 meses, para rever no seu ritmo.",
      },
      {
        ponta: true,
        icone: Crown,
        rotulo: "Onde você chega",
        titulo: "Mulher inteira",
        texto: "Presente na própria vida, com relações mais leves e espaço para o que é seu de verdade.",
      },
    ],
    botao: "Quero viver isso",
  },

  especialistas: {
    nota: "As quatro especialistas da página Black passam a fazer parte do time da Mulher Inteira (reunião de 27/10). A seção continua a trilha, no mesmo fundo, com as fotos emolduradas como os quadros do site.",
    rotulo: "Bônus",
    titulo: "Quatro aulas com especialistas",
    apoio: "Cada aula amplia um dos pilares, para você levar o aprendizado para a sua rotina.",
    itens: [
      { nome: "Ju Nogueira", area: "Imagem e estilo", tema: "Como a sua imagem acompanha quem você está se tornando.", foto: IMAGENS.proposta.ju },
      { nome: "Nara Yacovazzo", area: "Posicionamento digital", tema: "Suas crenças, valores e histórias mostrados nas redes.", foto: IMAGENS.proposta.nara },
      { nome: "Ana Vasconcelos", area: "Nutrição", tema: "Alimentação e energia para uma rotina cheia.", foto: IMAGENS.proposta.ana },
      { nome: "Lore Torsani", area: "Ciclicidade feminina", tema: "Ritmo, descanso e potência de entrega sem culpa.", foto: IMAGENS.proposta.lore },
    ],
  },

  mentora: {
    nota: "Seção mantida: limpa e com sensação premium. Entram só dois números de credibilidade e ela sobe para antes dos depoimentos e do preço. A Austrália e o Japão entram na história (reunião de 27/10).",
    titulo: "Quem é Carolina Wadt?",
    resumo:
      "Mentora de Inteligência Sistêmica, com uma década e meia de experiência em autoconhecimento e desenvolvimento pessoal.",
    historia:
      "Desde muito cedo, me dediquei ao estudo do autoconhecimento, mas percebi que a verdadeira transformação só veio quando conheci a Visão Sistêmica. Foi com um processo estruturado e o apoio certo que minha vida começou a mudar, e passei a alcançar resultados concretos. Já trabalhei e apoiei pessoas na América Latina, nos Estados Unidos, na Europa, na Austrália e no Japão. Hoje, minha missão é guiar você no mesmo caminho, para viver a prosperidade integral que só uma mulher inteira pode viver!",
    foto: IMAGENS.original.carolina,
    numeros: [
      { valor: "15 anos", legenda: "de autoconhecimento" },
      { valor: "10+ países", legenda: "da América Latina à Austrália e ao Japão" },
    ],
  },

  depoimentos: {
    nota: "Os depoimentos viram um carrossel com estrelas, nome e foto de inicial. Entram os depoimentos com nome da página Black; confirmar autorização de uso com cada aluna.",
    rotulo: "Depoimentos",
    titulo: "O que dizem as alunas",
    nota5: "Palavras de alunas da Mentoria Mulher Inteira",
    itens: [
      {
        autora: "Lorena T.",
        detalhe: "Aluna da Mentoria Mulher Inteira",
        texto:
          "Descobri que estava vivendo debaixo de um teto de repetição familiar em relação à minha carreira. A mentoria mal tinha acabado e o meu trabalho já começou a desaguar em lugares que eu nem imaginava.",
      },
      {
        autora: "Janielle M.",
        detalhe: "Aluna da Mentoria Mulher Inteira",
        texto:
          "A mentoria foi o divisor de águas para mim. A Carolina consegue, de uma forma leve, levar a gente a ver em nós o valor e a grandeza que temos. Desbloqueei muitas coisas e aprendi a valorizar o meu potencial.",
      },
      {
        autora: "Camila G.",
        detalhe: "Aluna da Mentoria Mulher Inteira",
        texto:
          "Hoje entendo de onde eu vim e por que me relaciono como me relaciono com as pessoas e com o dinheiro. Já tenho colocado em prática coisas que vieram à tona durante o processo.",
      },
      {
        autora: "Denise T.",
        detalhe: "Aluna da Mentoria Mulher Inteira",
        texto:
          "Foi um espaço de olhar profundo para mim mesma e para a minha história. Vi que as áreas da vida estão todas interligadas, e quando a gente olha com verdade para dentro, tudo começa a se reorganizar fora.",
      },
      {
        autora: "Aluna da turma",
        detalhe: "Mentoria Mulher Inteira",
        texto: "Mesmo nesse pouquinho de tempo, já tô vendo resultados enormes na minha vida e vejo as coisas por uma outra perspectiva!",
      },
      {
        autora: "Aluna da turma",
        detalhe: "Mentoria Mulher Inteira",
        texto: "Que aula fantástica, Carol! Você facilita muito o caminho, sempre com exemplos práticos e tocando no nosso coração.",
      },
    ],
  },

  inscricao: {
    nota: "A seção com o computador foi refeita: o preço vem junto de tudo o que está incluso, para não ficar um valor solto. Sai o \"de R$1.500\" (o parcelado somava R$1.547,64). Garantia, compra segura e privacidade ficam colados ao preço, e há caminho para pagar em euro.",
    rotulo: "Inscrição",
    titulo: "Tudo o que você recebe",
    apoio: "Um processo estruturado para você ter suporte e ferramentas práticas ao longo da sua jornada.",
    inclui: [
      { icone: Video, titulo: "6 encontros ao vivo", texto: "Online, em grupo, com a Carolina. Um por semana." },
      { icone: Sprout, titulo: "Trabalho sistêmico", texto: "Movimentos profundos nos três pilares da mentoria." },
      { icone: MessageCircle, titulo: "Grupo de acompanhamento", texto: "No WhatsApp, entre um encontro e outro." },
      { icone: Mic, titulo: "Hotseat ao vivo", texto: "Um encontro extra para tirar as suas dúvidas." },
      { icone: GraduationCap, titulo: "4 aulas com especialistas", texto: "Imagem, redes, nutrição e ciclicidade feminina." },
      { icone: CalendarCheck, titulo: "6 meses de plataforma", texto: "Todas as aulas gravadas, para rever quando quiser." },
    ],
    oferta: new Oferta({
      nome: "Mentoria Mulher Inteira",
      itens: [{ descricao: "Mentoria Mulher Inteira", natureza: "incluso" }],
      precoDe: Preco.reais(1500),
      condicao,
      checkout: CHECKOUT.site,
    }),
    observacao: [`O parcelado inclui os juros do cartão (total de ${condicao.totalParcelado.formatar()}). `, { aConfirmar: "preço a confirmar" }],
    garantia: "Garantia de 7 dias: se não for para você, devolvemos o valor integral.",
    pagamentoEmEuro: {
      pergunta: "Mora fora do Brasil?",
      texto: "Fale com a Carol para pagar em euro",
      url: WHATSAPP.linkComMensagem(MENSAGENS.pagarEmEuro),
    },
  },

  duvidas: {
    nota: "O site não tinha perguntas frequentes. Entram as dúvidas que travam a compra, com o botão de WhatsApp do site logo abaixo.",
    rotulo: "Dúvidas",
    titulo: "Ficou alguma dúvida?",
    itens: [
      {
        pergunta: "A mentoria é terapia?",
        resposta:
          "Não. É uma mentoria em grupo de desenvolvimento pessoal com abordagem sistêmica. Ela não substitui acompanhamento psicológico, psiquiátrico ou médico.",
      },
      {
        pergunta: "Vou ter resultado financeiro?",
        resposta:
          "Não é um curso de finanças e não prometemos valores. Trabalhamos o que trava a sua prosperidade: os padrões herdados na relação com dinheiro, trabalho e reconhecimento.",
      },
      {
        pergunta: "Quanto tempo preciso ter por semana?",
        resposta: "No máximo duas horas: um encontro ao vivo, uma prática curta e o acompanhamento pelo grupo de WhatsApp.",
      },
      {
        pergunta: "E se eu perder um encontro?",
        resposta: "Todos os encontros ficam gravados na plataforma, com 6 meses de acesso para assistir quando puder.",
      },
      {
        pergunta: "Moro fora do Brasil. Posso participar?",
        resposta: "Sim. Os encontros são online, com horário informado nos fusos de Brasília e de Lisboa. Para pagar em euro, fale com a Carol.",
      },
      {
        pergunta: "Posso desistir depois da compra?",
        resposta: "Sim. Você tem 7 dias corridos, a partir da compra, para desistir e receber de volta o valor integral.",
      },
    ],
    whatsapp: { texto: "Quero tirar minhas dúvidas por WhatsApp", url: whatsappDuvidas },
  },

  material: {
    nota: "Captura de e-mail com consentimento (LGPD e RGPD), destino das iscas do Instagram. Nesta demonstração os dados ficam só no seu navegador.",
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

  rodape: {
    nota: "Rodapé completo: navegação, contatos (WhatsApp e Instagram), documentos legais e selos de confiança, com os dados que ainda dependem da Carol marcados.",
    marca: "Mentoria da Mulher Inteira",
    descricao: "Mentoria em grupo de Inteligência Sistêmica para mulheres que querem viver por inteiro a vida que construíram.",
    colunas: [
      {
        titulo: "A mentoria",
        links: [
          { texto: "Para quem é", destino: ancora("para-quem") },
          { texto: "Como funciona", destino: ancora(ANCORAS.metodo) },
          { texto: "Depoimentos", destino: ancora("depoimentos") },
          { texto: "Inscrição", destino: ancora(ANCORAS.oferta) },
          { texto: "Material gratuito", destino: ancora(ANCORAS.material) },
        ],
      },
      {
        titulo: "Fale com a Carol",
        links: [
          { texto: "WhatsApp", destino: whatsappDuvidas, externo: true },
          { texto: `Instagram ${MARCA.arrobaInstagram}`, destino: MARCA.instagram, externo: true },
          { aConfirmar: "e-mail oficial a confirmar" },
          { texto: "Atendimento online · Brasil e Europa", destino: ancora(ANCORAS.oferta) },
        ],
      },
      {
        titulo: "Informações",
        links: [
          { texto: "Termos de Uso", destino: ROTAS.termos },
          { texto: "Política de Privacidade", destino: ROTAS.privacidade },
          { texto: "Garantia de 7 dias", destino: ancora(ANCORAS.oferta) },
          { aConfirmar: "CNPJ / NIF a confirmar" },
          { aConfirmar: "Livro de Reclamações (link a confirmar)" },
        ],
      },
    ],
    selos: ["Compra segura pela Eduzz", "Garantia de 7 dias", "Dados protegidos (LGPD e RGPD)"],
    linhaFinal: `© 2026 ${MARCA.mentora} · ${MARCA.instituto} · ${MARCA.cidade}`,
  },

  barraFixa: {
    destaque: `${condicao.aVista.formatar({ compacto: true })} à vista`,
    apoio: `ou ${condicao.descreverParcelamento()}`,
    botao: "Garantir vaga",
  },
}
