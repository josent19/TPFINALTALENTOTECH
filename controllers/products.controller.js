import {
  getAllProducts,
  createProduct,
  deleteProduct
} from '../services/products.service.js';

export const getProducts = (req, res) => {
  const products = getAllProducts();
  res.json(products);
};

export const createProductController = (req, res) => {
  const product = createProduct(req.body);
  res.status(201).json(product);
};

export const deleteProductController = (req, res) => {
  const { id } = req.params;

  const deleted = deleteProduct(id);

  if (!deleted) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  res.json({
    message: 'Producto eliminado correctamente',
    product: deleted
  });
};
