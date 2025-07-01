// Importa o framework Express
const express = require('express');

// Importa o controller responsável por gerenciar as ações de pets
const pets_PublicController = require('../../controllers/pets/pets_PublicController');

// Cria uma nova instância de roteador do Express
const router = express.Router();

// Define a rota para listar os pets pelo status de disponiveis
router.get('/status/:status', pets_PublicController.getByStatus);

module.exports = router; // Exporta o roteador configurado para ser usado no app principal
