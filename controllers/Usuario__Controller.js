const db = require('../config/db');
const mysql = require('mysql');

const Crear_Usuario = async(req, res = null) => {
    try {
        const {
            nombre,
            apellido,
            dni,
            fecha_nacimiento,
            sexo,
            direccion,
            telefono,
            correo_electronico,
            id_ciudad,
            password
        } = req.body;
        const insert_query = `INSERT INTO personas ( nombre,
            apellido,
            dni,
            fecha_nacimiento,
            sexo,
            direccion,
            telefono,
            correo_electronico,
            id_ciudad,
            password) VALUES(?,?,?,?,?,?,?,?,?,?)`;
        db.query(insert_query, [
            nombre,
            apellido,
            dni,
            fecha_nacimiento,
            sexo,
            direccion,
            telefono,
            correo_electronico,
            id_ciudad,
            password,
        ], (insertError, result) => {
            if (insertError) {
                console.log('error al insertar usuario ' + insertError);
                if (res) {
                    return res.status(500).json({ message: 'error al insertar usuario' });
                }
            } else {
                if (res) {
                    return res.status(200).json({ message: 'usuario insertado con exito' });
                }
                console.log('insertado correctamente');

            }
        });
    } catch (error) {
        console.log(error);

    }
}

const prueba = async() => {
    const req = {
        body: {
            nombre: 'danirl',
            apellido: 'ramos',
            dni: '1581105',
            fecha_nacimiento: '2000-05-04',
            sexo: 'M',
            direccion: 'av xxx',
            telefono: 5851,
            correo_electronico: '@adawdj.com',
            id_ciudad: 2,
            password: 'las cwkda'

        }
    };
    await Crear_Usuario(req);
}
prueba();
module.exports = { Crear_Usuario };