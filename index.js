const express = require('express');
const rotas = require('./src/routes/index.routes');
const {logger, errorHandler} = require('./src/middlewares/main.middlewares');
const app = express();

app.use(express.json());

rotas.use(logger);

// Utilizando as rotas
app.use(rotas);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Api rodando em http://localhost:${PORT}`)
});