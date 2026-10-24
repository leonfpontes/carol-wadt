import { useEffect } from "react"
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router"
import { ROTAS } from "@/app/rotas"
import { ATUAIS, PROPOSTOS } from "@/content/legal/documentos"
import { PROPOSTA_BLACK } from "@/content/proposta/black"
import { PROPOSTA_SITE } from "@/content/proposta/site"
import { PaginaDeIsca } from "@/features/isca/PaginaDeIsca"
import { PaginaLegal } from "@/features/legal/PaginaLegal"
import { PaginaProposta } from "@/features/proposta/PaginaProposta"
import { Vitrine } from "@/features/vitrine/Vitrine"
import { BlackAtual, SiteAtual } from "@/pages/paginas-atuais"

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
      <Routes>
        <Route path={ROTAS.vitrine} element={<Vitrine />} />
        <Route path={ROTAS.atual.site} element={<SiteAtual />} />
        <Route path={ROTAS.atual.black} element={<BlackAtual />} />
        <Route path={ROTAS.proposta.site} element={<PaginaProposta conteudo={PROPOSTA_SITE} pagina="site" />} />
        <Route path={ROTAS.proposta.black} element={<PaginaProposta conteudo={PROPOSTA_BLACK} pagina="black" />} />
        <Route
          path={ROTAS.atual.privacidade}
          element={<PaginaLegal documento={ATUAIS.privacidade} voltarPara={ROTAS.atual.site} versao="atual" />}
        />
        <Route path={ROTAS.atual.termos} element={<PaginaLegal documento={ATUAIS.termos} voltarPara={ROTAS.atual.site} versao="atual" />} />
        <Route
          path={ROTAS.proposta.privacidade}
          element={<PaginaLegal documento={PROPOSTOS.privacidade} voltarPara={ROTAS.proposta.site} versao="proposta" />}
        />
        <Route
          path={ROTAS.proposta.termos}
          element={<PaginaLegal documento={PROPOSTOS.termos} voltarPara={ROTAS.proposta.site} versao="proposta" />}
        />
        <Route path={ROTAS.padraoIsca} element={<PaginaDeIsca />} />
        <Route path="*" element={<Navigate to={ROTAS.vitrine} replace />} />
      </Routes>
    </BrowserRouter>
  )
}
