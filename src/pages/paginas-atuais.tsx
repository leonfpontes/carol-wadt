/**
 * Páginas "Atual": réplicas fiéis do que a Carol tem publicado hoje.
 * Cada página é só a lista ordenada das suas seções.
 */
import type { ComponentType } from "react"
import { BarraDeDemonstracao } from "@/components/shared/BarraDeDemonstracao"
import { BLACK_ATUAL } from "@/content/atual/black"
import { SITE_ATUAL } from "@/content/atual/site"
import {
  BonusExclusivosBlackAtual,
  CapaBlackAtual,
  ContatoBlackAtual,
  DepoimentosBlackAtual,
  EspecialistasBlackAtual,
  FaqBlackAtual,
  OfertaBlackAtual,
  ParaVoceBlackAtual,
  PilaresBlackAtual,
  PromessaBlackAtual,
  RodapeBlackAtual,
  SobreBlackAtual,
} from "@/features/atual-black/secoes"
import { DuvidaAtual, OfertaAtual, RodapeAtual, SobreAtual } from "@/features/atual-site/secoes-fim"
import {
  ComoFuncionaAtual,
  DepoimentosAtual,
  NaoEhParaAtual,
  ParaQuemAtual,
  ResultadosAtual,
} from "@/features/atual-site/secoes-meio"
import { CapaAtual, IdentificacaoAtual, PilaresAtual } from "@/features/atual-site/secoes-topo"
import { useTitulo } from "@/hooks/use-titulo"

const SECOES_DO_SITE: ComponentType[] = [
  CapaAtual,
  IdentificacaoAtual,
  PilaresAtual,
  ParaQuemAtual,
  NaoEhParaAtual,
  ComoFuncionaAtual,
  ResultadosAtual,
  DepoimentosAtual,
  OfertaAtual,
  DuvidaAtual,
  SobreAtual,
  RodapeAtual,
]

const SECOES_DA_BLACK: ComponentType[] = [
  CapaBlackAtual,
  ParaVoceBlackAtual,
  PromessaBlackAtual,
  PilaresBlackAtual,
  EspecialistasBlackAtual,
  BonusExclusivosBlackAtual,
  DepoimentosBlackAtual,
  OfertaBlackAtual,
  SobreBlackAtual,
  ContatoBlackAtual,
  FaqBlackAtual,
  RodapeBlackAtual,
]

export function SiteAtual() {
  useTitulo(SITE_ATUAL.meta.titulo, SITE_ATUAL.meta.descricao)
  return (
    <>
      <BarraDeDemonstracao pagina="site" />
      <div className="min-h-screen bg-legado-marinho font-inter text-base leading-normal">
        {SECOES_DO_SITE.map((Secao, i) => (
          <Secao key={i} />
        ))}
      </div>
    </>
  )
}

export function BlackAtual() {
  useTitulo(BLACK_ATUAL.titulo)
  return (
    <>
      <BarraDeDemonstracao pagina="black" />
      <div className="bg-preto font-sans">
        {SECOES_DA_BLACK.map((Secao, i) => (
          <Secao key={i} />
        ))}
      </div>
    </>
  )
}
