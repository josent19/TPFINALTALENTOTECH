console.log('INDEX PRINCIPAL CARGADO');

import express from 'express';
import productsRoutes from './routes/products.routes.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API OK');
});

app.use('/api/products', productsRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000');
});
