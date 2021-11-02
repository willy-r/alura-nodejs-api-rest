const Atendimento = require('../models/Atendimento');

// Controla as rotas, o que cada rota tem que fazer quando elas forem acessadas.
module.exports = (app) => {
  // req = requisição, o que tá vindo
  // res = resposta, o que tá indo
  app.get('/atendimentos', (_, res) => Atendimento.lista(res));

  app.get('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Atendimento.buscaPorId(id, res);
  });

  app.post('/atendimento/criar', (req, res) => {
    const atendimento = req.body;
    
    Atendimento.add(atendimento, res);
  });
}
