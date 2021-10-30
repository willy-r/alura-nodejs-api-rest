const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');

// Conecta com o banco de dados.
// Faz sentido subir o servidor mesmo se o banco falhar em conectar?
conexao.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    // Conexão com o banco deu certo, ativa o servidor.
    console.log('Conectado no banco de dados com sucesso!');
    
    const app = customExpress();
    const PORT = 3000;

    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  }
});
