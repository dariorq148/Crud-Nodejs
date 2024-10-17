class Ciudad {
    constructor(nombre__ciudad, id_ciudad) {
        this.nombre__ciudad = nombre__ciudad;
        this.id_ciudad = id_ciudad;

    }
    actualizarCiudad(nueva_ciudad) {
        this.nombre__ciudad = this.nueva_ciudad;
    }

}
module.exports = Ciudad;


const mysql = require('mysql')
const db = require('../config/db')

const crear_ciudad = async(req, res = null) => {
    try {
        const {
            nombre__ciudad,

        } = req.body;
        const insertar_ciudad = 'INSERT INTO ciudad(ciudad) values(?)';
        db.query(crear_ciudad, [nombre__ciudad, ], (insert_error, result) = {
                if (insert_error) {
                    console.log('error al insertar ciudad ' + insert_error);
                    if (res) {
                        return res.status(500).json({ message: 'error al crear ciudad' });
                    }
                },
                if (result) {
                    console.log('ciudad creada');
                    return res.status(201).json({ message: 'ciudad creada' })
                }
            }



        );
    } catch (error) {
        console.log(error);

    }
}