const Venta = require('../models/venta');
const Producto = require('../models/producto'); // Importar el modelo Producto

// Crear una nueva venta usando productoId
exports.crearVenta = async (req, res) => {
    try {
        const ventas = req.body; // Se espera un array de objetos de venta

        // Validar que se reciba un array con ventas
        if (!Array.isArray(ventas) || ventas.length === 0) {
            return res.status(400).json({ message: 'El cuerpo de la solicitud debe contener un array de ventas.' });
        }

        // Procesar cada venta
        const ventasGuardadas = await Promise.all(ventas.map(async (venta) => {
            const { productoId, cantidad } = venta;

            // Verificar que el producto existe
            const producto = await Producto.findById(productoId);
            if (!producto) {
                throw new Error(`Producto con ID ${productoId} no encontrado.`);
            }

            // Calcular el precio total
            const precioTotal = producto.precio * cantidad;

            // Crear y guardar la venta
            const nuevaVenta = new Venta({
                productoId,
                cantidad,
                precioTotal,
            });

            return await nuevaVenta.save();
        }));

        res.status(201).json(ventasGuardadas);
    } catch (error) {
        console.error('Error al crear las ventas:', error);
        res.status(500).json({ message: 'Error al crear las ventas', error: error.message });
    }
};


// Obtener todas las ventas (incluyendo datos del producto relacionado)
exports.obtenerVentas = async (req, res) => {
    try {
        const ventas = await Venta.find().populate('productoId'); // Popular datos del producto
        res.status(200).json(ventas);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las ventas', error });
    }
};

// Obtener una venta por ID (incluyendo datos del producto relacionado)
exports.obtenerVentaPorId = async (req, res) => {
    try {
        const venta = await Venta.findById(req.params.id).populate('productoId'); // Popular datos del producto
        if (!venta) return res.status(404).json({ message: 'Venta no encontrada' });
        res.status(200).json(venta);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la venta', error });
    }
};

// Eliminar una venta por ID
exports.eliminarVenta = async (req, res) => {
    try {
        const ventaEliminada = await Venta.findByIdAndDelete(req.params.id);
        if (!ventaEliminada) return res.status(404).json({ message: 'Venta no encontrada' });
        res.status(200).json({ message: 'Venta eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la venta', error });
    }
};
