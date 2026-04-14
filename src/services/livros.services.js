const pool = require('../database/connection');

//Listar todos os livros
const listarTodosLivros = async () => {
    try {
        const resultado = await pool.query('SELECT * FROM livros ORDER BY id');
        return resultado.rows;
    } catch(error){
        console.log('Erro ao listar todos os livros', error.message);
        throw error;
    };
};

//Buscar livro pelo id
const buscarLivroPorId = async (id) => {
    const resultado = await pool.query('SELECT * FROM livros WHERE id = $1',[
        id,
    ]);
    return resultado.rows[0];
};

const cadastrarLivros = async (livro) => {
    const novoLivro = {
        id: acervo.length + 1,
        ...livro
    };
    acervo.push(novoLivro);
    return novoLivro;
};


module.exports = {listarTodosLivros, buscarLivroPorId, cadastrarLivros};