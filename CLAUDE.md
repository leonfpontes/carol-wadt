# CLAUDE.md

@AGENTS.md

## Notas específicas para o Claude Code

- **Responda em português do Brasil.** O dono do projeto (Leonardo) e a cliente (Carol) são brasileiros; interface, documentação e commits também em português.
- **Comece pela documentação.** Para qualquer mudança além de um ajuste pontual, leia `docs/arquitetura.md` e o documento da área (`conteudo`, `design-system`, `captura-de-leads`).
- **Mudança de texto** quase sempre é só `src/content/`. Rode `npm run revisar:termos` depois.
- **Mudança de preço** é sempre via `CondicaoDePagamento`; confira que o total parcelado e o "de" fazem sentido (`npm test`).
- **Verificação visual.** Suba `npm run dev` e confira as telas mudadas no navegador do app, em 375, 768 e 1280 px, sem rolagem horizontal. Nas propostas, teste com e sem notas.
- **Limpe os dados de teste.** Depois de testar o formulário, apague a chave `carolwadt:leads-demo` do `localStorage`.
- **Réplicas são intocáveis** salvo para copiar o que mudou no site publicado.
- **Site oficial ≠ Black.** Ao mexer na proposta do site, use só `features/proposta-site/` e os tokens `legado-*`; nunca copie o visual da Black. Mantenha o slogan "De Guerreira a Mulher Inteira" e os títulos todos em Playfair sem itálico.
- **Commits.** Pequenos e descritivos, em português. O repositório é `leonfpontes/carol-wadt` (público). **Não faça push nem publique nada** sem o Leonardo pedir explicitamente.
- **Repositório público.** Cópias das páginas originais estão em `referencias/`. Conversas, áudios e dados internos da Carol nunca entram no repositório.
