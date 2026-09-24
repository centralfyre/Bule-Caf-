# Bule Café e Cozinha — Hostinger

Cópia do site original para publicação como aplicação Next.js com saída estática.
O conteúdo, layout, imagens, vídeo e interações estão nos arquivos `app/` e `public/`.

## Publicação automática

1. Envie este projeto para um repositório GitHub.
2. Na Hostinger, crie um site como **Node.js Web App** e escolha **Import Git Repository**.
3. Selecione o repositório e a branch principal. Use Node.js 22 e o comando de build `pnpm build`; a saída estática é `out`.
4. Ative o deploy automático da branch na Hostinger. Cada push de alterações publicadas nessa branch dispara um novo build.

Para edições feitas pelo ChatGPT, o projeto no GitHub deve continuar sendo atualizado após cada alteração. A publicação no Sites é independente da Hostinger.

Para testar localmente: `corepack pnpm install --frozen-lockfile` e `corepack pnpm build`.
