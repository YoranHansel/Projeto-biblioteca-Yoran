const express = require("express");

const router = express.Router();

const usuariosCountrouller = require('../controllers/usuarios.controllers');

router.get('/', usuariosCountrouller.listarUsuarios);
router.get('/:id', usuariosCountrouller.buscarUsuariosPorId);
router.post('/', usuariosCountrouller.CriarUsuario);

module.exports = router;