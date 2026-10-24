# Arquitetura

Site estático (SPA) em React 19 + Vite, estilizado com Tailwind CSS 4 e componentes shadcn/ui sobre Base UI. Não há servidor nem banco: o conteúdo é código tipado e a captura de leads é plugável.

## Camadas

```
┌─────────────────────────────────────────────────────────┐
│ app/          rotas.ts · servicos.ts · App.tsx          │  composição
├─────────────────────────────────────────────────────────┤
│ pages/ e features/   páginas e seções (React)           │  interface
│ components/shared/   peças reutilizáveis                │
│ components/ui/       shadcn (não editar)                │
├─────────────────────────────────────────────────────────┤
│ content/      textos, imagens e ofertas tipados         │  conteúdo
├─────────────────────────────────────────────────────────┤
│ domain/       regras de negócio puras (TypeScript)      │  domínio
└─────────────────────────────────────────────────────────┘
```

As dependências apontam para baixo. `domain/` não importa React nem nada de cima; `content/` usa o domínio para montar ofertas e links; a interface só desenha.

## Domínio (`src/domain/`)

| Classe | Responsabilidade |
|---|---|
| `Preco` | Value Object de dinheiro em centavos; soma, multiplica e formata em pt-BR |
| `CondicaoDePagamento` | À vista + parcelas; calcula total parcelado e juros; diz se um preço "de" é coerente |
| `Oferta` | Itens inclusos e bônus, condição e checkout; soma dos bônus; decide se mostra o "de" |
| `Checkout` (interface) · `CheckoutEduzz` · `CheckoutPorLink` | Destino do botão de compra; trocar de plataforma é criar uma classe |
| `ContatoWhatsApp` | Links `wa.me` e da API com mensagem pronta |
| `Lead` · `ErroDeValidacao` | Pessoa que pediu material; valida nome, e-mail e consentimento |
| `RepositorioDeLeads` (interface) · `RepositorioDeLeadsNoNavegador` · `RepositorioDeLeadsHttp` | Onde o lead é guardado |
| `CapturaDeLeads` | Caso de uso: valida, carimba o consentimento e salva |
| `IscaDigital` · `CatalogoDeIscas` | Materiais gratuitos do Instagram e busca por slug |
| `RevisorDeTermos` | Encontra termos de duplo sentido no texto |

## Como os princípios aparecem

- **Responsabilidade única.** Cada seção é um componente; cada regra é uma classe. `PaginaProposta` só decide a ordem.
- **Aberto/Fechado.** `SECOES` (em `features/proposta/PaginaProposta.tsx` e `features/proposta-site/PaginaDoSiteProposto.tsx`) e `SECOES_DO_SITE`/`SECOES_DA_BLACK` (em `pages/paginas-atuais.tsx`) são listas: acrescentar uma seção não muda as existentes. Uma nova plataforma de pagamento é uma nova classe que implementa `Checkout`.
- **Substituição de Liskov.** Qualquer `RepositorioDeLeads` serve ao `CapturaDeLeads`; os testes usam um repositório em memória.
- **Segregação de interfaces.** Cada seção recebe só a fatia do conteúdo que usa (`Fatia<"oferta">`), não a página inteira.
- **Inversão de dependência.** `app/servicos.ts` é a raiz de composição: escolhe o repositório (navegador ou HTTP) a partir de `VITE_LEADS_ENDPOINT`. Nenhum componente instancia infraestrutura.
- **Encapsulamento.** Construtores validam (`Preco` negativo, slug inválido, telefone inválido) e os objetos são imutáveis (`readonly`).

## Fluxo de uma página proposta

```
content/proposta/site.ts ──► PaginaProposta ──► SECOES[i](conteudo) ──► <OfertaProposta conteudo={c.oferta}>
        │                                                                     │
        └── new Oferta({ condicao: new CondicaoDePagamento(...) })            └── oferta.exibePrecoDe, condicao.totalParcelado
```

## Fluxo de um lead

```
FormularioDeMaterial ─► useCapturaDeLeads ─► servicos.capturaDeLeads.registrar()
                                                   │ Lead.criar() valida
                                                   ▼
                                     RepositorioDeLeads.salvar()
                         (navegador na demo · HTTP → função serverless → ferramenta de e-mail)
```

## Rotas

Definidas só em `src/app/rotas.ts` (`ROTAS`). Nenhum componente escreve caminhos à mão.

## Réplicas x propostas

São quatro páginas, duas por produto. Site oficial e Black são **produtos distintos**, cada um com a sua identidade.

| Página | Conteúdo | Seções | Identidade |
|---|---|---|---|
| Site atual (réplica) | `content/atual/site.ts` | `features/atual-site/` | `legado-*`, Inter |
| Site proposto | `content/proposta/site.ts` (tipo `ConteudoDoSiteProposto`, em `tipos-site.ts`) | `features/proposta-site/` | `legado-*` (a mesma do site), Playfair + Inter |
| Black atual (réplica) | `content/atual/black.ts` | `features/atual-black/` | editorial, Manrope |
| Black proposta | `content/proposta/black.ts` + `comum.ts` (tipo `ConteudoDaProposta`) | `features/proposta/` | editorial (preto e dourado) |

- **Réplicas** copiam o que está publicado, inclusive o que a proposta corrige. Não "melhore" uma réplica: ela existe para a comparação ser honesta.
- **Proposta do site** (`features/proposta-site/`): `base.tsx` traz as peças na identidade do site (`SecaoDoSite` com fundos `marinho`/`azul`/`creme`/`marfim`/`gelo`, `TituloDoSite`, `RotuloDoSite`, `BotaoDoSite`, `IconeEmCirculo`); `secoes-topo`, `secoes-meio` e `secoes-fim` têm as seções; `PaginaDoSiteProposto` define a ordem e a alternância de fundos.
- **Proposta da Black** (`features/proposta/`): identidade editorial; `PaginaProposta` define a ordem.
- O que é comum às duas propostas fica no domínio e em `components/shared/` (notas de melhoria, formulário de material, barra de demonstração), não no visual.
