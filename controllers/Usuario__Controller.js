const db = require('../config/db');
const mysql = require('mysql');
const bcrypt = require('bcrypt')
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
            const hashedPassword = await bcrypt.hash(password, 10);


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
                hashedPassword,
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
    //*{ }*//

module.exports = { Crear_Usuario };