import { Router } from 'express';
import { crearUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario, obtenerUsuarioById } from '../controllers/usuarioController.js';

const router = Router();

router.post('/', crearUsuario);
router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuarioById);
router.put('/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

export default router;
