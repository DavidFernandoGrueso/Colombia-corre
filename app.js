const express = require('express');
const app = express();
const port = 5700;

// Configurar Express para servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Rutas de tu aplicación
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Otras rutas y lógica de tu aplicación aquí

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
