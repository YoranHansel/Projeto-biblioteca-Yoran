const express = require("express");

const router = express.Router();

const livrosCountrouller = require('../controllers/livros.controllers');

router.get('/', livrosCountrouller.listarLivros);

module.exports = router;