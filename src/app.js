import 'dotenv/config';
import express from 'express';
import './config/db.js'; // Importa y ejecuta la conexión a Mongo
import usuarioRoutes from './routes/usuarioRoutes.js';
import productoRoutes from './routes/productoRoutes.js';
import contadorMiddleware from './middlewares/contadorMiddleware.js';
import Contador from './models/Contador.js';
import Usuario from './models/Usuario.js';
import Producto from './models/Producto.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware para contar operaciones (persistente en Mongo)
app.use(contadorMiddleware);

// Rutas CRUD de usuarios y productos
app.use('/usuarios', usuarioRoutes);
app.use('/productos', productoRoutes);

// Endpoint para obtener el total de operaciones
app.get('/operaciones', async (req, res) => {
  try {
    const doc = await Contador.findOne({ name: 'operations' });
    // Si no existe el documento, el valor es 0
    const totalOperaciones = doc ? doc.value : 0;
    return res.json({ operaciones: totalOperaciones });
  } catch (error) {
    return res.status(500).json({
      error: 'Error al obtener el contador de operaciones',
      details: error.message
    });
  }
});

// Endpoint para obtener el número total de documentos en Usuarios y Productos
app.get('/contadores', async (req, res) => {
  try {
    const userCount = await Usuario.countDocuments();
    const productCount = await Producto.countDocuments();
    return res.json({
      usuarios: userCount,
      productos: productCount
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Error al obtener el conteo de documentos',
      details: error.message
    });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
