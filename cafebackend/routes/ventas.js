const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

// Ruta para obtener todas las ventas
router.get('/', ventaController.obtenerVentas);

// Ruta para obtener una venta por ID
router.get('/:id', ventaController.obtenerVentaPorId);

// Ruta para crear una nueva venta
router.post('/', ventaController.crearVenta);

// Ruta para eliminar una venta por ID
router.delete('/:id', ventaController.eliminarVenta);

module.exports = router;
