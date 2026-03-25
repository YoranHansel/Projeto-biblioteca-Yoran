const express = require('express');
const rotas = require('./src/routes/index.routes');

const app = express();

app.use(express.json());

//Registro das rotas

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); 
});

app.use(rotas);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Api rodando em http://localhost:${PORT}`)
});