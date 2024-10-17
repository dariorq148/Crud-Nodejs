const express = require('express');
const router = express.Router();
const { Crear_Usuario } = require('../controllers/Usuario__Controller');
const { Login } = require('../auth/login')
    ///login
router.post('/login', Login);

// crear un usuario
router.post('/usuario', Crear_Usuario);

module.exports = router;