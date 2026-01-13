/**
 * Importando o framework Express para criar o servidor web
 * Express é um framework minimalista para Node.js que facilita a criação de APIs
 */
import express from "express";
import { routes } from "./routes/index.js";

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

app.use(myMiddleware);

app.use(routes);
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
 * Inicia o servidor na porta especificada
 * O callback é executado quando o servidor está pronto para receber requisições
 */
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
