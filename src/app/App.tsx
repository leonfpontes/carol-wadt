import { lazy, Suspense, useEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router"
import { ROTAS } from "@/app/rotas"
import { ATUAIS, PROPOSTOS } from "@/content/legal/documentos"
import { PaginaLegal } from "@/features/legal/PaginaLegal"
import { Vitrine } from "@/features/vitrine/Vitrine"

// Cada página pesada vira um arquivo separado: quem abre a Black não baixa o site, e vice-versa.
const SiteAtual = lazy(() => import("@/pages/paginas-atuais").then((m) => ({ default: m.SiteAtual })))
const BlackAtual = lazy(() => import("@/pages/paginas-atuais").then((m) => ({ default: m.BlackAtual })))
const PaginaDeIsca = lazy(() => import("@/features/isca/PaginaDeIsca").then((m) => ({ default: m.PaginaDeIsca })))

/** As propostas carregam o conteúdo junto da página, para ele também ficar fora do pacote inicial. */
const SiteProposto = lazy(async () => {
  const [{ PaginaDoSiteProposto }, { PROPOSTA_SITE }] = await Promise.all([
    import("@/features/proposta-site/PaginaDoSiteProposto"),
    import("@/content/proposta/site"),
  ])
  return { default: () => <PaginaDoSiteProposto conteudo={PROPOSTA_SITE} /> }
})

/** O site oficial no ar: a proposta aprovada pela Carol, sem as peças da demonstração. */
const SiteOficial = lazy(async () => {
  const [{ PaginaDoSiteProposto }, { PROPOSTA_SITE }] = await Promise.all([
    import("@/features/proposta-site/PaginaDoSiteProposto"),
    import("@/content/proposta/site"),
  ])
  return { default: () => <PaginaDoSiteProposto conteudo={PROPOSTA_SITE} publicado /> }
})

const BlackProposta = lazy(async () => {
  const [{ PaginaProposta }, { PROPOSTA_BLACK }] = await Promise.all([
    import("@/features/proposta/PaginaProposta"),
    import("@/content/proposta/black"),
  ])
  return { default: () => <PaginaProposta conteudo={PROPOSTA_BLACK} pagina="black" /> }
})

/** Volta ao topo a cada troca de página (o navegador não faz isso numa SPA). */
function RolarParaOTopo() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export function App() {
  return (
    <BrowserRouter>
      <RolarParaOTopo />
      <Suspense fallback={<div className="min-h-screen bg-legado-marinho" />}>
        <Routes>
          <Route path={ROTAS.inicio} element={<SiteOficial />} />
          <Route
            path={ROTAS.privacidade}
            element={<PaginaLegal documento={PROPOSTOS.privacidade} voltarPara={ROTAS.inicio} versao="atual" publicado />}
          />
          <Route path={ROTAS.termos} element={<PaginaLegal documento={PROPOSTOS.termos} voltarPara={ROTAS.inicio} versao="atual" publicado />} />
          <Route path={ROTAS.vitrine} element={<Vitrine />} />
          <Route path={ROTAS.atual.site} element={<SiteAtual />} />
          <Route path={ROTAS.atual.black} element={<BlackAtual />} />
          <Route path={ROTAS.proposta.site} element={<SiteProposto />} />
          <Route path={ROTAS.proposta.black} element={<BlackProposta />} />
          <Route
            path={ROTAS.atual.privacidade}
            element={<PaginaLegal documento={ATUAIS.privacidade} voltarPara={ROTAS.atual.site} versao="atual" />}
          />
          <Route
            path={ROTAS.atual.termos}
            element={<PaginaLegal documento={ATUAIS.termos} voltarPara={ROTAS.atual.site} versao="atual" />}
          />
          <Route
            path={ROTAS.proposta.privacidade}
            element={<PaginaLegal documento={PROPOSTOS.privacidade} voltarPara={ROTAS.proposta.site} versao="proposta" />}
          />
          <Route
            path={ROTAS.proposta.termos}
            element={<PaginaLegal documento={PROPOSTOS.termos} voltarPara={ROTAS.proposta.site} versao="proposta" />}
          />
          <Route path={ROTAS.padraoIsca} element={<PaginaDeIsca />} />
          <Route path="*" element={<Navigate to={ROTAS.inicio} replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
