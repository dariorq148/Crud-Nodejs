class Usuario {
    constructor(id_persona, nombre, apellido, dni, fecha_nacimiento,
        sexo, direccion, telefono, correo_electronico, id_ciudad, password) {
        this.id_persona = id_persona;
        this.id_ciudad = id_ciudad;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fecha_nacimiento = fecha_nacimiento;
        this.sexo = sexo;
        this.direccion = direccion;
        this.telefono = telefono;
        this.correo_electronico = correo_electronico;
        this.password = password;
    }


    actualizar_datos_usuario(nuevo_nombre, nuevo_apellido,
        nueva_direccion, nuevo_telefono, nuevo_correo, nuevo_password) {
        this.nombre = nuevo_nombre;
        this.apellido = nuevo_apellido;
        this.direccion = nueva_direccion;
        this.telefono = nuevo_telefono;
        this.correo_electronico = nuevo_correo;
        this.password = nuevo_password;
    }
}

module.exports = Usuario;