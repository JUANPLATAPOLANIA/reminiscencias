const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); // Importa CORS para evitar problemas de CORS

const app = express();

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'registro_usuarios',
  port: 3306,
});

// Conectar a MySQL
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    process.exit(1); // Cierra el servidor si hay un error de conexión
  } else {
    console.log('Conexión a MySQL establecida...');
  }
});

// Middleware
app.use(cors()); // Habilita CORS para todas las solicitudes
app.use(bodyParser.json()); // Configura el servidor para recibir datos en JSON

// Ruta de registro de usuarios
app.post('/registro', (req, res) => {
  const { usuario, apodo, contrasena } = req.body;

  if (!usuario || !apodo || !contrasena) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  const sql = 'INSERT INTO users (usuario, apodo, contrasena) VALUES (?, ?, ?)';
  
  db.query(sql, [usuario, apodo, contrasena], (err, result) => {
    if (err) {
      console.error('Error al registrar usuario:', err);
      res.status(500).send('Error al registrar usuario');
    } else {
      console.log('Usuario registrado:', result);
      res.status(201).send('Usuario registrado con éxito');
    }
  });
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
