const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
    nombre: { type: String, required: true }
},{ versionKey: false });

module.exports = mongoose.model('Categoria', CategoriaSchema);
