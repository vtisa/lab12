const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// Ruta para obtener todos los productos
router.get('/', productoController.obtenerProductos);

// Ruta para obtener un producto por ID
router.get('/:id', productoController.obtenerProductoPorId);

// Ruta para crear un nuevo producto
router.post('/', productoController.crearProducto);

// Ruta para actualizar un producto por ID
router.put('/:id', productoController.actualizarProducto);

// Ruta para eliminar un producto por ID
router.delete('/:id', productoController.eliminarProducto);

module.exports = router;
