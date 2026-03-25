const acervo = [
    
    {
        id: 1,
        titulo: "Batata suprema",
        autor: "Turip potato",
        disponível: true,
    },

    {
        id: 2,
        titulo: "Tomates jogados",
        autor: "Vermelito tomatito",
        disponível: true,
    },

    {
        id: 3,
        titulo: "Extraordinário",
        autor: "Raquel Jaramillo",
        disponível: true,
    },
];

//Listar todos os livros
const listarTodosLivros = async () => {
    return acervo
};

//Buscar livro pelo id
const buscarLivroPorId = async (id) => {
    const livro = acervo.find(item => item.id === Number(id));
    return livro || null;
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