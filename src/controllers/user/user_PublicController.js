// Importa o serviço que contém a lógica de negócio para manipular usuários
const userService = require('../../services/userService');

class UserController {
  // Método para listar todos os usuários
  static async getAll(req, res) {
    try {
      const users = await userService.getAll(); // Chama o service para buscar usuários
      res.json(users); // Retorna a lista em formato JSON
    } catch (error) {
      res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
    }
  }

  // Método para listar todos os usuários
  static async getByID(req, res) {
    try {
      const id = req.params.id; // Pega o ID da URL
      const users = await userService.getByID(id); // Chama o service para buscar usuários pelo ID
      res.json(users); // Retorna a lista em formato JSON
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se usuário não encontrado
    }
  }

  // Método para criar um novo usuário
  static async create(req, res) {
    try {
      const id = await userService.create(req.body); // Chama o service para criar usuário
      res.status(201).json({ message: 'Usuário criado com sucesso.', id }); // Retorna status 201 (criado) e o ID
    } catch (error) {
      res.status(400).json({ error: error.message }); // Em caso de erro de validação, retorna status 400
    }
  }

  // Método para atualizar um usuário existente
  static async update(req, res) {
    try {
      const id = req.params.id; // Pega o ID da URL
      await userService.update(id, req.body); // Chama o service para atualizar
      res.json({ message: 'Usuário atualizado com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se não encontrar ou problema nos dados
    }
  }

  // Método para deletar um usuário
  static async delete(req, res) {
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
module.exports = UserController;
