# Design system

## Identidade proposta: editorial

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

Do shadcn/ui usamos `Accordion` (FAQ), `Input`, `Checkbox` e `Label` (formulário). **Não edite `src/components/ui/`**: componha em `shared/` ou passe `className`. Novos componentes: `npx shadcn@latest add <nome>`.

### Utilitários (`@utility` em `index.css`)

`contem` (contêiner editorial), `contem-legado` (contêiner do site atual), `titulo`, `losango`, `vinheta` (foto P&B com máscara em elipse) e `base-segura` (barra fixa respeitando a área segura do iPhone).

## Paleta do site atual (`legado-*`)

Usada **só nas réplicas**: azul-marinho `#0D1B2A`, azul `#1E3A5F`, dourado `#D4AF37`, areia `#C9A86C`, creme `#F8F7F4` e afins. Fonte Inter. Não use esses tokens em código novo.

## Responsividade

- Mobile primeiro. Grades usam `minmax(0, 1fr)` e `min-w-0` para nunca estourar a largura.
- Pontos de quebra do Tailwind: `sm` 640, `md` 768, `lg` 1024.
- Conferir sempre em 375, 768 e 1280 px, sem rolagem horizontal.
- Paddings laterais respeitam `env(safe-area-inset-*)`.
- `prefers-reduced-motion` desliga animações e rolagem suave.
