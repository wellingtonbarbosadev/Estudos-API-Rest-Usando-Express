import express from "express";
import { myMiddleware } from "./middlewares/my-middleware.js";

const PORT = 3333;

const app = express();
app.use(express.json());

app.use(myMiddleware);

app.get("/", (request, response) => {
  response.send("Hello World Express!");
});

app.get("/products", (request, response) => {
  const { page, limit } = request.query;
  response.send(`Página ${page} de ${limit}`);
});

app.get("/products/:id", (request, response) => {
  const { id } = request.params;
  response.send(id);
});

app.post("/products", (request, response) => {
  const { name, price } = request.body;
  response.status(201).json({ name, price });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
