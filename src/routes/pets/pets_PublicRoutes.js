// Importa o framework Express
const express = require('express');

// Importa o controller responsável por gerenciar as ações de pets
const pets_PublicController = require('../../controllers/pets/pets_PublicController');

// Cria uma nova instância de roteador do Express
const router = express.Router();

// Define a rota para listar todos os pets
router.get('/', pets_PublicController.getAll);

// Define a rota para listar os pets pelo ID
router.get('/id/:id', pets_PublicController.getByID);

// Define a rota para listar os pets pelo status de disponiveis
router.get('/status/:status', pets_PublicController.getByStatus);

// Define a rota para criar um novo pet
router.post('/', pets_PublicController.create);

// Define a rota para atualizar um pet existente pelo ID
router.put('/update/:id', pets_PublicController.update);

// Define a rota para deletar um pet pelo ID
router.delete('/delete/:id', pets_PublicController.delete);

module.exports = router; // Exporta o roteador configurado para ser usado no app principal
