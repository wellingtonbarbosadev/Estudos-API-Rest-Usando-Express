import type { Request, Response } from "express";

export class ProductsController {
  /**
   * index - GET para listar vários registros.
   * show - GET para exibir um registro específico.
   * create - POST para criar um registro.
   * update - PUT para atualizar um registro.
   * remove - DELETE para deletar um registro.
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query;
    if (page && limit) {
      return response.status(200).send(`Página ${page} de ${limit}`);
    }
    response.send("Hello World Express!");
  }

  create(request: Request, response: Response) {
    console.log(request.body);
    const { name, price } = request.body;
    response.status(201).json({ name, price, user_id: request.user_id });
  }
}
