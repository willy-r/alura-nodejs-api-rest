// Configurações customizadas para o express.

const express = require('express');
const consign = require('consign');

module.exports = () => {
  const app = express();

  // O consign faz a "ligação" das rotas para que o app consiga acessá-las de outra pasta.
  consign().include('controllers').into(app);

  return app;
}
