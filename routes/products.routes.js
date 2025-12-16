import { Router } from 'express';
import {
  getProducts,
  createProductController,
  deleteProductController
} from '../controllers/products.controller.js';

const router = Router();

router.get('/', getProducts);
router.post('/create', createProductController);
router.delete('/:id', deleteProductController);

export default router;
