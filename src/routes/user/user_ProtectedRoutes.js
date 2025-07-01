// Importa o framework Express
const express = require('express');

//Importa o middleware que valida tokens JWT em rotas protegidas
const {
  authenticateToken,
  authorizeRole,
} = require('../../middlewares/authMiddleware');

// Importa o controller responsável por lidar com rotas protegidas por autenticação JWT
const user_ProtectedController = require('../../controllers/user/user_ProtectedController');

// Cria uma nova instância de roteador do Express
const router = express.Router();

// // Define a rota GET /dashboard que chama o método dashboard do user_ProtectedController
// router.get('/dashboard', authenticateToken, user_ProtectedController.dashboard);

// Define a rota GET /admin que chama o método getAll do user_ProtectedController
router.get(
  '/getAll',
  authenticateToken,
  authorizeRole('admin'),
  user_ProtectedController.adminOnly_getAll
);

// Define a rota GET /admin que chama o método getByID do user_ProtectedController
router.get(
  '/getByID/:id',
  authenticateToken,
  authorizeRole('admin', 'adopter'),
  user_ProtectedController.getByID
);

// Define a rota PUT /admin que chama o método update do user_ProtectedController
router.put(
  '/update/:id',
  authenticateToken,
  authorizeRole('admin', 'adopter'),
  user_ProtectedController.update
);

// Define a rota DELETE /admin que chama o método update do user_ProtectedController
router.delete(
  '/delete/:id',
  authenticateToken,
  authorizeRole('admin'),
  user_ProtectedController.adminOnly_delete
);

// Exporta o roteador configurado para ser utilizado na aplicação
module.exports = router;
