import { MARCA } from "@/content/marca"
import type { TextoRico } from "@/content/proposta/tipos"

/**
 * Textos legais.
 *
 * `ATUAIS` reproduz o que está publicado hoje em carolinawadt.com. Os Termos
 * atuais falam em "serviços de psicologia" e "Conselho Regional de
 * Psicologia", o que não corresponde a uma mentoria; a versão `PROPOSTOS` é
 * um rascunho escrito para mentoria em grupo, com LGPD e RGPD.
 * O rascunho precisa de revisão jurídica antes de ser publicado.
 */
export interface SecaoLegal {
  titulo: string
  paragrafos?: TextoRico[]
  itens?: string[]
  depoisDosItens?: TextoRico[]
}

export interface DocumentoLegal {
  titulo: string
  introducao: string
  secoes: SecaoLegal[]
  atualizadoEm: string
  aviso?: string
}

const emailAtual = MARCA.emailAtual

export const ATUAIS: Record<"privacidade" | "termos", DocumentoLegal> = {
  privacidade: {
    titulo: "Política de Privacidade",
    introducao:
      "Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você utiliza nossos serviços.",
    atualizadoEm: "Janeiro de 2026",
    secoes: [
      {
        titulo: "1. Informações que Coletamos",
        paragrafos: [
          [
            "Coletamos informações que você nos fornece diretamente, incluindo nome, endereço de e-mail, número de telefone e outras informações de contato quando você agenda uma consulta ou entra em contato conosco.",
          ],
        ],
      },
      {
        titulo: "2. Como Usamos Suas Informações",
        paragrafos: [["Utilizamos as informações coletadas para:"]],
        itens: [
          "Fornecer, manter e melhorar nossos serviços",
          "Processar agendamentos e comunicações",
          "Enviar informações relevantes sobre nossos serviços",
          "Cumprir obrigações legais e regulatórias",
        ],
      },
      {
        titulo: "3. Compartilhamento de Informações",
        paragrafos: [
          ["Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou com seu consentimento expresso."],
        ],
      },
      {
        titulo: "4. Segurança dos Dados",
        paragrafos: [
          [
            "Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.",
          ],
        ],
      },
      {
        titulo: "5. Seus Direitos (LGPD)",
        paragrafos: [["De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:"]],
        itens: [
          "Acessar seus dados pessoais",
          "Corrigir dados incompletos ou desatualizados",
          "Solicitar a exclusão de seus dados",
          "Revogar o consentimento a qualquer momento",
          "Solicitar a portabilidade dos dados",
        ],
      },
      {
        titulo: "6. Cookies",
        paragrafos: [
          [
            "Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência em nosso site. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades.",
          ],
        ],
      },
      {
        titulo: "7. Contato",
        paragrafos: [[`Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato através do e-mail: ${emailAtual}`]],
      },
      {
        titulo: "8. Alterações",
        paragrafos: [
          [
            "Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre nossas práticas de privacidade.",
          ],
        ],
      },
    ],
  },
  termos: {
    titulo: "Termos de Uso",
    introducao: "Ao utilizar este site e nossos serviços, você concorda com os termos e condições descritos abaixo.",
    atualizadoEm: "Janeiro de 2026",
    secoes: [
      {
        titulo: "1. Aceitação dos Termos",
        paragrafos: [
          [
            "Ao acessar e usar este site, você aceita e concorda em cumprir estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá usar nosso site ou serviços.",
          ],
        ],
      },
      {
        titulo: "2. Descrição dos Serviços",
        paragrafos: [
          [
            "Oferecemos serviços de psicologia e acompanhamento terapêutico voltados para autoconhecimento e desenvolvimento pessoal. Os serviços são prestados por profissional devidamente registrado no Conselho Regional de Psicologia.",
          ],
        ],
      },
      {
        titulo: "3. Agendamentos e Cancelamentos",
        paragrafos: [["Os agendamentos de sessões estão sujeitos às seguintes condições:"]],
        itens: [
          "As sessões devem ser agendadas com antecedência mínima de 24 horas",
          "Cancelamentos devem ser comunicados com pelo menos 24 horas de antecedência",
          "Faltas sem aviso prévio poderão ser cobradas integralmente",
          "Reagendamentos estão sujeitos à disponibilidade de horários",
        ],
      },
      {
        titulo: "4. Confidencialidade",
        paragrafos: [
          [
            "Todo o conteúdo das sessões é confidencial, conforme estabelecido pelo Código de Ética Profissional do Psicólogo. As informações compartilhadas durante o atendimento são protegidas pelo sigilo profissional.",
          ],
        ],
      },
      {
        titulo: "5. Limitações do Serviço",
        paragrafos: [
          ["Os serviços oferecidos não substituem tratamento médico ou psiquiátrico. Em casos de emergência ou crise, recomendamos procurar atendimento especializado imediato."],
        ],
      },
      {
        titulo: "6. Propriedade Intelectual",
        paragrafos: [
          [
            "Todo o conteúdo deste site, incluindo textos, imagens, logotipos e materiais, é protegido por direitos autorais e não pode ser reproduzido sem autorização prévia por escrito.",
          ],
        ],
      },
      {
        titulo: "7. Responsabilidades do Usuário",
        paragrafos: [["Ao utilizar nossos serviços, você se compromete a:"]],
        itens: [
          "Fornecer informações verdadeiras e atualizadas",
          "Comparecer às sessões agendadas ou comunicar impedimentos",
          "Respeitar os horários e regras estabelecidas",
          "Não utilizar o site para fins ilegais ou não autorizados",
        ],
      },
      {
        titulo: "8. Modificações",
        paragrafos: [
          ["Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site."],
        ],
      },
      {
        titulo: "9. Contato",
        paragrafos: [[`Para dúvidas sobre estes termos, entre em contato através do e-mail: ${emailAtual}`]],
      },
    ],
  },
}

// Enquanto o e-mail oficial não é confirmado, o contato é o WhatsApp da Carol.
const contatoOficial: TextoRico = ["Fale com a Carol pelo WhatsApp, no link que fica no rodapé do site."]
const AVISO = "Rascunho para avaliação da Carol. Precisa de revisão jurídica antes de ser publicado."

export const PROPOSTOS: Record<"privacidade" | "termos", DocumentoLegal> = {
  privacidade: {
    titulo: "Política de Privacidade",
    introducao:
      "Esta política explica, em linguagem simples, quais dados a Carolina Wadt recolhe quando você visita o site, pede um material gratuito ou se inscreve na Mentoria Mulher Inteira, e o que você pode fazer com eles. Vale para quem está no Brasil (LGPD) e na União Europeia (RGPD).",
    atualizadoEm: "Outubro de 2026",
    aviso: AVISO,
    secoes: [
      {
        titulo: "1. Quem cuida dos seus dados",
        paragrafos: [[`${MARCA.instituto}, com sede em ${MARCA.cidade}, é a responsável pelo tratamento dos dados descritos aqui.`]],
      },
      {
        titulo: "2. O que recolhemos e para quê",
        itens: [
          "Nome e e-mail, quando você pede um material gratuito: para enviar o material e, se você aceitar, conteúdos e convites da mentoria.",
          "Dados de compra, tratados pela plataforma de pagamento (Eduzz ou outra indicada no checkout): para confirmar a inscrição e emitir nota.",
          "Telefone, quando você nos chama no WhatsApp: para responder às suas dúvidas.",
          "Dados de navegação anónimos (estatísticas de visita): para entender quais páginas ajudam mais.",
        ],
      },
      {
        titulo: "3. Base legal",
        paragrafos: [
          [
            "Usamos o seu consentimento para o envio de e-mails, a execução do contrato para a mentoria que você comprou e o interesse legítimo para as estatísticas do site. Você pode retirar o consentimento a qualquer momento, sem custo.",
          ],
        ],
      },
      {
        titulo: "4. Com quem partilhamos",
        paragrafos: [
          [
            "Apenas com fornecedores necessários para o serviço funcionar: ferramenta de e-mail, plataforma de pagamento, hospedagem do site e WhatsApp. Não vendemos nem alugamos os seus dados.",
          ],
        ],
      },
      {
        titulo: "5. Por quanto tempo guardamos",
        paragrafos: [
          ["Os dados da lista de e-mails ficam enquanto você estiver inscrita. Dados de compra são guardados pelo prazo exigido pela lei fiscal."],
        ],
      },
      {
        titulo: "6. Os seus direitos",
        itens: [
          "Saber quais dados temos e pedir uma cópia",
          "Corrigir dados errados",
          "Pedir a eliminação dos seus dados",
          "Cancelar a inscrição na lista de e-mails pelo link em cada mensagem",
          "Reclamar à ANPD (Brasil) ou à CNPD (Portugal)",
        ],
      },
      { titulo: "7. Contato", paragrafos: [contatoOficial] },
    ],
  },
  termos: {
    titulo: "Termos de Uso",
    introducao: "Estes termos explicam como funciona a Mentoria Mulher Inteira e o uso deste site.",
    atualizadoEm: "Outubro de 2026",
    aviso: AVISO,
    secoes: [
      {
        titulo: "1. O que é a mentoria",
        paragrafos: [
          [
            "A Mentoria Mulher Inteira é um programa em grupo de desenvolvimento pessoal com abordagem sistêmica, conduzido por Carolina Wadt. Não é terapia nem atendimento psicológico, psiquiátrico ou médico, e não os substitui.",
          ],
        ],
      },
      {
        titulo: "2. Inscrição e pagamento",
        paragrafos: [
          [
            "A inscrição é confirmada após o pagamento na plataforma indicada no botão de compra. Para pagamentos em euro, a Carol indica pelo WhatsApp o meio disponível.",
          ],
        ],
      },
      {
        titulo: "3. Garantia de 7 dias",
        paragrafos: [["Você pode desistir em até 7 dias corridos após a compra e recebe o valor integral de volta."]],
      },
      {
        titulo: "4. Encontros e gravações",
        paragrafos: [
          [
            "Os encontros são online. As gravações ficam disponíveis pelo prazo informado na página da oferta, só para uso pessoal das participantes.",
          ],
        ],
      },
      {
        titulo: "5. Sigilo do grupo",
        paragrafos: [
          ["O que é partilhado pelas participantes nos encontros e no grupo de WhatsApp fica no grupo. Pedimos que ninguém grave, copie ou divulgue falas de outras mulheres."],
        ],
      },
      {
        titulo: "6. Resultados",
        paragrafos: [
          [
            "Cada processo é pessoal. Os depoimentos mostram experiências reais, mas não são promessa de resultado, inclusive financeiro.",
          ],
        ],
      },
      {
        titulo: "7. Propriedade intelectual",
        paragrafos: [["Os materiais da mentoria são de uso pessoal e não podem ser revendidos ou distribuídos."]],
      },
      { titulo: "8. Contato", paragrafos: [contatoOficial] },
    ],
  },
}
