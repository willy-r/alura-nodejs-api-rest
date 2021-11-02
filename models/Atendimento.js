const moment = require('moment');
const conexao = require('../db/conexao');

/**
 * Trata os dados da aplicação em relação aos atendimentos,
 * aplicando regras de negócio quando necessário e tratandos os dados.
 */
class Atendimento {
  add(atendimento, res) {
    const atendimentoOuErro = this._trataDados(atendimento);

    if (atendimentoOuErro.existemErros) {
      res.status(400).json(atendimentoOuErro.data);
    } else {
      const query = 'INSERT INTO atendimento SET ?;';

      conexao.query(query, atendimentoOuErro.data, (err, results) => {
        if (err) {
          res.status(400).json(err);
        } else {
          res.status(201).json(results);
        }
      });
    }
  }
  
  /**
   * Trata os dados antes de enviar para o banco de dados, aplicando regras de negócio.
   * Regras de negócio;
   *   1. Data de agendamento tem que ser depois ou a mesma da data de atendimento (impossível agendar algo para o passado).
   *   2. Precisa existir um nome, pelo menos um nome humano para identificação.
   */
  _trataDados(atendimento) {
    const dataAtendimento = moment().format('YYYY-MM-DD HH:mm:ss'),
          dataAgendamento = moment(
            atendimento.data_agendamento, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');

    const validacoes = [
      { 
        nome: 'data_agendamento',
        valido: this._validaData(dataAtendimento, dataAgendamento),
        mensagem: 'Data de agendamento deve ser maior ou igual a data atual', 
      },
      {
        nome: 'nome_cliente',
        valido: this._validaNomeCliente(atendimento.nome_cliente),
        mensagem: 'Nome do cliente deve ter pelo menos cinco caracteres', 
      },
    ];
    // Verifica se existe algum erro.
    const erros = validacoes.filter((errObj) => !errObj.valido);

    if (erros.length)
      return {
        existemErros: true,
        data: erros,
      };

    return {
      existemErros: false,
      data: {
        ...atendimento,
        data_atendimento: dataAtendimento,
        data_agendamento: dataAgendamento,
      },
    };
  }

  _validaData(atendimento, agendamento) {
    return moment(agendamento).isSameOrAfter(atendimento);
  }

  _validaNomeCliente(nome) {
    return nome.length >= 5;
  }

  lista(res) {
    const query = 'SELECT * FROM atendimento;';

    conexao.query(query, (err, results) => {
      if (err)
        res.status(400).json(err);
      else
        res.status(200).json(results);
    });
  }

  buscaPorId(id, res) {
    const query = `
      SELECT * FROM atendimento
      WHERE id_atendimento = ?;
    `;

    conexao.query(query, id, (err, results) => {
      if (err)
        res.status(404).json(err);
      else
        res.status(200).json(results[0]);
    });
  }
}

module.exports = new Atendimento;
