# Estradeirando - Blog de Viagens e Aventuras

Este é um blog estático criado com Next.js para compartilhar aventuras, descobertas e experiências pelo Brasil e pelo mundo.

## Características

- Design responsivo com Tailwind CSS
- Blog estático com posts armazenados em arquivos TypeScript
- Páginas de posts individuais
- Sistema de tags para categorizar conteúdo
- Otimizado para SEO
- Pronto para deploy na Vercel

## Como usar

### Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

### Instalação

1. Clone este repositório
2. Instale as dependências:

```bash
cd estradeirando-blog
npm install
```

### Desenvolvimento local

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000).

### Adicionando novos posts

Para adicionar novos posts ao blog, edite o arquivo `data/posts.ts` seguindo o formato existente.

### Adicionando imagens

1. Coloque suas imagens na pasta `public/images/`
2. Referencie-as nos posts usando o caminho `/images/nome-da-imagem.jpg`

## Deploy na Vercel

Este projeto está configurado para ser facilmente implantado na Vercel.

1. Crie uma conta na [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Importe o projeto
4. A Vercel detectará automaticamente que é um projeto Next.js e configurará o build corretamente

## Personalização

### Alterando o tema

Você pode personalizar as cores e estilos editando o arquivo `tailwind.config.js` e `app/globals.css`.

### Alterando o layout

Os componentes principais estão em `app/components/`. Você pode editar o Header, Footer e outros componentes para personalizar o layout do site.

---

Criado com ❤️ para o Estradeirando
