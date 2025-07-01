// Importa o framework Express
const express = require('express');

//Importa o middleware que valida tokens JWT em rotas protegidas
const {
  authenticateToken,
  authorizeRole,
} = require('../../middlewares/authMiddleware');

// Importa o controller responsável por lidar com rotas protegidas por autenticação JWT
const pets_ProtectedController = require('../../controllers/pets/pets_ProtectedController');

// Cria uma nova instância de roteador do Express
const router = express.Router();

// Define a rota GET /admin que chama o método getAll do pets_ProtectedController
router.get(
  '/getAll',
  authenticateToken,
  authorizeRole('admin'),
  pets_ProtectedController.adminOnly_getAll
);

// Define a rota GET /admin que chama o método getByID do pets_ProtectedController
router.get(
  '/getByID/:id',
  authenticateToken,
  authorizeRole('admin'),
  pets_ProtectedController.adminOnly_getByID
);

// Define a rota POST /admin que chama o método post do pets_ProtectedController
router.post(
  '/post',
  authenticateToken,
  authorizeRole('admin'),
  pets_ProtectedController.adminOnly_create
);

// Define a rota PUT /admin que chama o método update do pets_ProtectedController
router.put(
  '/update/:id',
  authenticateToken,
  authorizeRole('admin'),
  pets_ProtectedController.adminOnly_update
);

// Define a rota DELETE /admin que chama o método update do pets_ProtectedController
router.delete(
  '/delete/:id',
  authenticateToken,
  authorizeRole('admin'),
  pets_ProtectedController.adminOnly_delete
);

// Exporta o roteador configurado para ser utilizado na aplicação
module.exports = router;
