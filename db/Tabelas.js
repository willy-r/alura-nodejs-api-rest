class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criaTabelaAtendimento();
  }

  criaTabelaAtendimento() {
    const query = `
      CREATE TABLE IF NOT EXISTS atendimento (
        id_atendimento INT PRIMARY KEY AUTO_INCREMENT,
        nome_cliente VARCHAR(50) NOT NULL,
        nome_pet VARCHAR(20),
        servico VARCHAR(20) NOT NULL,
        status VARCHAR(20) NOT NULL,
        observacoes TEXT
      );
    `;

    // Recebe uma query SQL, e uma função que será chamada dps que a query for executada.
    this.conexao.query(query, (err) => {
      if (err)
        console.log(err);
      else
        console.log('Tabela "atendimento" criada com sucesso!');
    });
  }
}

module.exports = new Tabelas;
