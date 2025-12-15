import {
  getAllProducts,
  createProduct
} from '../services/products.service.js';

export const getProducts = (req, res) => {
  const products = getAllProducts();
  res.json(products);
};

export const createProductController = (req, res) => {
  const product = createProduct(req.body);
  res.status(201).json(product);
};
