const conexao = require('../db/conexao');

/**
 * Trata os dados da aplicação em relação aos atendimentos,
 * aplicando regras de negócio quando necessário e tratandos os dados.
 */
class Atendimento {
  add(atendimento) {
    const query = 'INSERT INTO atendimento SET ?;';

    conexao.query(query, atendimento, (err, results) => {
      if (err)
        console.log(err);
      else
        console.log(results);
    });
  }
}

module.exports = new Atendimento;
