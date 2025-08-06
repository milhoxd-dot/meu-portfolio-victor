# Victor Pacheco - Portfólio Profissional

Este é o site de portfólio profissional de Victor Pacheco, Designer Gráfico, Artista Visual e Editor de Vídeos.

## 🚀 Tecnologias Utilizadas

- **React 18** - Framework JavaScript para interface de usuário
- **Vite** - Build tool e servidor de desenvolvimento
- **Tailwind CSS** - Framework CSS para estilização
- **Shadcn/UI** - Componentes de interface pré-construídos
- **Lucide React** - Ícones modernos
- **Framer Motion** - Animações (disponível para uso futuro)

## 📁 Estrutura do Projeto

```
victor-portfolio/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos estáticos
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes de UI (shadcn)
│   │   ├── Header.jsx    # Cabeçalho e navegação
│   │   ├── Hero.jsx      # Seção principal
│   │   ├── About.jsx     # Seção sobre
│   │   ├── Portfolio.jsx # Seção de portfólio
│   │   ├── Contact.jsx   # Seção de contato
│   │   └── Footer.jsx    # Rodapé
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos globais
│   └── main.jsx          # Ponto de entrada
├── package.json          # Dependências do projeto
└── README.md            # Este arquivo
```

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- pnpm (recomendado) ou npm

### Instalação e Execução

1. **Clone o repositório** (se aplicável):
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd victor-portfolio
   ```

2. **Instale as dependências**:
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Execute o servidor de desenvolvimento**:
   ```bash
   pnpm run dev
   # ou
   npm run dev
   ```

4. **Acesse o site**:
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador

### Build para Produção

```bash
pnpm run build
# ou
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

## 📱 Funcionalidades

- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Navegação Suave**: Scroll suave entre seções
- **Filtros de Portfólio**: Filtragem de projetos por categoria
- **Formulário de Contato**: Formulário funcional para contato
- **Performance Otimizada**: Carregamento rápido e otimizado
- **SEO Friendly**: Meta tags e estrutura semântica

## 🎨 Seções do Site

1. **Home/Hero**: Apresentação principal com call-to-actions
2. **Sobre**: Informações pessoais, experiência e habilidades
3. **Portfólio**: Galeria de projetos com filtros por categoria
4. **Contato**: Formulário de contato e informações

## 🔧 Personalização

### Cores
As cores principais podem ser alteradas no arquivo `src/App.css`:
- Laranja principal: `#ff6b35` (--color-primary)
- Cinza escuro: `#1a1a1a`
- Branco: `#ffffff`

### Conteúdo
Para atualizar o conteúdo:
- **Projetos**: Edite o array `projects` em `src/components/Portfolio.jsx`
- **Informações pessoais**: Edite `src/components/About.jsx`
- **Informações de contato**: Edite `src/components/Contact.jsx`

### Imagens
- Substitua os placeholders em `src/assets/` pelas imagens reais
- Atualize os caminhos nos componentes correspondentes

## 📧 Configuração do Formulário de Contato

O formulário de contato atualmente exibe um alerta. Para implementar o envio real:

1. **Opção 1 - EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```

2. **Opção 2 - Netlify Forms** (se hospedado no Netlify):
   Adicione `netlify` ao atributo `name` do formulário

3. **Opção 3 - Backend próprio**:
   Configure uma API para processar os dados do formulário

## 🚀 Deploy

### Netlify (Recomendado)
1. Faça build do projeto: `pnpm run build`
2. Arraste a pasta `dist` para o Netlify
3. Configure o domínio personalizado (opcional)

### Vercel
1. Conecte o repositório ao Vercel
2. Configure o comando de build: `pnpm run build`
3. Configure a pasta de output: `dist`

### GitHub Pages
1. Instale gh-pages: `npm install --save-dev gh-pages`
2. Adicione scripts no package.json:
   ```json
   "homepage": "https://[username].github.io/[repository]",
   "scripts": {
     "predeploy": "pnpm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Execute: `pnpm run deploy`

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato:
- **Email**: vpdesgin@gmail.com
- **Portfólio**: [Behance](https://www.behance.net/victor-oliveira)

## 📄 Licença

Este projeto foi desenvolvido especificamente para Victor Pacheco. Todos os direitos reservados.

---

**Desenvolvido com ❤️ e muito café**

