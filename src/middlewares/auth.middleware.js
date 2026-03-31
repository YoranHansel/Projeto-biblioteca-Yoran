const CHAVE_ACESSO = 'Biblioteca-ralph-teddy';

const autenticar = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const authBody = req.body['authorization'];

    if (!authHeader) {
        return res.status(401).json({
            erro: 'Acesso negado: Usuário não identificado!'
        });
    };

    if (!authBody) {
        return res.status(401).json({
            erro: 'Acesso negado: Usuário não identificado!'
        });
    };

    const token = authHeader.split(' ')[1];
    const tokenBody = authBody.split(' ')[1];

    if (token !== CHAVE_ACESSO) {
        return res.status(403).json({
            erro: 'Acesso proibído!'
        });
    };

    if (tokenBody !== CHAVE_ACESSO) {
        return res.status(403).json({
            erro: 'Acesso proibído!'
        });
    };


    next();
};

module.exports = {autenticar};