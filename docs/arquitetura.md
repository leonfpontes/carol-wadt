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
- **Aberto/Fechado.** `SECOES` (em `features/proposta/PaginaProposta.tsx`) e `SECOES_DO_SITE`/`SECOES_DA_BLACK` (em `pages/paginas-atuais.tsx`) são listas: acrescentar uma seção não muda as existentes. Uma nova plataforma de pagamento é uma nova classe que implementa `Checkout`.
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

- **Réplicas** (`features/atual-site`, `features/atual-black`, `content/atual`) copiam o site publicado, inclusive textos e escolhas que a proposta corrige. Usam os tokens `legado-*`. Não "melhore" uma réplica: ela existe para a comparação ser honesta.
- **Propostas** (`features/proposta`, `content/proposta`) usam a identidade editorial e compartilham seções entre site e Black. A Black parte do conteúdo do site e sobrescreve só selo, oferta e barra fixa.
