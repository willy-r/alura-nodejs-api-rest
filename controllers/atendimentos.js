// Controla as rotas, o que cada rota tem que fazer quando elas forem acessadas.

module.exports = (app) => {
  // req = requisição, o que tá vindo
  // res = resposta, o que tá indo
  app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos, e está realizando um GET!'));

  app.post('/atendimentos', (req, res) => {
    console.log(req.body);
    res.send('Você está na rota de atendimentos, e está realizando um POST!')
  });
}
