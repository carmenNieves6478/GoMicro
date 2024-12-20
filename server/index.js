const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcryptjs');

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'rutas_db',
});

// Verificar la conexión
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado exitosamente a la base de datos');
});

app.post('/login', async (req, res) => {
    try {
        const { loginuserName, loginpassword } = req.body;

        // Validar que se proporcionaron las credenciales
        if (!loginuserName || !loginpassword) {
            return res.status(400).json({ message: 'Por favor ingrese todos los campos' });
        }

        // Buscar el usuario en la base de datos
        const SQL = 'SELECT * FROM users WHERE username = ?';
        db.query(SQL, [loginuserName], async (err, results) => {
            if (err) {
                console.error('Error en la consulta:', err);
                return res.status(500).json({ message: 'Error del servidor' });
            }

            if (results.length === 0) {
                return res.status(401).json({ message: 'Usuario no encontrado' });
            }

            const user = results[0];
            const passwordMatch = await bcrypt.compare(loginpassword, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ message: 'Contraseña incorrecta' });
            }

            // Si todo está bien, enviar respuesta exitosa
            res.status(200).json({
                success: true,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email
                }
            });
        });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error del servidor' });
    }
});
/* 
// Login de usuarios
app.post('/login', async (req, res) => {
    try {
        const { loginuserName, loginpassword } = req.body;

        // Primero buscar el usuario
        const SQL = 'SELECT * FROM users WHERE username = ?';

        db.query(SQL, [loginuserName], async (err, results) => {
            if (err) {
                console.error('Error en login:', err);
                return res.status(500).json({ error: 'Error en el servidor' });
            }

            if (results.length === 0) {
                return res.status(401).json({ message: "Usuario no encontrado" });
            }

            // Verificar la contraseña
            const user = results[0];
            const passwordMatch = await bcrypt.compare(loginpassword, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ message: "Credenciales incorrectas" });
            }

            // Si todo está bien, enviar la respuesta (excluyendo la contraseña)
            const { password, ...userWithoutPassword } = user;
            res.json(userWithoutPassword);
        });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

// Obtener lugares únicos
app.get('/api/lugares', (req, res) => {
    const SQL = 'SELECT DISTINCT lugar FROM routes';
    db.query(SQL, (err, results) => {
        if (err) {
            console.error('Error obteniendo lugares:', err);
            return res.status(500).json({
                success: false,
                message: 'Error en la consulta: ' + err.message
            });
        }
        res.json(results);
    });
});

// Obtener rutas por lugar y destino
app.post('/api/routes', (req, res) => {
    const { lugar, destino, referencia } = req.body;
    const SQL = `
        SELECT * FROM routes 
        WHERE lugar = ? 
        AND (punto_inicio LIKE ? OR punto_fin LIKE ?)
        AND (referencia LIKE ?)
    `;
    const searchDestino = `%${destino}%`;
    const searchRef = `%${referencia}%`;

    db.query(SQL, [lugar, searchDestino, searchDestino, searchRef], (err, results) => {
        if (err) {
            console.error('Error obteniendo rutas:', err);
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }
        res.json(results);
    });
});

// Guardar nueva ruta
app.post('/api/save-route', (req, res) => {
    const { nombre, punto_inicio, punto_fin, coordenadas, referencia, nombre_lugar } = req.body;

    if (!nombre || !punto_inicio || !punto_fin || !coordenadas || !nombre_lugar) {
        return res.status(400).json({
            success: false,
            message: 'Todos los campos son obligatorios'
        });
    }

    const SQL = `
        INSERT INTO routes (nombre, punto_inicio, punto_fin, coordenadas, referencia, lugar) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    const values = [nombre, punto_inicio, punto_fin, coordenadas, referencia, nombre_lugar];

    db.query(SQL, values, (err, result) => {
        if (err) {
            console.error('Error guardando ruta:', err);
            return res.status(500).json({
                success: false,
                message: 'Error al guardar la ruta: ' + err.message
            });
        }
        res.json({
            success: true,
            message: 'Ruta guardada exitosamente'
        });
    });
}); */

app.listen(3002, () => {
    console.log('Servidor corriendo en puerto 3002');
});

app.get('/test', (req, res) => {
    db.query('SELECT 1', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error de conexión a la base de datos' });
            return;
        }
        res.json({ message: 'Conexión exitosa a la base de datos' });
    });
});