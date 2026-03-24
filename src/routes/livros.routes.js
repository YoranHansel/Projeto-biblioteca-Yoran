const express = require("express");

const router = express.Router();

const livrosCountrouller = require('../controllers/livros.controllers');

router.get('/', livrosCountrouller.listarLivros);
router.get('/:id', livrosCountrouller.buscarLivrosPorId);

module.exports = router;