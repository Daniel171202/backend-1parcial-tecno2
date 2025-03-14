import { Router } from 'express';
import { crearProducto, obtenerProductos, actualizarProducto, eliminarProducto,obtenerProductoById } from '../controllers/productoController.js';

const router = Router();

router.post('/', crearProducto);
router.get('/', obtenerProductos);
router.get('/:id', obtenerProductoById);
router.put('/:id', actualizarProducto);
router.delete('/:id', eliminarProducto);

export default router;
