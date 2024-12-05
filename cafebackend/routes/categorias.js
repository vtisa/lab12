const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Ruta para obtener todas las categorías
router.get('/', categoriaController.obtenerCategorias);

// Ruta para obtener una categoría por ID
router.get('/:id', categoriaController.obtenerCategoriaPorId);

// Ruta para crear una nueva categoría
router.post('/', categoriaController.crearCategoria);

// Ruta para actualizar una categoría por ID
router.put('/:id', categoriaController.actualizarCategoria);

// Ruta para eliminar una categoría por ID
router.delete('/:id', categoriaController.eliminarCategoria);

module.exports = router;
