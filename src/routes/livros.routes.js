const express = require("express");

const router = express.Router();

const livrosCountrouller = require('../controllers/livros.controllers');

router.get('/', livrosCountrouller.listarLivros);
router.post('/', livrosCountrouller.cadastrarLivros);
router.get('/:id', livrosCountrouller.buscarLivrosPorId);

module.exports = router;