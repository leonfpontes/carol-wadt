# Desenvolvimento

## Requisitos

Node 20 ou mais novo (testado com Node 24) e npm.

## Comandos

```bash
npm install
npm run dev             # http://localhost:5173
npm test                # vitest: domínio e conteúdo
npm run revisar:termos  # só o teste de vocabulário
npm run lint            # oxlint
npm run build           # tsc + vite build → dist/
npm run verificar       # lint + testes + build (rode antes de concluir)
```

## Testes

- `src/domain/dominio.test.ts`: dinheiro, parcelamento, oferta, WhatsApp, leads, iscas.
- `src/content/conteudo.test.ts`: botão "Garantir minha vaga", termos bloqueados, prosperidade financeira como pilar, preços coerentes, isca existente.

Teste regra de negócio no domínio, não em componente.

## Verificação no navegador

Para qualquer mudança visual:

1. `npm run dev` e abra a página mudada.
2. Confira em **375, 768 e 1280 px**. `document.documentElement.scrollWidth` deve ser igual à largura da janela (sem rolagem lateral).
3. Nas propostas, confira com e sem notas.
4. No formulário, teste: vazio (erro de nome), sem aceite (erro de consentimento) e completo (agradecimento).
5. Depois de testar, limpe a chave `carolwadt:leads-demo` do `localStorage`.

## Convenções

- **Português** em nomes de domínio, componentes, arquivos de conteúdo e documentação. Termos técnicos consagrados ficam em inglês (`hook`, `props`, `checkout`).
- **Comentários explicam o porquê**, não o quê. Toda classe de domínio e todo arquivo de seção tem um comentário de topo.
- **Nada de hex solto** em componentes: use ou crie um token em `index.css`.
- **Nada de rota escrita à mão**: use `ROTAS`.
- **Nada de conta de dinheiro em componente**: use `Preco`, `CondicaoDePagamento` e `Oferta`.
- Um componente por responsabilidade; arquivos de seções agrupam seções da mesma parte da página.
- Commits pequenos, em português, no imperativo ("Acrescenta isca da playlist").

## Onde colocar cada coisa

| Mudança | Lugar |
|---|---|
| Texto, preço, link | `src/content/` |
| Regra de negócio | `src/domain/` (com teste) |
| Seção nova da proposta do site | `src/features/proposta-site/` + item em `SECOES` + campo em `proposta/tipos-site.ts` |
| Seção nova da proposta da Black | `src/features/proposta/` + item em `SECOES` + campo em `proposta/tipos.ts` |
| Peça visual reutilizável | `src/components/shared/` |
| Cor, fonte, utilitário | `src/index.css` |
| Página nova | componente + rota em `app/rotas.ts` e `app/App.tsx` |
| Infraestrutura (e-mail, pagamento) | nova classe que implementa a interface do domínio + `app/servicos.ts` |
