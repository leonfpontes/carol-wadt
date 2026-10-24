# Decisões

Registro curto das decisões que mudam o que o código faz. A mais recente fica em cima.

## 2026-10-24 · Só o botão muda de vocabulário

Varremos os textos atrás de termos com possível duplo sentido. **Decisão do Leonardo:** só o botão "Quero entrar na Mulher Inteira" muda, para "Garantir minha vaga". Os demais termos ("relacionamentos mais gostosos", "potência de entrega", "se permitir receber", "Hotseat", "encontro individual") fazem parte do apelo sentimental e, no contexto, estão bem colocados.

Consequência: `RevisorDeTermos` tem severidade `bloqueia` só para o botão; o resto é `atencao` (consulta). O teste de conteúdo garante o botão.

## 2026-10-24 · Site e Black são páginas separadas

A Black é uma promoção de Black Friday ("Black Outubro"), com preço menor (R$1.187 à vista) e checkout próprio. O site tem o preço cheio (R$1.247). A proposta unifica a identidade e as seções, mas mantém as duas páginas e os dois preços.

## 2026-10-24 · Prosperidade financeira continua como pilar

"Eu e o mundo · Prosperidade financeira e realização" é um dos três pilares. A proposta reforça o tema sem prometer valores (FAQ "Vou ter resultado financeiro?").

## 2026-10-24 · Réplica fiel antes da proposta

O projeto replica o site e a Black como estão no ar, inclusive o que a proposta corrige, para a comparação ser honesta. As réplicas usam a paleta `legado-*` e não devem ser "melhoradas".

## 2026-10-24 · Stack

React 19 + Vite + TypeScript, Tailwind CSS 4, shadcn/ui (Base UI), React Router, Vitest e oxlint. É a mesma família de tecnologia do site atual (Lovable), o que facilita a migração.
