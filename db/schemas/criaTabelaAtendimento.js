const query = `
  CREATE TABLE atendimento (
    id_atendimento INT PRIMARY KEY AUTO_INCREMENT,
    nome_cliente VARCHAR(50) NOT NULL,
    nome_pet VARCHAR(20),
    servico VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    observacoes TEXT
  );
`;

module.exports = query;
