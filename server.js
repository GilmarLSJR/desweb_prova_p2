// Carrega variáveis de ambiente a partir de um arquivo .env
require('dotenv').config();

// Importa o app já configurado (rotas, middlewares e tratamento de erros)
const app = require('./src/app');

// Define a porta do servidor a partir da variável de ambiente PORT ou usa a porta 3000 como padrão
const PORT = process.env.PORT || 3000;

// Inicia o servidor Express para escutar na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
