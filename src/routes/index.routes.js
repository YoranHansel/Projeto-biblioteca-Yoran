const express = require('express');
const router = express.Router();
const livrosRoutes = require('./livros.routes');
const usuriosRoutes = require('./usuarios.routes');

//1.Rotas de Recursos (Coloque SEMPRE antes do 404)
router.use('/livros', livrosRoutes);
router.use('/usuarios', usuriosRoutes);

//2.Rota Raiz
router.get('/', (req, res) => {
    res.json({sistema: 'Bivlioteca Ralph & Teddy', status: 'Online'});
});

//3.Rota 404 (A última linha deste arquivo)
router.use((req, res) => {
    res.status(404).json({ erro: 'Rota não encontrada na Biblioteca Ralph & Teddy' });
});

module.exports = router;