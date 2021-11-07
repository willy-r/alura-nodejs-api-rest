# Curso Rest com NodeJS e MySQL - Alura

Anotações e código do curso [Rest com NodeJS: API REST com Express e MySQL](https://cursos.alura.com.br/course/node-rest-api) da Alura.

Com esse curso foi ensinado o básico sobre como tratar algumas requisições como **GET**, **POST**, **PATCH**, **DELETE**. Além de ensinar como usar o MySQL como banco de dados principal para a aplicação. Com isso foi possível construir uma aplicação API REST usando CRUD para os atendimentos de um Pet Shop.


## Variáveis de ambiente

Para rodar o projeto localmente corretamente, é necessário adicionar algumas variáveis de ambiente no seu arquivo `.env`.

#### Banco de dados

- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`

#### Servidor, etc

- `PORT`


## API Rotas

Rotas cadastradas para fazer requisições:

| Método | Rota | Ação |
| ------ | ---- | ---- |
| GET | /atendimentos | Busca todos os atendimentos cadastrados |
| GET | /atendimentos/3 | Busca o atendimento com o id=3 |
| POST | /atendimentos | Adiciona um novo atendimento |
| PATCH | /atendimentos/3 | Atualiza alguns campos do atendimento com o id=3 |
| DELETE | /atendimentos/3 | Deleta o atendimento com o id=3 |


## Rodando o projeto localmente

Clone e vá para o diretório do projeto:

```bash
git clone https://github.com/willy-r/alura-nodejs-api-rest.git
cd alura-nodejs-api-rest
```

Instale as dependências e inicie o servidor:

```bash
npm install
npm start
```
