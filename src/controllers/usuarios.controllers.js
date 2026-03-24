const usuariosService = require('../services/usuarios.services');

//Get usuarios
const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await usuariosService.listarTodosUsuarios();
        res.status(200).json({ total: usuariosService.length, usuarios });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao buscar os usuarios' });
    }
};

//Get /usuarios/:id
const buscarUsuariosPorId = async (req, res) => {
    try {
        //Extrai o parâmetro da URL - essa é a responsabilidade do controller
        const { id } = req.params;
        const usuario = await usuariosService.buscarUsuarioPorId(id);
        
        //Se o Service retornar null, o usuario não existe
        if (!usuario) {
            return res.status(404).json({ erro: 'Usuario não encontrado' });
        }
        res.status(200).json({ total: usuariosService.length, usuario });
    } catch (error) {
        res.status(500).json({ erro: 'Erro interno ao buscar o usuario' });

    }
};

//POST /usuarios
const CriarUsuario = async (req, res) => {
    try {
        //Extrai os dados do corpo da requisição
        const { nome, email } = req.body;
        const novoUsuario = await usuariosService.criarUsuario({ nome, email });
        
        //201 = created - status correto para criação bem sucedida
        
        res.status(201).json({ 
            mensagem: 'Usuario criado com sucesso',
            usuario: novoUsuario,
        });
        
    } catch (error) {
        //Se o service lançou um erro de validação, retornamos 400
        res.status(400).json({ erro: erro.message });

    }
};

module.exports = { listarUsuarios, buscarUsuariosPorId, CriarUsuario };