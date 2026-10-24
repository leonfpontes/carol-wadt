# Captura de leads e iscas do Instagram

## O problema

Sem uma lista de e-mails própria e sem consentimento registrado, a Carol depende do alcance do Instagram.

## Como funciona agora

```
Post no Instagram: "comenta INTEIRA que eu te mando"
        │  automação de comentários da Meta (ou ManyChat)
        ▼
Direct com o link  carolinawadt.com/isca/o-que-nao-e-seu
        ▼
Página de isca: nome + e-mail + aceite (LGPD/RGPD)
        ▼
CapturaDeLeads.registrar()  →  RepositorioDeLeads.salvar()
        ▼
Ferramenta de e-mail envia o material e entra na lista
```

O mesmo formulário aparece no fim das páginas de proposta ("Ainda não é o momento?"), para quem não comprou.

## Criar uma isca

1. Coloque o material em `public/materiais/` (PDF) ou tenha o link (playlist do YouTube, vídeo).
2. Acrescente em `src/content/iscas.ts`:

```ts
new IscaDigital({
  slug: "playlist-mistica",      // vira /isca/playlist-mistica
  palavraChave: "playlist",      // o que a pessoa comenta
  titulo: "Playlist Mulher Inteira",
  subtitulo: "Uma frase sobre o benefício.",
  formato: "playlist",           // "pdf" | "playlist" | "video" | "audio"
  conteudo: ["O que ela encontra", "Em itens curtos"],
  urlDeEntrega: "https://youtube.com/playlist?list=...",
})
```

3. Configure a automação da Meta para responder ao comentário com o link da página.

## Consentimento

O texto do aceite fica em `TEXTO_DE_CONSENTIMENTO` (`domain/leads/CapturaDeLeads.ts`). Cada lead guarda:

- o texto exato que a pessoa aceitou;
- data e hora do aceite;
- a origem (slug da isca ou "site").

Sem a caixa marcada, nada é salvo. A política de privacidade proposta (`/proposta/privacidade`) explica o uso.

## Ligar a uma ferramenta de e-mail

Na demonstração, os leads ficam no `localStorage` do navegador (chave `carolwadt:leads-demo`) e não vão a lugar nenhum.

Para produção:

1. Escolha a ferramenta (Brevo e MailerLite têm plano gratuito e automação de boas-vindas).
2. Crie uma função serverless (por exemplo `api/leads.ts` na Vercel) que recebe o JSON do lead e chama a API da ferramenta com a chave guardada **só no servidor**.
3. Defina `VITE_LEADS_ENDPOINT=/api/leads` no ambiente. `app/servicos.ts` passa a usar `RepositorioDeLeadsHttp`.
4. Na ferramenta, crie a automação: ao entrar na lista com a etiqueta da isca, enviar o e-mail com o material.

Se preferir um adaptador direto (sem função), crie uma classe que implemente `RepositorioDeLeads` e troque em `servicos.ts`; nenhum componente muda.
