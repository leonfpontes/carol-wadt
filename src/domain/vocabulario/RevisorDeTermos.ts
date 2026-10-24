/**
 * Revisor de termos ambíguos.
 *
 * O público da Carol são mulheres adultas, bem resolvidas, e a página traz a
 * foto dela ao lado dos botões. "Quero entrar na Mulher Inteira" ganha duplo
 * sentido sexual nesse contexto, por isso o botão foi trocado.
 *
 * Decisão do Leonardo (24/10/2026): só o botão muda. Os demais termos da
 * varredura ("gostosos", "entrega", "se permitir receber"…) fazem parte do
 * apelo sentimental e ficam como a Carol escreveu. Eles continuam listados
 * com severidade "atencao", para a Carol decidir, mas não barram nada.
 * Os de severidade "bloqueia" fazem o teste `npm run revisar:termos` falhar.
 */
export type Severidade = "bloqueia" | "atencao"

export interface TermoAmbiguo {
  readonly severidade: Severidade
  /** Expressão regular que encontra o termo (sem diferenciar maiúsculas). */
  readonly padrao: RegExp
  /** Como o termo aparece no texto original. */
  readonly exemplo: string
  /** Por que trocar. */
  readonly motivo: string
  /** Troca usada nas propostas. */
  readonly sugestao: string
}

export const TERMOS_AMBIGUOS: readonly TermoAmbiguo[] = [
  {
    severidade: "bloqueia",
    padrao: /\bentrar na mulher inteira\b/i,
    exemplo: "Quero entrar na Mulher Inteira",
    motivo: "Duplo sentido sexual, reforçado pela foto da Carol ao lado do botão.",
    sugestao: "Garantir minha vaga",
  },
  {
    severidade: "bloqueia",
    padrao: /\bquero entrar\b/i,
    exemplo: "Quero entrar",
    motivo: "Mesmo duplo sentido quando o botão é encurtado na barra do celular.",
    sugestao: "Garantir vaga",
  },
  {
    severidade: "atencao",
    padrao: /\bantes de entrar\b|\bdepois de entrar\b/i,
    exemplo: "Antes de entrar / Posso desistir depois de entrar?",
    motivo: "Repete o verbo do botão perto da oferta.",
    sugestao: "Antes de decidir / Posso desistir depois da compra?",
  },
  {
    severidade: "atencao",
    padrao: /\bgostos[oa]s?\b/i,
    exemplo: "relacionamentos mais gostosos de viver",
    motivo: "Conotação sensual em texto sobre vínculos.",
    sugestao: "relacionamentos mais leves e verdadeiros",
  },
  {
    severidade: "atencao",
    padrao: /\bpot[eê]ncia de entrega\b/i,
    exemplo: "potência de entrega sem culpa",
    motivo: "\"Entrega\" ao lado de \"potência\" sugere ato sexual.",
    sugestao: "energia para se dedicar sem culpa",
  },
  {
    severidade: "atencao",
    padrao: /\bse permit(e|ir) receber\b/i,
    exemplo: "se permitir receber",
    motivo: "Lido fora de contexto, soa sexual; o sentido real é prosperidade.",
    sugestao: "abrir espaço para a prosperidade",
  },
  {
    severidade: "atencao",
    padrao: /\bsatisfeita\b/i,
    exemplo: "não se sente realmente satisfeita com o que entrega",
    motivo: "\"Satisfeita\" + \"entrega\" forma par ambíguo.",
    sugestao: "não se sente realmente realizada com o que faz",
  },
  {
    severidade: "atencao",
    padrao: /\bhot\s?seat\b/i,
    exemplo: "Hotseat",
    motivo: "Anglicismo com \"hot\" lido como \"quente\" por quem não conhece o termo.",
    sugestao: "Encontro de dúvidas ao vivo",
  },
  {
    severidade: "atencao",
    padrao: /\bencontro individual\b/i,
    exemplo: "Encontro individual com a Carolina",
    motivo: "\"Encontro\" a dois pode soar como encontro romântico.",
    sugestao: "Sessão individual com a Carolina",
  },
  {
    severidade: "atencao",
    padrao: /\bentrega\b/i,
    exemplo: "uma prática e uma entrega concreta",
    motivo: "Mesmo campo semântico de \"potência de entrega\"; preferimos \"resultado\".",
    sugestao: "resultado",
  },
]

export interface Ocorrencia {
  readonly termo: TermoAmbiguo
  readonly trecho: string
}

export class RevisorDeTermos {
  private readonly termos: readonly TermoAmbiguo[]

  constructor(termos: readonly TermoAmbiguo[] = TERMOS_AMBIGUOS) {
    this.termos = termos
  }

  /** Lista cada termo ambíguo encontrado no texto, com o trecho ao redor. */
  revisar(texto: string, severidade?: Severidade): Ocorrencia[] {
    const ocorrencias: Ocorrencia[] = []
    for (const termo of this.termos) {
      if (severidade && termo.severidade !== severidade) continue
      const global = new RegExp(termo.padrao.source, "gi")
      for (const achado of texto.matchAll(global)) {
        const inicio = Math.max(0, (achado.index ?? 0) - 30)
        ocorrencias.push({ termo, trecho: texto.slice(inicio, (achado.index ?? 0) + achado[0].length + 30) })
      }
    }
    return ocorrencias
  }
}
