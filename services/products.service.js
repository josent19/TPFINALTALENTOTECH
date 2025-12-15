let products = [];

export const getAllProducts = () => {
  return products;
};

export const createProduct = (data) => {
  const newProduct = {
    id: Date.now(),
    ...data
  };

  products.push(newProduct);
  return newProduct;
};
