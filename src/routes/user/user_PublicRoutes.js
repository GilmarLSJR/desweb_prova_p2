// Importa o framework Express
const express = require('express');

// Importa o controller responsável por gerenciar as ações de usuário
const user_PublicController = require('../../controllers/user/user_PublicController');

// Cria uma nova instância de roteador do Express
const router = express.Router();

// Define a rota para criar um novo usuário
router.post('/create', user_PublicController.create);

// Define a rota para login de um usuário
router.post('/login', user_PublicController.login);

module.exports = router; // Exporta o roteador configurado para ser usado no app principal
