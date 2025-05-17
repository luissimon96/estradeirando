# Estradeirando - Blog de Viagens e Aventuras

Este é um blog estático criado com React e Next.js para compartilhar aventuras, descobertas e experiências pelo Brasil e pelo mundo.

## Características

- Design responsivo
- Blog Inovador
- Páginas de posts individuais
- Sistema de tags para categorizar conteúdo
- Otimizado para SEO
- Pronto para deploy na Vercel

## Como usar

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

### Instalação

1. Clone este repositório
2. Instale as dependências:

```bash
npm install
```

### Desenvolvimento local

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000).

### Estrutura de Imagens

Coloque suas imagens em `public/images/estradeirando/` para centralizar as mídias do site.

### Adicionando novos posts

Para adicionar novos posts ao blog, edite o arquivo `data/posts.ts` seguindo o formato existente.

### Adicionando imagens

1. Coloque suas imagens na pasta `public/images/`
2. Referencie-as nos posts usando o caminho `/images/nome-da-imagem.jpg`

### Deploy na Vercel

Este projeto está pronto para ser implantado na Vercel!

#### Passo a passo

1. Crie uma conta gratuita na [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub, GitLab ou Bitbucket à Vercel
3. Clique em **"Add New... > Project"** e selecione o repositório do Estradeirando
4. A Vercel detectará automaticamente que é um projeto Next.js
5. Clique em **Deploy**
6. Pronto! Seu site estará online em alguns segundos, com domínio gratuito fornecido pela Vercel

#### Dicas

- Para domínio próprio, configure em **Settings > Domains** na Vercel
- Para variáveis de ambiente, use **Settings > Environment Variables**
- O build e preview são automáticos a cada push no repositório

## Personalização

### Alterando o tema

Você pode personalizar as cores e estilos editando o arquivo `tailwind.config.js` e `app/globals.css`.

### Alterando o layout

Os componentes principais estão em `app/components/`. Você pode editar o Header, Footer e outros componentes para personalizar o layout do site.

---

Criado com ❤️ para o Estradeirando
