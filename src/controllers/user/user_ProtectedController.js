// Importa o serviço que contém a lógica de negócio para manipular usuários
const userService = require('../../services/userService');

class User_ProtectedController {
  // Método para listar todos os usuários
  static async adminOnly_getAll(req, res) {
    console.log('user_ProtectedController_adminOnly_getAll');
    try {
      const users = await userService.getAll(); // Chama o service para buscar usuários
      res.json(users); // Retorna a lista em formato JSON
    } catch (error) {
      res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
    }
  }

  // Método para listar os usuários pelo ID
  static async getByID(req, res) {
    console.log('user_ProtectedController_getByID');
    try {
      const requestedID = parseInt(req.params.id); // ID passado na URL
      const requester = req.user; // Extraído do token JWT no middleware authenticateToken
      console.log('Usuário autenticado via JWT:', requester);
      // Se não for admin e estiver tentando acessar outro ID, negar o acesso
      if (requester.role !== 'admin' && requester.id !== requestedID) {
        return res.status(403).json({
          error: 'Acesso negado. Você só pode acessar o seu próprio perfil.',
        });
      }

      const id = req.params.id; // Pega o ID da URL
      const users = await userService.getByID(id); // Chama o service para buscar usuários pelo ID
      return res.json(users); // Retorna a lista em formato JSON
    } catch (error) {
      return res.status(400).json({ error: error.message }); // Retorna erro se usuário não encontrado
    }
  }

  // Método para atualizar um usuário existente
  static async update(req, res) {
    console.log('user_ProtectedController_update');
    try {
      const requestedID = parseInt(req.params.id); // ID passado na URL
      const requester = req.user; // Extraído do token JWT no middleware authenticateToken
      console.log('Usuário autenticado via JWT:', requester);
      // Se não for admin e estiver tentando acessar outro ID, negar o acesso
      if (requester.role !== 'admin' && requester.id !== requestedID) {
        return res.status(403).json({
          error: 'Acesso negado. Você só pode acessar o seu próprio perfil.',
        });
      }
      const id = req.params.id; // Pega o ID da URL
      await userService.update(id, req.body); // Chama o service para atualizar
      return res.json({ message: 'Usuário atualizado com sucesso.' });
    } catch (error) {
      return res.status(400).json({ error: error.message }); // Retorna erro se não encontrar ou problema nos dados
    }
  }

  // Método para deletar um usuário
  static async adminOnly_delete(req, res) {
    console.log('user_ProtectedController_adminOnly_update');
    try {
      const id = req.params.id; // Pega o ID da URL
      await userService.delete(id); // Chama o service para deletar
      res.json({ message: 'Usuário deletado com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se usuário não encontrado
    }
  }
}

// Exporta o Controller para ser usado nas rotas
module.exports = User_ProtectedController;
