# AGENTS.md

Instruções para agentes de IA que trabalham neste repositório (Claude Code, Codex, Cursor, Copilot…). Para Claude Code, veja também [CLAUDE.md](CLAUDE.md).

## O projeto

Site da **Mentoria Mulher Inteira**, de **Carolina Wadt** (mentora de Inteligência Sistêmica, Aveiro, Portugal). Público: mulheres bem resolvidas, com estabilidade financeira, de classe média alta, que querem viver por inteiro a vida que construíram.

O repositório tem duas versões de cada página:

- **Atual** (`/atual/site`, `/atual/black`): réplica fiel do que está publicado hoje. Serve de "antes".
- **Proposta** (`/proposta/site`, `/proposta/black`): a versão melhorada, com notas amarelas que explicam cada mudança.

O **site** é a página de vendas com preço cheio. A **Black** é a promoção de Black Friday ("Black Outubro"), com preço menor e checkout próprio. São páginas separadas de propósito.

Stack: React 19, Vite, TypeScript, Tailwind CSS 4, shadcn/ui (Base UI), React Router, Vitest, oxlint.

Leia antes de mudar algo grande: [docs/arquitetura.md](docs/arquitetura.md) · [docs/conteudo.md](docs/conteudo.md) · [docs/design-system.md](docs/design-system.md) · [docs/captura-de-leads.md](docs/captura-de-leads.md) · [docs/desenvolvimento.md](docs/desenvolvimento.md) · [docs/decisoes.md](docs/decisoes.md).

## Comandos

```bash
npm install
npm run dev             # http://localhost:5173
npm test                # testes de domínio e conteúdo
npm run revisar:termos  # vocabulário das propostas
npm run lint
npm run build
npm run verificar       # lint + testes + build: rode antes de concluir
docker compose up -d --build  # versão de produção (nginx) em http://localhost:8080
```

## Regras que não podem ser quebradas

1. **Botão principal das propostas: "Garantir minha vaga".** Nunca use "Quero entrar na Mulher Inteira" ou "Quero entrar" nas propostas (duplo sentido sexual ao lado da foto da Carol). O teste de conteúdo barra.
2. **Os demais termos da Carol ficam como ela escreveu.** Não "corrija" "gostosos", "entrega", "se permitir receber", "Hotseat" etc. (decisão registrada em docs/decisoes.md).
3. **Prosperidade financeira é um dos três pilares.** Nunca remova; nunca prometa valores.
4. **Réplicas são fiéis.** Não melhore `features/atual-*` nem `content/atual/*`. Mudança de conteúdo do site no ar deve ser copiada como está.
5. **Dinheiro só pelo domínio.** Preços com `Preco` (centavos), parcelamento com `CondicaoDePagamento`, ofertas com `Oferta`. Nunca escreva um total à mão.
6. **Rotas só de `src/app/rotas.ts`.** Não escreva `"/proposta/..."` à mão.
7. **Leads só pelo `CapturaDeLeads`.** Nada de `fetch` ou `localStorage` de lead em componente. Infraestrutura nova = classe que implementa `RepositorioDeLeads`, ligada em `app/servicos.ts`.
8. **Consentimento LGPD/RGPD.** Nenhum lead é salvo sem aceite; o texto do aceite é guardado junto.
9. **shadcn intocado.** Não edite `src/components/ui/`; componha em `src/components/shared/`. Novos: `npx shadcn@latest add <nome>`.
10. **Sem hex solto.** Cores, fontes e utilitários vivem em `src/index.css`. Tokens `legado-*` só nas réplicas.
11. **Responsivo sempre.** Toda tela funciona em 375, 768 e 1280 px sem rolagem horizontal.
12. **Nada sai daqui sem o Leonardo.** O repositório é público: não faça push, não publique e não envie nada para fora sem pedido explícito. Conversas e dados internos da Carol nunca entram no repositório.
13. **Privacidade.** Depoimentos só com nome abreviado e autorização. Não comite dados de leads, chaves de API ou `.env`.

## Onde colocar cada coisa

| Mudança | Lugar |
|---|---|
| Texto, preço, link, foto | `src/content/` (`marca.ts` para dados da marca) |
| Regra de negócio | `src/domain/` + teste em `dominio.test.ts` |
| Regra de texto | `src/content/conteudo.test.ts` (e `RevisorDeTermos`, se for vocabulário) |
| Seção nova da proposta | componente em `src/features/proposta/` + campo em `content/proposta/tipos.ts` + item em `SECOES` |
| Peça visual reutilizável | `src/components/shared/` |
| Cor, fonte, utilitário | `src/index.css` |
| Página nova | componente + `ROTAS` + `<Route>` em `app/App.tsx` |
| Isca nova do Instagram | `src/content/iscas.ts` + material em `public/materiais/` |

## Estilo de código

- **Português** nos nomes de domínio, componentes, conteúdo, documentação e commits; termos técnicos consagrados em inglês.
- **POO onde há modelo**: classes imutáveis (`readonly`) que validam no construtor (`Preco`, `Oferta`, `Lead`, `IscaDigital`). Interfaces para tudo que é infraestrutura (`Checkout`, `RepositorioDeLeads`).
- **SOLID**: uma responsabilidade por arquivo/classe; extensão por novos itens de lista (`SECOES`, `ISCAS`) ou novas classes, não por `if` espalhado; seções recebem só a fatia de conteúdo que usam.
- **Componentes de interface** são funções pequenas, sem regra de negócio.
- **Clean Code**: nomes que dizem o que a coisa é (`totalParcelado`, `exibePrecoDe`), funções curtas, nada de números mágicos (use tokens e o domínio).
- **Comentários explicam o porquê**. Todo arquivo de domínio e de seções tem comentário de topo.
- Formatação: aspas duplas, sem ponto e vírgula, 2 espaços.

## Antes de concluir

- `npm run verificar` sem erros e sem avisos novos.
- Conferir no navegador as telas mudadas em 375, 768 e 1280 px; nas propostas, com e sem notas.
- Se mudou formato de conteúdo, rotas, domínio ou componentes compartilhados, atualize `docs/`.
- Se tomou uma decisão de produto, registre em `docs/decisoes.md`.
