# Decisões

Registro curto das decisões que mudam o que o código faz. A mais recente fica em cima.

## 2026-10-24 · Proposta do site oficial na identidade do site

O site oficial e a Black são produtos distintos. A proposta do site **não** usa o visual da Black: mantém cores (azul-marinho, azul, creme, dourado, turquesa), fontes (Playfair nos títulos, Inter no texto), as pinturas dos pilares e dos resultados e os textos da Carol. Mudanças pedidas pelo Leonardo, seção por seção:

- Capa com o produto em letras grandes, foto da Carol e benefícios da mentoria no lugar de "Compra Segura / Satisfação Garantida / Privacidade Protegida" (que descem para junto do preço).
- Dores com fotos de banco (Unsplash, créditos em `public/imagens/banco/CREDITOS.md`).
- "Em 2 meses você vai" logo depois das dores; fundos alternando escuro e claro em toda a página.
- Pilares e resultados emoldurados; "para quem é" e "não é para quem" com foto e ícones próprios.
- "Como funciona" como trilha; depoimentos em carrossel com estrelas; inscrição com benefícios ao lado do preço; rodapé completo.
- "Quem é Carolina Wadt" mantida (limpa e premium).
- **Regra tipográfica:** todos os títulos de seção na mesma fonte e no mesmo estilo (Playfair, sem itálico). Destaque só por cor.
- Não inventar avaliação numérica ("5,0"): as estrelas são decorativas e o texto diz que são palavras de alunas.

## 2026-10-24 · Sai o "Guerreira": "Mentoria da Mulher Inteira"

Num primeiro momento mantivemos "De Guerreira a Mulher Inteira" como slogan. Depois, seguindo um áudio da Carol, o Leonardo decidiu tirar o "Guerreira": o nome passa a ser **Mentoria da Mulher Inteira** na capa, no cartão de preço e no rodapé da proposta do site. A réplica do site atual mantém o texto original. Um teste garante que "Guerreira" não volta às propostas. Estrutura, cartões e metodologia ficam como estão até a reunião com a Carol.

## 2026-10-24 · Só o botão muda de vocabulário

Varremos os textos atrás de termos com possível duplo sentido. **Decisão do Leonardo:** só o botão "Quero entrar na Mulher Inteira" muda, para "Garantir minha vaga". Os demais termos ("relacionamentos mais gostosos", "potência de entrega", "se permitir receber", "Hotseat", "encontro individual") fazem parte do apelo sentimental e, no contexto, estão bem colocados.

Consequência: `RevisorDeTermos` tem severidade `bloqueia` só para o botão; o resto é `atencao` (consulta). O teste de conteúdo garante o botão.

## 2026-10-24 · Site e Black são páginas separadas

A Black é uma promoção de Black Friday ("Black Outubro"), com preço menor (R$1.187 à vista) e checkout próprio. O site tem o preço cheio (R$1.247). Cada página tem a sua proposta, com a sua identidade (veja a decisão acima).

## 2026-10-24 · Prosperidade financeira continua como pilar

"Eu e o mundo · Prosperidade financeira e realização" é um dos três pilares. A proposta reforça o tema sem prometer valores (FAQ "Vou ter resultado financeiro?").

## 2026-10-24 · Réplica fiel antes da proposta

O projeto replica o site e a Black como estão no ar, inclusive o que a proposta corrige, para a comparação ser honesta. As réplicas usam a paleta `legado-*` e não devem ser "melhoradas".

## 2026-10-24 · Stack

React 19 + Vite + TypeScript, Tailwind CSS 4, shadcn/ui (Base UI), React Router, Vitest e oxlint. É a mesma família de tecnologia do site atual (Lovable), o que facilita a migração.
