const mongoose = require('mongoose');

const VentaSchema = new mongoose.Schema({
    cantidad: {
        type: Number,
        required: true
    },
    precioTotal: {
        type: Number,
        required: true
    },
    productoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    }
}, { 
    timestamps: true, 
    versionKey: false 
}); 

module.exports = mongoose.model('Venta', VentaSchema);
