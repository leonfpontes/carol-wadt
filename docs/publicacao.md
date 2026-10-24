# Publicação

O código está no GitHub (público) para integrar com a Vercel. **O site da Carol não foi trocado:** apontar o domínio só com o aval do Leonardo e da Carol.

## Hoje

carolinawadt.com é uma SPA com o mesmo tipo de stack deste projeto. A página Black foi publicada fora do site. Os produtos e o checkout ficam na Eduzz.

## Rodar com Docker

```bash
docker compose up -d --build   # http://localhost:8080
docker compose down
```

O `Dockerfile` gera `dist/` com Node e serve com nginx (`docker/nginx.conf`), devolvendo `index.html` para as rotas do React Router.

## Vercel

Importe o repositório na Vercel: o preset Vite já usa `npm run build` e a pasta `dist`. O `vercel.json` faz as rotas da SPA caírem no `index.html`. Para os leads, crie a função `api/leads.ts` e defina `VITE_LEADS_ENDPOINT` (veja captura-de-leads.md).

## Antes de publicar

1. A Carol valida textos, fusão dos pilares, depoimentos (com autorização das alunas) e os campos "a confirmar".
2. Tirar da build final a `BarraDeDemonstracao`, a faixa dourada "Proposta de melhoria" e as notas (ou publicar só as rotas finais).
3. Decidir as rotas finais: `/` para o site e `/black` para a promoção, com `/isca/:slug` para as iscas.
4. Ligar a captura de leads a uma ferramenta de e-mail (veja [captura-de-leads.md](captura-de-leads.md)).
5. Revisão jurídica dos Termos e da Privacidade propostos.
6. Trocar o PDF de exemplo da isca pelo material real.

## Opções de hospedagem

| Opção | Prós | Contras |
|---|---|---|
| Vercel ou Netlify (recomendado) | Grátis para este volume, HTTPS, deploy a cada commit, funções serverless para os leads | Precisa apontar o DNS |
| Hospedagem compartilhada (Apache) | Sem custo novo se já existir | Subir `dist/` à mão; configurar fallback de SPA para as rotas |

Para SPA em hospedagem estática, todas as rotas devem responder com `index.html` (na Vercel, `vercel.json` com `rewrites`; no Apache, `.htaccess` com `FallbackResource /index.html`).

## Checklist de publicação

- [ ] `npm run verificar` sem erros
- [ ] Conferência em 375, 768 e 1280 px
- [ ] Links de checkout da Eduzz testados (site e Black)
- [ ] Formulário enviando para a ferramenta de e-mail
- [ ] Google Analytics (`G-8C53G1YXJW`, o mesmo do site atual) incluído, se a Carol quiser manter
