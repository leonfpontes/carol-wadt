# Conteúdo

Todo texto que aparece nas páginas mora em `src/content/`, tipado. Componentes não têm texto de marketing escrito dentro deles.

| Arquivo | O quê |
|---|---|
| `marca.ts` | Nome, cidade, WhatsApp, links de checkout da Eduzz, mensagens prontas e caminhos das imagens |
| `atual/site.ts` | Réplica fiel de carolinawadt.com (capturado em 24/10/2026) |
| `atual/black.ts` | Réplica fiel da página Black Outubro |
| `proposta/tipos-site.ts` | Formato do conteúdo da proposta do site oficial |
| `proposta/site.ts` | Proposta do site oficial (preço cheio, identidade do site) |
| `proposta/tipos.ts` | Formato do conteúdo da proposta da Black |
| `proposta/comum.ts` | Seções da proposta da Black e o botão principal (`BOTAO_PRINCIPAL`) |
| `proposta/black.ts` | Proposta da Black (promoção de Black Friday) |
| `iscas.ts` | Catálogo de iscas digitais |
| `legal/documentos.ts` | Privacidade e Termos (atuais e rascunhos propostos) |

## Notas de melhoria

Toda seção da proposta aceita `nota`: o quadro amarelo que explica a mudança à Carol. As notas:

- aparecem só nas páginas de proposta e podem ser ocultadas pelo botão "Ocultar notas";
- podem citar os termos antigos (por isso o teste de vocabulário as ignora);
- devem sair, junto com a barra de demonstração e a faixa dourada, quando o site for publicado.

## Trechos "a confirmar"

Use `{ aConfirmar: "data a confirmar" }` dentro de um `TextoRico`. Ele aparece com borda tracejada dourada, para a Carol ver o que depende dela.

## Preços

Nunca escreva totais à mão. Crie a `CondicaoDePagamento` e deixe o código calcular:

```ts
const condicao = new CondicaoDePagamento(Preco.reais(1247), 12, Preco.reais(128.97))
condicao.totalParcelado.formatar() // "R$1.547,64"
```

A seção de oferta só mostra o preço riscado ("De R$1.500") quando ele é maior que o à vista **e** que o total parcelado.

A página Black é uma **promoção de Black Friday**: preço menor de propósito, link de checkout próprio (`CHECKOUT.black`) e prazo. Não é preço divergente do site.

## Regras de texto

0. **"De Guerreira a Mulher Inteira" é o slogan da Carol.** Fica na capa, no cartão de preço e no rodapé da proposta do site.
1. **Prosperidade financeira é um dos três pilares.** Não remover nem esconder. Nunca prometer valores.
2. **Botão principal: "Garantir minha vaga"** (na barra do celular, "Garantir vaga"). "Quero entrar na Mulher Inteira" e "Quero entrar" ficam proibidos nas propostas por terem duplo sentido sexual ao lado da foto da Carol.
3. **Os demais termos da Carol ficam como ela escreveu** ("gostosos", "entrega", "se permitir receber", "Hotseat"...). Decisão do Leonardo: fazem parte do apelo sentimental. Estão listados em `RevisorDeTermos` com severidade `atencao`, só para consulta.
4. **Voz da Carol:** frases curtas, segunda pessoa ("você"), acolhedora, sem linguagem de guerra ou bronca.
5. **Depoimentos** só com autorização da aluna e com nome abreviado (Lorena T.). Não invente notas ou médias de avaliação.
6. **Site e Black são produtos distintos.** Texto de campanha (prazo, "Black Outubro", preço promocional) nunca vai para o site oficial.

O teste `npm run revisar:termos` falha se um termo de severidade `bloqueia` aparecer no texto visível das propostas.

## Fotos

Ficam em `public/imagens/original/` (site atual e proposta do site), `public/imagens/proposta/` (fotos da Carol e das especialistas) e `public/imagens/banco/` (fotos livres da Unsplash, com créditos em `CREDITOS.md`; só fotos gratuitas, nunca Unsplash+). Referencie sempre por `IMAGENS` em `marca.ts`. Antes de trocar uma foto, reduza para no máximo ~1200 px no lado maior.
