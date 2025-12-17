import { Router } from "express";
import {
  getProducts,
  createProductController,
  deleteProductController
} from "../controllers/products.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Router();

router.get("/products", getProducts);
router.post("/products", verifyToken, createProductController);
router.delete("/products/:id", verifyToken, deleteProductController);

export default router;
