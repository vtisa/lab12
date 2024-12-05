const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    imagen: {
        type: String,
        required: false, 
    },
    descripcion: {
        type: String,
        required: true,
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categoria', // Relación con el modelo de categorías
        required: true,
    },
}, { timestamps: true, versionKey: false  });

module.exports = mongoose.model('Producto', ProductoSchema);
