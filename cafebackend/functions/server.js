const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('../config/db'); // Asegúrate de que la ruta es correcta
const categoriaRoutes = require('../routes/categorias');
const productoRoutes = require('../routes/productos');
const ventaRoutes = require('../routes/ventas');
const serverless = require('serverless-http');

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/categorias', categoriaRoutes);
app.use('/productos', productoRoutes);
app.use('/ventas', ventaRoutes);

// Exportar la función para ser utilizada como una función serverless
module.exports.handler = serverless(app);

// Configuración para ejecución local
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000; // El puerto se puede configurar con la variable de entorno PORT
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}
