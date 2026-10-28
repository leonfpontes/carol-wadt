# Design system

O projeto tem **duas identidades**, uma por produto:

| Produto | Identidade | Onde |
|---|---|---|
| Site oficial (réplica e proposta) | Azul-marinho, azul, creme e dourado, turquesa nos detalhes; Playfair + Inter | tokens `legado-*`, `features/proposta-site/base.tsx` |
| Página Black (réplica e proposta) | Editorial: preto, branco e um acento dourado; Playfair + Manrope | tokens `preto`, `ouro`…, `components/shared/editorial.tsx` |

Nunca leve o visual da Black para o site oficial, nem o contrário.

## Identidade do site oficial

### Cores (`legado-*` em `src/index.css`)

Fundos que alternam escuro e claro: `legado-marinho` (#0D1B2A) e `legado-azul` (#1E3A5F) nos escuros; `legado-creme` (#F8F7F4), `legado-marfim` (#FEFDFB) e `legado-gelo` (#F5F5F2) nos claros. Acentos: `legado-ouro` (#D4AF37), `legado-areia` (#C9A86C), `legado-ouro-escuro`. Botões em gradiente: dourado sobre escuro, azul (`legado-azul` → `legado-azul-medio`) sobre claro.

### Tipografia

- **Todos os títulos de seção:** Playfair Display, peso normal, **sem itálico**. Destaque só por cor (dourado), nunca trocando fonte ou estilo no meio do título.
- Texto, botões e rótulos: Inter. Rótulos em caixa alta com espaçamento largo e filetes dourados (`RotuloDoSite`).

### Componentes (`features/proposta-site/base.tsx`)

| Componente | Faz |
|---|---|
| `SecaoDoSite` | Fundo (`marinho`, `azul`, `creme`, `marfim`, `gelo`), contêiner, respiro e o filete dourado no topo |
| `RotuloDoSite`, `TituloDoSite`, `ApoioDoSite` | Hierarquia de texto; cores escolhidas pelo fundo |
| `BotaoDoSite` | Botão-link com os gradientes do site |
| `IconeEmCirculo` | Ícone dourado num círculo translúcido |

Padrões visuais: fotos e pinturas sempre emolduradas (filete dourado, passe-partout creme ou anel), cartões brancos com sombra suave sobre fundos claros, cartões translúcidos (`bg-white/5`) sobre escuros.

### Rolagem em apresentação

O site oficial rola como uma apresentação: cada seção (ou par de seções, como trilha e especialistas) é um **capítulo** que gruda na tela quando o fim dele chega ao rodapé, e o capítulo seguinte sobe por cima com cantos arredondados e sombra. O capítulo coberto recua (encolhe 6%, sobe um pouco e escurece com o marinho), o que dá profundidade. Em telas largas, um sumário à direita mostra o número do capítulo e leva a qualquer um deles.

| Peça | Onde |
|---|---|
| Lista de capítulos e rótulos do sumário | `CAPITULOS` em `features/proposta-site/PaginaDoSiteProposto.tsx` |
| `Capitulo`, `SumarioDosCapitulos` | `features/proposta-site/apresentacao.tsx` |
| Medidas e progresso (`--topo`, `--origem`, `--cobertura`) e âncoras | `features/proposta-site/use-apresentacao.ts` |
| O efeito em si | `.apresentacao` em `src/index.css` |

Só transform e opacidade mudam durante a rolagem. Com **"reduzir movimento"** ligado no sistema, nada gruda nem encolhe e a página rola reta. O conteúdo e a semântica (títulos, ordem de leitura) não mudam.

## Identidade da Black: editorial

Preto e branco, como páginas de revista, com **um único acento dourado**. As seções alternam fundo escuro e claro para dar ritmo à leitura.

### Cores (tokens em `src/index.css`)

| Token | Hex | Uso |
|---|---|---|
| `preto` | #0B0B0B | Fundo principal |
| `tinta` | #141414 | Fundo escuro alternativo (Formato) |
| `carvao` | #151515 | Cartões sobre fundo escuro |
| `off` | #F4F3F0 | Fundo claro quente |
| `ouro` | #C9A24B | Acento, botões, marcadores |
| `ouro-suave` | #E9D8A6 | Destaques sobre escuro |
| `ouro-escuro` | #8C6A1E | Destaques sobre claro (contraste AA) |
| `linha-escura` / `linha-clara` | #2A2926 / #DEDCD7 | Bordas |
| `texto-claro` | #3A3936 | Texto secundário sobre claro |
| `nota`, `nota-borda`, `nota-tinta` | | Notas de melhoria |

### Tipografia

- **Playfair Display** (`font-serif`, utilitário `titulo`): títulos, peso 400, `text-wrap: balance`.
- **Manrope** (`font-sans`): texto, botões e rótulos. Corpo em 17 px, entrelinha 1,65.
- Rótulos (`Rotulo`): 12 px, extra-negrito, caixa alta, espaçamento 0,24 em, com losango dourado.

### Componentes (`src/components/shared/`)

| Componente | Faz |
|---|---|
| `Secao` | Fundo (`escuro`, `tinta`, `claro`, `off`), contêiner de 1040 px e respiro. Informa o tom aos filhos |
| `Rotulo`, `Titulo`, `Lide`, `Destaque` | Hierarquia de texto |
| `BotaoCta` | Botão-link principal; escolhe o contraste pelo tom da seção |
| `LinkSutil` | Link secundário sublinhado em dourado |
| `Rico`, `AConfirmarTag` | Texto com trechos a confirmar |
| `NotaDeMelhoria`, `AlternadorDeNotas` | Notas amarelas da proposta |
| `BarraDeDemonstracao` | Faixa da demonstração (alternar Atual/Proposta) |
| `Surgir` | Animação de entrada ao rolar (réplica do site atual) |
| `estilos.ts` → `estiloDoBotao` | Variantes `cva` do botão, para `<a>`, `<button>` e `<Link>` |

Do shadcn/ui usamos `Accordion` (FAQ), `Carousel` (depoimentos do site), `Input`, `Checkbox` e `Label` (formulário). **Não edite `src/components/ui/`**: componha em `shared/` ou passe `className`. Novos componentes: `npx shadcn@latest add <nome>`.

### Utilitários (`@utility` em `index.css`)

`contem` (contêiner editorial), `contem-legado` (contêiner do site atual), `titulo`, `losango`, `vinheta` (foto P&B com máscara em elipse) e `base-segura` (barra fixa respeitando a área segura do iPhone).

## Paleta do site atual (`legado-*`)

Usada na réplica e na proposta do site oficial. Não use esses tokens nas páginas da Black.

## Responsividade

- Mobile primeiro. Grades usam `minmax(0, 1fr)` e `min-w-0` para nunca estourar a largura.
- Pontos de quebra do Tailwind: `sm` 640, `md` 768, `lg` 1024.
- Conferir sempre em 375, 768 e 1280 px, sem rolagem horizontal.
- Paddings laterais respeitam `env(safe-area-inset-*)`.
- `prefers-reduced-motion` desliga animações e rolagem suave.
