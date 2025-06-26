// Importa a biblioteca mysql2 para trabalhar com o MySQL de forma assíncrona
const mysql = require('mysql2/promise');

// Carrega variáveis de ambiente a partir de um arquivo .env
require('dotenv').config();

// Cria a conexão com o banco de dados usando um pool de conexões
const pool = mysql.createPool({
  host: process.env.DB_HOST, // Endereço do servidor de banco de dados (a variável de ambiente DB_HOST)
  user: process.env.DB_USER, // Usuário para autenticação no banco de dados (a variável de ambiente DB_USER)
  password: process.env.DB_PASSWORD, // Senha do usuário para autenticação (a variável de ambiente DB_PASSWORD)
  database: process.env.DB_DATABASE, // Nome do banco de dados a ser utilizado (a variável de ambiente DB_DATABASE)
  waitForConnections: true, // Configura para aguardar as conexões caso todas as conexões estejam ocupadas
  connectionLimit: 10, // Limita o número máximo de conexões simultâneas ao banco de dados
  queueLimit: 0, // Número máximo de requisições enfileiradas (0 = sem limite)
});

// Exporta o pool de conexões para ser usado em outros módulos
module.exports = pool;
