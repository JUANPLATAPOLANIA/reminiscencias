const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();

// Configuración de CORS para permitir solicitudes desde cualquier origen
app.use(cors());
app.use(bodyParser.json());

// Configura la conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: '192.168.20.18',  // IP de tu servidor PostgreSQL
  database: 'Registro_usuarios',
  password: '12345678',
  port: 5432,
});

// Ruta para registrar usuario
app.post('/register', async (req, res) => {
  const { usuario, apodo, contrasena } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO usuarios (usuario, apodo, contrasena) VALUES ($1, $2, $3) RETURNING *',
      [usuario, apodo, contrasena]
    );
    res.status(201).json(result.rows[0]); // Respuesta con datos del usuario registrado
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
});

// Ruta para autenticar usuario (login)
app.post('/ingreso', async (req, res) => {
  const { usuario, contrasena } = req.body;

  try {
    console.log('Datos recibidos para autenticación:', { usuario, contrasena });

    const result = await pool.query(
      'SELECT * FROM usuarios WHERE usuario = $1 AND contrasena = $2',
      [usuario, contrasena]
    );

    if (result.rows.length > 0) {
      res.json({ success: true, message: 'Autenticación exitosa' });
    } else {
      res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
    }
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ success: false, message: 'Error en el servidor' });
  }
});

const PORT = 3000;
app.listen(PORT, '192.168.20.18', () => {
  console.log(`Servidor corriendo en http://192.168.20.18:${PORT}`);
});
