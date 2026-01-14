# API REST - Node.js & Express

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

> API RESTful desenvolvida com Node.js, Express e TypeScript seguindo boas práticas de desenvolvimento.

## 📋 Descrição

Este projeto é uma API RESTful criada como parte do curso da RocketSeat, demonstrando a implementação de uma aplicação backend moderna com Node.js e TypeScript. O projeto inclui validação de dados com Zod, tratamento de erros personalizado, middlewares e uma estrutura organizada seguindo padrões de desenvolvimento.

## 🚀 Tecnologias

- **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Express](https://expressjs.com/)** - Framework web minimalista
- **[Zod](https://zod.dev/)** - Biblioteca de validação de schema TypeScript-first
- **[TSX](https://github.com/privatenumber/tsx)** - TypeScript Execute para desenvolvimento

## 📁 Estrutura do Projeto

```
API-REST/
├── src/
│   ├── controllers/          # Controladores da aplicação
│   │   └── products-controller.ts
│   ├── middlewares/          # Middlewares customizados
│   │   ├── my-middleware.ts
│   │   └── my-2nd-middleware.ts
│   ├── routes/              # Definição de rotas
│   │   ├── index.ts
│   │   └── products-routes.ts
│   ├── types/               # Definições de tipos TypeScript
│   │   └── request.d.ts
│   ├── utils/               # Utilitários
│   │   └── app-error.ts
│   └── server.ts            # Arquivo principal do servidor
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Funcionalidades

- ✅ CRUD de produtos
- ✅ Validação de dados com Zod
- ✅ Tratamento de erros centralizado
- ✅ Middlewares customizados
- ✅ TypeScript com configuração strict
- ✅ Arquitetura organizada (Controllers, Routes, Middlewares)

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/wellingtonbarbosadev/Estudos-API-Rest-Usando-Express
cd API-REST
```

2. Instale as dependências:

```bash
npm install
```

## 🎯 Como Usar

### Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento com hot reload:

```bash
npm run dev
```

O servidor estará disponível em: `http://localhost:3333`

## 🔌 Endpoints da API

### Products

#### Listar produtos

```http
GET /products
```

**Query Parameters (opcionais):**

- `page` - Número da página
- `limit` - Quantidade de itens por página

**Resposta:**

```json
{
  "message": "Página {page} de {limit}"
}
```

#### Criar produto

```http
POST /products
```

**Body:**

```json
{
  "name": "Nome do Produto",
  "price": 99.99
}
```

**Validações:**

- `name`: string, mínimo 6 caracteres, obrigatório
- `price`: number, deve ser positivo, obrigatório

**Resposta (201):**

```json
{
  "name": "Nome do Produto",
  "price": 99.99,
  "user_id": "user-id-value"
}
```

## 🔧 Tratamento de Erros

A API implementa um sistema robusto de tratamento de erros:

- **AppError**: Erros personalizados da aplicação com status code customizado
- **ZodError**: Erros de validação de dados retornados de forma estruturada
- **Erros Genéricos**: Capturados e retornados com status 500

### Exemplo de resposta de erro de validação:

```json
{
  "message": "Validation Error!",
  "issues": {
    "name": ["Name must be at least 6 characters long."],
    "price": ["Price is required."]
  }
}
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo de desenvolvimento com hot reload

## 🏗️ Arquitetura

### Controllers

Os controllers seguem o padrão REST:

- `index` - GET para listar vários registros
- `show` - GET para exibir um registro específico
- `create` - POST para criar um registro
- `update` - PUT para atualizar um registro
- `remove` - DELETE para deletar um registro

### Middlewares

Sistema de middlewares em cascata para processamento de requisições.

### Validação

Utiliza Zod para validação de schemas com mensagens de erro customizadas.

## 👨‍💻 Autor

**Wellington Barbosa**

---

Desenvolvido como parte do curso de Node.js da [RocketSeat](https://www.rocketseat.com.br/) 🚀
