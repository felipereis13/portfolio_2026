# Portfolio 2026

Portfólio pessoal de Felipe Reis desenvolvido para apresentar experiência, formação, habilidades técnicas, certificações, projetos e canais de contato em uma interface moderna, responsiva e bilíngue.

## Visão Geral

Este projeto foi construído como uma landing page de apresentação profissional, com foco em:

- navegação fluida em página única;
- suporte a múltiplos idiomas com `i18next`;
- layout responsivo para desktop e mobile;
- organização modular por seções reutilizáveis;
- identidade visual moderna com `Tailwind CSS` e componentes `shadcn/ui`.

## Preview do Conteúdo

O portfólio está organizado nas seguintes seções:

- `Hero` com apresentação, links sociais e acesso ao currículo;
- `Sobre` com resumo profissional e objetivo de carreira;
- `Experiência` e `Educação`;
- `Habilidades`, `Certificações` e `Projetos`;
- `Idiomas` e `Contato`.

## Stack Utilizada

- `React 19`
- `TypeScript`
- `Vite`
- `Tailwind CSS`
- `shadcn/ui`
- `Radix UI`
- `i18next` + `react-i18next`
- `Lucide React`
- `ESLint`

## Estrutura do Projeto

```text
src/
  assets/        Arquivos estáticos
  components/    Componentes reutilizáveis e UI
  hooks/         Hooks customizados
  i18n/          Configuração de idiomas e traduções
  sections/      Seções principais da página
  App.tsx        Composição da aplicação
  main.tsx       Ponto de entrada
```

## Como Executar

### Pré-requisitos

- `Node.js 20+`
- `npm 10+` recomendado

### Instalação

```bash
npm install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
```

### Preview local da build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Diferenciais Técnicos

- arquitetura simples e escalável para evolução do portfólio;
- conteúdo desacoplado da interface via arquivos de tradução;
- animações leves com foco em legibilidade e experiência;
- componentes reutilizáveis que facilitam manutenção;
- base pronta para expansão com novos projetos, certificados e idiomas.

## Internacionalização

O projeto possui suporte a dois idiomas:

- `pt-BR`
- `en`

Os textos estão centralizados em:

- `src/i18n/locales/pt.json`
- `src/i18n/locales/en.json`

## Personalização

Para adaptar este portfólio para outro profissional, os principais pontos de edição são:

- textos e dados em `src/i18n/locales/`;
- links sociais e currículo nas seções da aplicação;
- imagem de perfil em `src/assets/`;
- estilos globais em `src/index.css` e `src/App.css`.

## Deploy

Por ser uma aplicação estática com Vite, este projeto pode ser publicado facilmente em plataformas como:

- `Vercel`
- `Netlify`
- `GitHub Pages`

Após o build, os arquivos finais são gerados em `dist/`.

## Licença

Este projeto está disponível para fins de estudo e personalização. Caso queira reutilizá-lo como base, o ideal é ajustar identidade visual, conteúdo e links antes da publicação.
