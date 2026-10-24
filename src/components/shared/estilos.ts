import { cva } from "class-variance-authority"

/**
 * Variantes do botão principal da identidade editorial.
 * Fica fora dos componentes para poder ser usada em `<a>`, `<button>` e `<Link>`.
 */
export const estiloDoBotao = cva(
  "inline-block rounded-full border-0 px-[30px] py-4 text-center font-sans text-[15px] font-extrabold tracking-[0.02em] no-underline transition-colors focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-ouro-suave disabled:opacity-60",
  {
    variants: {
      contraste: {
        sobreEscuro: "bg-ouro text-preto hover:bg-ouro-suave",
        sobreClaro: "bg-preto text-white hover:bg-linha-escura",
      },
      tamanho: { normal: "", compacto: "px-[18px] py-3 text-sm" },
    },
    defaultVariants: { contraste: "sobreEscuro", tamanho: "normal" },
  },
)
