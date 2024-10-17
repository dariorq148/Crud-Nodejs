const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const Login = async(req, res) => {
    try {
        const { correo_electronico, password } = req.body;
        const verificador = 'SELECT * FROM personas WHERE correo_electronico = ?';

        db.query(verificador, [correo_electronico], async(selectError, result) => {
            if (selectError) {
                console.log('Error al consultar el usuario:', selectError);
                return res.status(500).json({ message: 'Error al consultar el usuario' });
            }

            if (result.length === 0) {
                console.log('El usuario no existe');
                return res.status(404).json({ message: 'El usuario no existe' });
            }

            const usuario = result[0];
            const match = await bcrypt.compare(password, usuario.password);

            if (!match) {
                return res.status(401).json({ message: 'Contraseña incorrecta' });
            }
            ///token
            const token = jwt.sign({ id: usuario.id, email: usuario.correo_electronico },
                'mitoken', { expiresIn: '1h' }
            );

            return res.status(200).json({ message: 'Inicio de sesión exitoso', token: token });
        });
    } catch (error) {
        console.error('Error interno:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

// Prueba 
const loginprueba = async() => {
    const req = {
        body: {
            correo_electronico: 'aaa@adawdj.com',
            password: 'las cwkda'
        }
    };

    const res = {
        status: (code) => {
            console.log('Status Code:', code);
            return {
                json: (data) => console.log('Response:', data)
            };
        }
    };

    await Login(req, res);
};

loginprueba();

module.exports = { Login };