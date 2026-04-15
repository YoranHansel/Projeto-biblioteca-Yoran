const express = require("express");

const router = express.Router();

const livrosCountrouller = require('../controllers/livros.controllers');

router.get('/', livrosCountrouller.listarLivros);
router.post('/', livrosCountrouller.criarLivro);
router.get('/:id', livrosCountrouller.buscarLivrosPorId);
router.put('/:id', livrosCountrouller.atualizarLivro);
router.delete('/:id', livrosCountrouller.deletarLivro);

module.exports = router;