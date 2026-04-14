require('dotenv').config();

const {Pool} = require('pg');

const pool = new Pool({
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   database: process.env.DB_NAME,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,

});

(async () => {
    try {
        const client = await pool.connect();
        console.log('Conexão com Postgres realizada');
        client.release();
    }catch (error){
     console.log('Erro ao conectar com o banco');
     process.exit(1);
    };
})();

module.exports = pool;