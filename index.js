require('dotenv').config()

const customExpress = require('./config/customExpress');
const conexao = require('./db/conexao');
const Tabelas = require('./db/Tabelas');

// Conecta com o banco de dados.
// Faz sentido subir o servidor mesmo se o banco falhar em conectar?
conexao.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    // Conexão com o banco deu certo, ativa o servidor.
    console.log('Conectado no banco de dados com sucesso!');

    // Cria as tabelas se não existirem.
    Tabelas.init(conexao);
    
    const app = customExpress();
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  }
});
