import express from "express";
import dotenv from "dotenv";
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", productsRoutes);
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en puerto", process.env.PORT);
});
