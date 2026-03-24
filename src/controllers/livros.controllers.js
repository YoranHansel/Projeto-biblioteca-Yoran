const livrosService = require('../services/livros.services');

//Get livros
const listarLivros = async (req, res) => {
    try {
        const livros = await livrosService.listarTodosLivros();
        res.status(200).json({ total: livrosService.length, livros });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao buscar os livros' });
    }
};

const buscarLivrosPorId = async (req, res) => {
    try {
        const livros = await livrosService.buscarLivroPorId(req.params.id);
        res.status(200).json({ total: livrosService.length, livros });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao buscar os livros' });
    }
};

module.exports = { listarLivros, buscarLivrosPorId };