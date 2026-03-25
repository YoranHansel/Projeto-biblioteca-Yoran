const express = require('express');
const router = express.Router();
const livrosRoutes = require('./livros.routes');
const usuariosRoutes = require('./usuarios.routes');
const { logger } = require('../middlewares/main.middlewares');

//1.Rotas de Recursos (Coloque SEMPRE antes do 404)
router.use(logger); // Middleware de logger para todas as rotas
router.use('/livros', livrosRoutes);
router.use('/usuarios', usuariosRoutes);


//2.Rota Raiz
router.get('/', (req, res) => {
    res.json({sistema: 'Biblioteca Ralph & Teddy', status: 'Online'});
});

//3.Rota 404 (A última linha deste arquivo)
router.use((req, res) => {
    res.status(404).json({ erro: 'Rota não encontrada na Biblioteca Ralph & Teddy' });
});

module.exports = router;