const pool = require('../database/connection');

//Listar todos os livros
const listarTodosLivros = async () => {
    try {
        const query = `SELECT livros.id, livros.titulo, livros.autor, livros.isbn, categoria.nome AS categoria FROM livros LEFT JOIN categorias ON livros.categoria_id = categorias.id ORDER BY id`
        const resultado = await pool.query(query)
        return resultado.rows;
    } catch (error) {
        console.log('Erro ao listar todos os livros', error.message);
        throw error;
    };
};

//Buscar livro pelo id
const buscarLivroPorId = async (id) => {
    const resultado = await pool.query('SELECT * FROM livros WHERE id = $1', [
        id,
    ]);
    return resultado.rows[0];
};

const criarLivro = async ({ titulo, autor, isbn, ano_publicacao, categoria_id  }) => {
    try {
        const query = `INSERT INTO livros (titulo, autor, isbn, ano_publicacao, categoria_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`
        const resultado = await pool.query(query, [
            titulo,
            autor,
            isbn,
            ano_publicacao,
            categoria_id,
        ]);
        return resultado.rows[0];
    } catch (error) {
        if(error.code === '23505'){
          const error = new Error('ISBN já cadastrado no sistema');
          error.status = 400;
          throw error;
        };

        if(err){

        };
     };
};

module.exports = { listarTodosLivros, buscarLivroPorId, criarLivro };