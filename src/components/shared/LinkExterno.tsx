import type { AnchorHTMLAttributes } from "react"

/** Link que abre em nova aba com `rel` seguro (evita que a página aberta controle esta). */
export function LinkExterno(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}
