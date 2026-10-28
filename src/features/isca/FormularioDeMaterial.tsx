import { useId, useState, type FormEvent } from "react"
import { Link } from "react-router"
import { ROTAS } from "@/app/rotas"
import { estiloDoBotao as classeDoBotao } from "@/components/shared/estilos"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TEXTO_DE_CONSENTIMENTO } from "@/domain/leads/CapturaDeLeads"
import { useCapturaDeLeads } from "@/features/isca/use-captura-de-leads"
import { cn } from "@/lib/utils"

interface FormularioDeMaterialProps {
  /** Slug da isca; vira a origem registrada no lead. */
  isca: string
  textoDoBotao: string
  /** Link do material, mostrado depois do envio quando já está disponível. */
  urlDeEntrega?: string
  /** Classes do botão de envio, para seguir a identidade da página que usa o formulário. */
  classeDoBotao?: string
}

/**
 * Formulário de nome, e-mail e consentimento (LGPD/RGPD).
 * Usado no fim da página proposta e nas páginas de isca do Instagram.
 */
export function FormularioDeMaterial({ isca, textoDoBotao, urlDeEntrega, classeDoBotao: classeExtra }: FormularioDeMaterialProps) {
  const id = useId()
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [aceitou, setAceitou] = useState(false)
  const { estado, enviar, emDemonstracao } = useCapturaDeLeads(isca)

  function aoEnviar(evento: FormEvent) {
    evento.preventDefault()
    void enviar({ nome, email, aceitou })
  }

  if (estado.fase === "enviado") {
    return (
      <div className="grid gap-3 rounded border border-linha-clara bg-white p-6 text-preto" role="status">
        <p className="titulo m-0 text-2xl">Obrigada, {estado.lead.primeiroNome}.</p>
        <p className="m-0 text-[15px] text-texto-claro">
          {emDemonstracao
            ? "Pronto. Nesta demonstração os dados ficaram só no seu navegador; na versão final, o material chega no seu e-mail em instantes."
            : "O material está a caminho do seu e-mail. Confira também a caixa de promoções."}
        </p>
        {urlDeEntrega && (
          <a href={urlDeEntrega} target="_blank" rel="noopener noreferrer" className={cn(classeDoBotao({ contraste: "sobreClaro" }), "justify-self-start")}>
            Abrir o material agora
          </a>
        )}
      </div>
    )
  }

  const erroEm = (campo: string) => estado.fase === "erro" && estado.campo === campo
  const classeDoCampo = "h-auto rounded border-linha-clara bg-white px-3.5 py-3 text-base text-preto focus-visible:border-ouro focus-visible:ring-ouro/40"

  return (
    <form onSubmit={aoEnviar} noValidate className="grid min-w-0 gap-3 text-preto">
      <Label htmlFor={`${id}-nome`} className="text-[13px] font-bold">
        Seu nome
      </Label>
      <Input
        id={`${id}-nome`}
        name="nome"
        autoComplete="given-name"
        required
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        aria-invalid={erroEm("nome") || undefined}
        className={classeDoCampo}
      />
      <Label htmlFor={`${id}-email`} className="text-[13px] font-bold">
        Seu melhor e-mail
      </Label>
      <Input
        id={`${id}-email`}
        name="email"
        type="email"
        autoComplete="email"
        inputMode="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-invalid={erroEm("email") || undefined}
        className={classeDoCampo}
      />
      <div className="flex items-start gap-2.5 text-[13px] text-texto-claro">
        <Checkbox
          id={`${id}-aceite`}
          checked={aceitou}
          onCheckedChange={(valor) => setAceitou(valor === true)}
          aria-invalid={erroEm("consentimento") || undefined}
          className="mt-0.5 border-texto-claro data-checked:border-preto data-checked:bg-preto"
        />
        <Label htmlFor={`${id}-aceite`} className="block text-[13px] leading-snug font-normal text-texto-claro">
          {TEXTO_DE_CONSENTIMENTO.replace("Política de Privacidade.", "")}
          <Link to={ROTAS.privacidade} className="underline underline-offset-2">
            Política de Privacidade
          </Link>
          .
        </Label>
      </div>
      {estado.fase === "erro" && (
        <p className="m-0 text-sm font-bold text-destructive" role="alert">
          {estado.mensagem}
        </p>
      )}
      <button type="submit" disabled={estado.fase === "enviando"} className={cn(classeDoBotao({ contraste: "sobreClaro" }), classeExtra)}>
        {estado.fase === "enviando" ? "Enviando…" : textoDoBotao}
      </button>
    </form>
  )
}
