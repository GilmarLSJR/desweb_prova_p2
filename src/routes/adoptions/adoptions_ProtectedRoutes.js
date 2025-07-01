// Importa o framework Express
const express = require('express');

//Importa o middleware que valida tokens JWT em rotas protegidas
const {
  authenticateToken,
  authorizeRole,
} = require('../../middlewares/authMiddleware');

// Importa o controller responsável por lidar com rotas protegidas por autenticação JWT
const adoptions_ProtectedController = require('../../controllers/adoptions/adoptions_ProtectedController');

// Cria uma nova instância de roteador do Express
const router = express.Router();

// Define a rota GET /admin que chama o método getAll do adoptions_ProtectedController
router.get(
  '/getAll',
  authenticateToken,
  authorizeRole('admin'),
  adoptions_ProtectedController.adminOnly_getAll
);

// Define a rota GET /admin que chama o método getByID do adoptions_ProtectedController
router.get(
  '/getByID/:id',
  authenticateToken,
  authorizeRole('admin'),
  adoptions_ProtectedController.adminOnly_getByID
);

// Define a rota POST /admin que chama o método post do adoptions_ProtectedController
router.post(
  '/post',
  authenticateToken,
  authorizeRole('adopter'),
  adoptions_ProtectedController.create
);

// Exporta o roteador configurado para ser utilizado na aplicação
module.exports = router;
