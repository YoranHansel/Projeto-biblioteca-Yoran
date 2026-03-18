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
    const livro = acervo.find(item => item.id === Nunber(id));
    return livro || null;
};

module.exports = {lsitarTodosLivros, buscarLivroPorId};