const moment = require('moment');
const conexao = require('../db/conexao');

/**
 * Trata os dados da aplicação em relação aos atendimentos,
 * aplicando regras de negócio quando necessário e tratandos os dados.
 */
class Atendimento {
  add(atendimento) {
    atendimento = this._trataDados(atendimento);

    const query = 'INSERT INTO atendimento SET ?;';

    conexao.query(query, atendimento, (err, results) => {
      if (err)
        console.log(err);
      else
        console.log(results);
    });
  }

  _trataDados(atendimento) {
    const dataAgendamento = moment().format('YYYY-MM-DD HH:MM:SS'),
          dataAtendimento = moment(
            atendimento.data_atendimento, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS');

    return {
      ...atendimento,
      data_agendamento: dataAgendamento,
      data_atendimento: dataAtendimento,
    };
  }
}

module.exports = new Atendimento;
