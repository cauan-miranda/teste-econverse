# Teste Econverse — Desenvolvedor Front-End

Página de e-commerce desenvolvida em **React + TypeScript** com **Sass**, a partir do
[layout no Figma](https://www.figma.com/file/rWnzPeoxgynuNPsJjV0VmV/Teste-Front-End-Jr?node-id=0%3A1).
A vitrine consome a [lista de produtos em JSON](https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json)
e, ao clicar em um produto, abre um modal com suas principais informações.

## Tecnologias

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) (build e servidor de desenvolvimento)
- [Sass](https://sass-lang.com/) com CSS Modules (`*.module.scss`)
- Sem bibliotecas de UI (Bootstrap, Foundation etc.)

## Pré-requisitos

- Node.js 20.19+ (ou 22.12+)
- npm 10+

## Como rodar

```bash
# instalar as dependências
npm install

# servidor de desenvolvimento (http://localhost:5173)
npm run dev
```

## Como compilar

```bash
# checagem de tipos + build de produção (gera a pasta dist/)
npm run build

# servir o build localmente (http://localhost:4173)
npm run preview
```

## Como testar

```bash
# checagem de tipos do TypeScript
npx tsc -b

# lint
npm run lint
```

Teste manual:

1. Rode `npm run dev` e abra `http://localhost:5173`.
2. Verifique se as vitrines exibem os produtos vindos do JSON.
3. Use as setas para navegar pelo carrossel.
4. Clique na imagem ou em **Comprar** de um produto: o modal abre com nome, preço,
   descrição e foto do produto clicado.
5. Feche o modal pelo **X**, clicando fora dele ou com a tecla **Esc**.

## Estrutura do projeto

```
src/
├── components/         # Um diretório por componente (TSX + SCSS Module)
│   ├── Header/         # Barra de benefícios, logo, busca, ícones e menu
│   ├── HeroBanner/     # Banner principal
│   ├── Categories/     # Atalhos de categorias
│   ├── ProductShowcase/# Vitrine (título, abas e carrossel)
│   ├── ProductCard/    # Card de produto
│   ├── ProductModal/   # Modal com detalhes do produto (<dialog> nativo)
│   ├── PartnerBanners/ # Banners de apoio "Parceiros"
│   ├── Brands/         # Navegue por marcas
│   ├── Newsletter/     # Formulário de newsletter
│   ├── Footer/         # Rodapé
│   └── ...             # Logo, Icons, SectionTitle
├── hooks/useProducts.ts  # Carrega produtos (loading/erro/cancelamento)
├── services/products.ts  # Requisição à API com fallback
├── types/product.ts      # Tipagens
├── utils/price.ts        # Formatação de preço (centavos -> R$)
└── styles/               # Variáveis, mixins e estilos globais
```

## Decisões técnicas

- **CORS:** o endpoint de produtos não envia cabeçalhos CORS. Em desenvolvimento o Vite
  faz proxy de `/api` para o servidor da Econverse (`vite.config.ts`). Em produção, se a
  requisição direta falhar, a aplicação usa a cópia local em `public/produtos.json`.
- **Preços:** o campo `price` vem em centavos (`149990` = `R$ 1.499,90`). O JSON não traz
  o preço "de", então o card mostra um preço de referência ~10% maior para reproduzir o layout.
- **Modal:** usa o elemento nativo `<dialog>` com `showModal()`, que já fornece foco preso,
  fechamento com Esc e backdrop, sem dependências externas.
- **Carrossel:** implementado com CSS Grid + `scroll-snap`, responsivo (4/3/2/1 cards).

## SEO e acessibilidade

- HTML semântico (`header`, `nav`, `main`, `section`, `article`, `footer`) e hierarquia de títulos.
- `lang="pt-BR"`, meta description, canonical e Open Graph no `index.html`.
- Textos alternativos nas imagens, `aria-label` em botões de ícone e foco visível.
- Imagens da vitrine com `loading="lazy"` e dimensões explícitas.
