import type { Request, Response } from "express";
import { AppError } from "../utils/AppError.js";

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
    const { name, price } = request.body;
    if (!name) {
      throw new AppError("The product name is required");
    }
    response.status(201).json({ name, price, user_id: request.user_id });
  }
}
