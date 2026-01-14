import type { Request, Response } from "express";
import { AppError } from "../utils/app-error.js";
import { z } from "zod";

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
    const bodySchema = z.object({
      name: z
        .string({
          error: (err) => (!err.input ? "Name is required." : undefined),
        })
        .trim()
        .min(6, { error: "Name must be at least 6 characters long." }),

      price: z
        .number({
          error: (err) => (!err.input ? "Price is required." : undefined),
        })
        .positive({ error: "Price must be at positive." }),
    });

    const { name, price } = bodySchema.parse(request.body);

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}
