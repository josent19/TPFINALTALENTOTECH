import { db } from "../firebase.js";

export const getAllProducts = async () => {
  const snapshot = await db.collection("products").get();

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const createProduct = async (product) => {
  const cleanProduct = {
    name: product.name,
    price: product.price
  };

  const docRef = await db.collection("products").add(cleanProduct);

  return {
    id: docRef.id,
    ...cleanProduct
  };
};

export const deleteProduct = async (id) => {
  await db.collection("products").doc(id).delete();
};
