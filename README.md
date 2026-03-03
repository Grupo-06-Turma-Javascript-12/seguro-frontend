<div align="center">

<img src="https://ik.imagekit.io/ycn9hqmaw/Logo.hd?updatedAt=1772462577564" alt="EloSeguros Logo" width="200"/>

# 🔒 EloSeguros — Frontend

**Plataforma digital de gestão de seguros, desenvolvida com React, TypeScript e Tailwind CSS.**

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

## 📋 Sobre o Projeto

A **EloSeguros** é uma plataforma web que conecta pessoas à segurança por meio de tecnologia. O sistema permite o gerenciamento completo de apólices de seguro, categorias de planos e usuários, com uma interface moderna, responsiva e acessível.

> Este repositório contém o **frontend** da aplicação. O backend deve estar rodando em `http://localhost:4000` para que a integração funcione corretamente.

---

## 🚀 Funcionalidades

- 🏠 **Home** — Apresentação da plataforma com CTA para simulação de seguro
- 📁 **Categorias** — Listagem e cadastro de categorias de planos
- 🔐 **Seguros** — Listagem, cadastro e edição de apólices com:
  - Número de apólice gerado automaticamente (`ELO-XXXX-00000-XXX`)
  - Seleção de tipo de cobertura por cards visuais (Básica, Hospitalar, Completa, Total)
  - Status da apólice (Ativo, Inativo, Em Análise)
  - Integração com categorias do backend
- 👤 **Usuários** — Cadastro de clientes pelo administrador
- ℹ️ **Sobre Nós** — Página institucional com missão, visão, valores e time

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|---|---|---|
| React | 19 | Framework principal |
| TypeScript | 5 | Tipagem estática |
| Vite | 6 | Build tool e dev server |
| Tailwind CSS | 3 | Estilização |
| React Router DOM | 7 | Navegação entre páginas |
| React Toastify | — | Notificações de feedback |
| React Spinners | — | Indicadores de carregamento |
| Axios | — | Requisições HTTP |

---

## 🎨 Paleta de Cores

| Nome | Hex | Uso |
|---|---|---|
| Azul Principal | `#0F3B5F` | Fundo principal, textos de destaque |
| Azul Secundário | `#0B2C45` | Cards e formulários |
| Azul Hover | `#123E63` | Estados de hover |
| Dourado | `#D4AF37` | Acentos, bordas, botões primários |
| LinkedIn | `#0A66C2` | Botão LinkedIn |

---

## 📁 Estrutura do Projeto

```
seguro-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── footer/
│   │   ├── navbar/
│   │   └── section/
│   │       ├── DiferenciaisSection.tsx
│   │       └── SegurosCarouselSection.tsx
│   ├── models/
│   │   ├── Categoria.ts
│   │   ├── Seguro.ts
│   │   └── Usuario.ts
│   ├── pages/
│   │   ├── home/
│   │   │   └── Home.tsx
│   │   └── sobrenos/
│   │       └── SobreNos.tsx
│   ├── services/
│   │   └── Service.ts
│   ├── utils/
│   │   └── ToastAlerta.ts
│   └── views/
│       ├── categorias/
│       │   ├── cardcategoria/
│       │   │   └── CardCategoria.tsx
│       │   ├── formcategoria/
│       │   │   └── FormCategorias.tsx
│       │   └── listacategorias/
│       │       └── ListaCategorias.tsx
│       ├── seguros/
│       │   ├── cardseguro/
│       │   │   └── CardSeguro.tsx
│       │   ├── formseguro/
│       │   │   └── FormSeguro.tsx
│       │   └── listaseguros/
│       │       └── ListaSeguros.tsx
│       └── usuarios/
│           └── CadastroUsuario.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Backend da EloSeguros rodando em `http://localhost:4000`

### Passo a Passo

```bash
# 1. Clone o repositório
git clone https://github.com/Grupo-06-Turma-Javascript-12/seguro-frontend.git

# 2. Entre na pasta do projeto
cd seguro-frontend

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

---

## 🔗 Endpoints do Backend

A aplicação consome a API REST do backend na URL base `http://localhost:4000`.

| Método | Endpoint | Descrição |
|---|---|---|
| `GET` | `/categorias` | Listar todas as categorias |
| `POST` | `/categorias` | Cadastrar categoria |
| `PUT` | `/categoria` | Atualizar categoria |
| `GET` | `/seguros` | Listar todos os seguros |
| `GET` | `/seguros/:id` | Buscar seguro por ID |
| `POST` | `/seguros` | Cadastrar seguro |
| `PUT` | `/seguros/` | Atualizar seguro |
| `POST` | `/usuarios` | Cadastrar usuário/cliente |


---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos — **Turma JavaScript 12, Grupo 06**.

---

## 👥 Equipe de Desenvolvimento 

Desenvolvido pelo **Grupo 06** da **Turma JavaScript 12**.

📧 grupo06turmajavascript12@gmail.com  
📍 Recife, PE

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/deboracamposs">
        <img src="https://github.com/deboracamposs.png" width="120px;" alt="Foto de Débora Campos"/><br>
        <sub><b>Débora Campos</b></sub>
      </a><br>
      🔒
    </td>
    <td align="center">
      <a href="https://github.com/paulobrandao26">
        <img src="https://github.com/paulobrandao26.png" width="120px;" alt="Foto de Paulo Brandão"/><br>
        <sub><b>Paulo Brandão</b></sub>
      </a><br>
      🔒
    </td>
    <td align="center">
      <a href="https://github.com/rafaelbernardodev">
        <img src="https://github.com/rafaelbernardodev.png" width="120px;" alt="Foto de Rafael Bernardo"/><br>
        <sub><b>Rafael Bernardo</b></sub>
      </a><br>
      🔒
    </td>
    <td align="center">
      <a href="https://github.com/ThaysPei">
        <img src="https://github.com/ThaysPei.png" width="120px;" alt="Foto de Thais Peixoto"/><br>
        <sub><b>Thais Peixoto</b></sub>
      </a><br>
      🔒
    </td>
    <td align="center">
      <a href="https://github.com/WyrmsCordeiro">
        <img src="https://github.com/WyrmsCordeiro.png" width="120px;" alt="Foto de Wyrms Cordeiro"/><br>
        <sub><b>Wyrms Cordeiro</b></sub>
      </a><br>
      🔒
    </td>
---

<div align="center">
  Feito com 💙 e ☕ pelo Grupo 06
</div>
