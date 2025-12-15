import { Router } from 'express';
import {
  getProducts,
  createProductController
} from '../controllers/products.controller.js';

const router = Router();

router.get('/', getProducts);
router.post('/create', createProductController);

export default router;
