const queryCriaTabelaAtendimento = require('./schemas/criaTabelaAtendimento');

class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criaTabelaAtendimento();
  }

  criaTabelaAtendimento() {
    // Recebe uma query SQL, e uma função que será chamada dps que a query for executada.
    this.conexao.query(queryCriaTabelaAtendimento, (err) => {
      if (err)
        console.log(err);
      else
        console.log('Tabela "atendimento" criada com sucesso!');
    });
  }
}

module.exports = new Tabelas;
