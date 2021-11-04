const mysql2 = require('mysql2');

// Configura a conexão do banco de dados.
const conexao = mysql2.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = conexao;
