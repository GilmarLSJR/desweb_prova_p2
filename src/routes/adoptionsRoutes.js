// Importa o framework Express
const express = require('express');

// Importa o controller responsável por gerenciar as ações de adoções
const adoptions_PublicController = require('../controllers/adoptions/adoptions_PublicController');

// Cria uma nova instância de roteador do Express
const router = express.Router();

// Define a rota para listar todas as adoções
router.get('/', adoptions_PublicController.getAll);

// Define a rota para listar os adoções pelo ID
router.get('/:id', adoptions_PublicController.getByID);

// Define a rota para criar uma nova adoção
router.post('/', adoptions_PublicController.create);

// Define a rota para atualizar uma adoção existente pelo ID
router.put('/:id', adoptions_PublicController.update);

// Define a rota para deletar uma adoção pelo ID
router.delete('/:id', adoptions_PublicController.delete);

module.exports = router; // Exporta o roteador configurado para ser usado no app principal
