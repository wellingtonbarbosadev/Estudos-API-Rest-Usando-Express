import { json, Router } from "express";
import { mySecondMiddleware } from "../middlewares/my-2nd-middleware.js";
import { myMiddleware } from "../middlewares/my-middleware.js";
import { ProductsController } from "../controllers/ProductsController.js";

export const productsRoutes = Router();
productsRoutes.use(json());
const controller = new ProductsController();

productsRoutes.get("/", mySecondMiddleware, controller.index);

productsRoutes.post("/", controller.create);
