import {
  getAllProducts,
  createProduct,
  deleteProduct
} from "../services/products.service.js";

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

export const createProductController = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || typeof name !== "string") {
      return res.status(400).json({ message: "Nombre inválido" });
    }

    if (price === undefined || typeof price !== "number") {
      return res.status(400).json({ message: "Precio inválido" });
    }

    const product = await createProduct({ name, price });
    res.status(201).json(product);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear producto" });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteProduct(id);
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar producto" });
  }
};
