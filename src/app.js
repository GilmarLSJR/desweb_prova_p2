// Importa o framework Express, utilizado para criar o servidor HTTP e gerenciar rotas
const express = require('express');

// Importa o middleware Morgan para registrar as requisições HTTP no terminal (útil para depuração e monitoramento)
const morgan = require('morgan');

// Importa o middleware que permite o compartilhamento de recursos entre diferentes origens (Cross-Origin Resource Sharing)
const cors = require('cors');

// Importa o middleware de segurança que adiciona cabeçalhos HTTP para proteger contra ataques comuns
const helmet = require('helmet');

// Importa as rotas relacionadas as adoções - Public
const adoptions_PublicRoutes = require('./routes/adoptions/adoptions_PublicRoutes');

// Importa as rotas relacionadas aos pets - Public
const pets_PublicRoutes = require('./routes/pets/pets_PublicRoutes');

// Importa as rotas relacionadas aos usuários - Protected
const user_ProtectedRoutes = require('./routes/user/user_ProtectedRoutes');

// Importa as rotas relacionadas aos usuários - Public
const user_PublicRoutes = require('./routes/user/user_PublicRoutes');

// Importa o middleware para tratamento de erros relacionado as adoções
const adoptions_ErrorMiddleware = require('./middlewares/adoptions_ErrorMiddleware');

// Importa o middleware para tratamento de erros relacionado aos pets
const pets_ErrorMiddleware = require('./middlewares/pets_ErrorMiddleware');

// Importa o middleware para tratamento de erros relacionado aos usuários
const user_ErrorMiddleware = require('./middlewares/user_ErrorMiddleware');

// // Importa o middleware para tratamento de erros genéricos
// const errorMiddleware = require('./middlewares/errorMiddleware');

// Cria uma instância do aplicativo Express
const app = express();

// Middlewares globais
// Usa o morgan com o formato 'dev' (colorido e resumido)
app.use(morgan('dev'));

// Habilita o CORS em todas as rotas da aplicação
app.use(cors());

// Adiciona proteção automática contra vulnerabilidades HTTP
app.use(helmet());

// Permite que o servidor interprete requisições com corpo em formato JSON
app.use(express.json());

// Rotas da aplicação
// Define que todas as requisições iniciadas com /adoptions/public serão encaminhadas para o arquivo adoptions_PublicRoutes
app.use('/adoptions/public', adoptions_PublicRoutes);

// Define que todas as requisições iniciadas com /pets/public serão encaminhadas para o arquivo pets_PublicRoutes
app.use('/pets/public', pets_PublicRoutes);

// Define que todas as requisições iniciadas com /user/protected serão encaminhadas para o arquivo user_ProtectedRoutes
app.use('/user/protected', user_ProtectedRoutes);

// Define que todas as requisições iniciadas com /user/public serão encaminhadas para o arquivo user_PublicRoutes
app.use('/user/public', user_PublicRoutes);

// Middleware de tratamento de erros (deve ser adicionado depois das rotas)
// Middleware que captura e trata erros, enviando respostas ao cliente - Relacionado as adoções
app.use(adoptions_ErrorMiddleware);

// Middleware que captura e trata erros, enviando respostas ao cliente - Relacionado aos pets
app.use(pets_ErrorMiddleware);

// Middleware que captura e trata erros, enviando respostas ao cliente - Relacionado aos usuários
app.use(user_ErrorMiddleware);

// // Middleware que captura e trata erros, enviando respostas ao cliente - Genérico
// // Esse middleware captura qualquer erro não tratado pelos middlewares anteriores
// app.use(errorMiddleware);

// Exporta a aplicação configurada para ser utilizada pelo servidor (server.js)
module.exports = app;
