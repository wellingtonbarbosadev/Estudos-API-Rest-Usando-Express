/**
 * Importando os tipos do Express para type safety
 * Request: contém informações da requisição HTTP
 * Response: usado para enviar a resposta ao cliente
 * NextFunction: função que passa o controle para o próximo middleware
 */
import type { Request, Response, NextFunction } from "express";

/**
 * Middleware Local
 *
 * Diferente do middleware global, este middleware é aplicado apenas em rotas específicas.
 * No server.ts, ele é registrado diretamente na rota: app.get("/products", mySecondMiddleware, ...)
 *
 * Middlewares locais são úteis quando você precisa de lógica específica para certas rotas,
 * como validação de parâmetros, verificação de permissões, etc.
 *
 * Diferença entre Middleware Global vs Local:
 * - Global: app.use(middleware) - executa em todas as rotas
 * - Local: app.get('/rota', middleware, handler) - executa apenas naquela rota
 *
 * @param request - Objeto com dados da requisição HTTP
 * @param response - Objeto para enviar resposta ao cliente
 * @param next - Função para passar controle ao próximo middleware ou handler da rota
 */
export function mySecondMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Loga no console apenas quando esta rota específica é acessada
  console.log("Passou pelo Middleware Local!");

  /**
   * Chama next() para passar o controle para o próximo middleware ou handler
   * Neste caso, após o next(), a execução vai para o handler da rota /products
   */
  return next();
}
