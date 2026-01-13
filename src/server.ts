/**
 * Importando o framework Express para criar o servidor web
 * Express é um framework minimalista para Node.js que facilita a criação de APIs
 */
import express from "express";

/**
 * Importando os middlewares customizados
 * Middlewares são funções que interceptam requisições antes de chegarem às rotas
 */
import { myMiddleware } from "./middlewares/my-middleware.js";
import { mySecondMiddleware } from "./middlewares/my-2nd-middleware.js";

/**
 * Define a porta onde o servidor irá rodar
 * Porta 3333 é comumente usada em desenvolvimento
 */
const PORT = 3333;

/**
 * Cria uma instância da aplicação Express
 * Esta instância será usada para configurar rotas e middlewares
 */
const app = express();

/**
 * Middleware nativo do Express para interpretar JSON no corpo das requisições
 * Sem isso, não conseguimos receber dados JSON no body das requisições POST/PUT
 */
app.use(express.json());

/**
 * Registra o middleware global que será executado em TODAS as requisições
 * Middlewares globais são úteis para logging, autenticação, etc.
 */
app.use(myMiddleware);

/**
 * Rota GET raiz (/)
 * Retorna uma mensagem simples de boas-vindas
 * É útil para testar se o servidor está funcionando
 */
app.get("/", (request, response) => {
  response.send("Hello World Express!");
});

/**
 * Rota GET /products com query parameters e middleware local
 * mySecondMiddleware será executado APENAS nesta rota (middleware local)
 * Query parameters são acessados via request.query (ex: /products?page=1&limit=10)
 */
app.get("/products", mySecondMiddleware, (request, response) => {
  const { page, limit } = request.query;
  response.send(`Página ${page} de ${limit}`);
});

/**
 * Rota GET /products/:id com route parameter
 * Route parameters são acessados via request.params
 * O :id é um parâmetro dinâmico na URL (ex: /products/123)
 */
app.get("/products/:id", (request, response) => {
  const { id } = request.params;
  response.send(id);
});

/**
 * Rota POST /products para criar um novo produto
 * Recebe dados no corpo da requisição (request.body)
 * Retorna status 201 (Created) indicando que o recurso foi criado com sucesso
 */
app.post("/products", (request, response) => {
  const { name, price } = request.body;
  response.status(201).json({ name, price });
});

/**
 * Inicia o servidor na porta especificada
 * O callback é executado quando o servidor está pronto para receber requisições
 */
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
