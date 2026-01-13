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

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(myMiddleware);

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
