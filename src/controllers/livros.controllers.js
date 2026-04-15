const livrosService = require('../services/livros.services');

//Get livros
const listarLivros = async (req, res, next) => {
    try {
        const livros = await livrosService.listarTodosLivros();
        res.status(200).json({ total: livros.length, livros });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao buscar os livros' });
    } 
};

const buscarLivrosPorId = async (req, res) => {
    try {
        const livro = await livrosService.buscarLivroPorId(req.params.id);
        if (!livro) {
            return res.status(404).json({ erro: 'Livro não encontrado' });
        }
        res.status(200).json({ livro });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao buscar o livro' });
    }
};

//post criar livro
const criarLivro = async (req, res) => {
    try {
        const { titulo, autor, isbn, ano_publicacao, categoria_id } = req.body;
        const livro = await livrosService.criarLivro({ titulo, autor, isbn, ano_publicacao, categoria_id });
        res.status(201).json({ mensagem: 'Livro criado com sucesso', livro });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

//put atualizar livro
const atualizarLivro = async (req, res) => {
    try {
        const { titulo, autor, isbn, ano_publicacao, categoria_id } = req.body;
        const livro = await livrosService.atualizarLivro(req.params.id, { titulo, autor, isbn, ano_publicacao, categoria_id });
        if (!livro) {
            return res.status(404).json({ erro: 'Livro não encontrado' });
        }
        res.status(200).json({ mensagem: 'Livro atualizado com sucesso', livro });
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

//delete deletar livro
const deletarLivro = async (req, res) => {
    try {
        const livro = await livrosService.deletarLivro(req.params.id);
        if (!livro) {
            return res.status(404).json({ erro: 'Livro não encontrado' });
        }
        res.status(200).json({ mensagem: 'Livro deletado com sucesso', id: livro.id });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao deletar o livro' });
    }
};


module.exports = { listarLivros, buscarLivrosPorId, criarLivro, atualizarLivro, deletarLivro };