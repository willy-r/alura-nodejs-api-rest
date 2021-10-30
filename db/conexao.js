const mysql2 = require('mysql2');

// Configura a conexão do banco de dados.
const conexao = mysql2.createConnection({
  host: 'localhost',
  port: 2442,
  user: 'root',
  password: '1234',
  database: 'agenda_petshop',
});

module.exports = conexao;
