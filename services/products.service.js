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

export const deleteProduct = (id) => {
  const index = products.findIndex(p => p.id === Number(id));

  if (index === -1) {
    return null;
  }

  const deletedProduct = products[index];
  products.splice(index, 1);

  return deletedProduct;
};
