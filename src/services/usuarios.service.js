const usuarios = [
    
    {
        id: 1,
        nome: "Malcon",
        email: "paidomalcon@gmail.com",
    },

    {
        id: 2,
        nome: "Carlos",
        email: "batata@gmail.com",
    },

    {
        id: 3,
        nome: "Miles",
        email: "miles@gmail.com",
    },
];

//Listar todos os usuarios
const listarTodosUsuarios = async () => {
    return usuarios
};

//Buscar usuario pelo id
const buscarUsuarioPorId = async (id) => {
    const usuario = usuarios.find(item => item.id === Number(id));
    return usuario || null;
};

//Criar novo usuario
const criarUsuario = async ({nome, email}) => {
   if (!nome || !email){
    throw new Error('Nome e email são obrigatórios');
   }
   const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    email,
   };
    usuarios.push(novoUsuario);
    return novoUsuario;
};

module.exports = {listarTodosUsuarios, buscarUsuarioPorId, criarUsuario};