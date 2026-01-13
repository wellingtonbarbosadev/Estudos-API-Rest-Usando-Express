/**
 * Importando os tipos do Express para type safety
 * Request: contém informações da requisição HTTP
 * Response: usado para enviar a resposta ao cliente
 * NextFunction: função que passa o controle para o próximo middleware
 */
import type { Request, Response, NextFunction } from "express";

/**
 * Middleware Global
 *
 * Um middleware é uma função que tem acesso aos objetos de requisição (request),
 * resposta (response) e à próxima função middleware no ciclo de requisição-resposta.
 *
 * Este middleware é global pois foi registrado com app.use() sem especificar rota,
 * então será executado em TODAS as requisições para qualquer rota.
 *
 * Características de um middleware:
 * - Pode executar qualquer código
 * - Pode modificar os objetos request e response
 * - Pode encerrar o ciclo de requisição-resposta
 * - Pode chamar o próximo middleware usando next()
 *
 * @param request - Objeto com dados da requisição HTTP
 * @param response - Objeto para enviar resposta ao cliente
 * @param next - Função para passar controle ao próximo middleware
 */
export function myMiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Loga no console sempre que uma requisição passa por este middleware
  console.log("Passou pelo Middleware Global!");

  request.user_id = "12345";
  /**
   * Chama next() para passar o controle para o próximo middleware ou rota
   * Se não chamar next(), a requisição ficará travada e não chegará à rota final
   */
  return next();
}
