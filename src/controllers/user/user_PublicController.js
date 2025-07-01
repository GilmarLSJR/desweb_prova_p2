// Importa o serviço que contém a lógica de negócio para manipular usuários
const userService = require('../../services/userService');

class User_PublicController {
  // Método para criar um novo usuário
  static async create(req, res) {
    console.log('user_publicController_create');
    try {
      const result = await userService.create(req.body); // Chama o service para criar usuário
      res.status(201).json({ message: 'Usuário criado com sucesso.', result }); // Retorna status 201 (criado) e o ID
      res.status(201).json(result); // Retorna status 201 (Criado) com os dados retornados pelo serviço
    } catch (error) {
      res.status(400).json({ error: error.message }); // Em caso de erro de validação, retorna status 400
    }
  }

  // Método estático que trata o login do usuário
  static async login(req, res) {
    console.log('user_publicController_login');
    try {
      // Chama o serviço para autenticar o usuário, passando os dados da requisição
      const result = await userService.login(req.body);

      // Retorna status 200 (OK) com o token JWT
      return res.status(200).json(result);
    } catch (error) {
      // Define o status apropriado com base na mensagem de erro
      const status =
        error.message === 'Usuário não encontrado' ||
        error.message === 'Senha inválida'
          ? 401 // Não autorizado
          : 500; // Erro interno do servidor

      // Retorna o status definido com a mensagem do erro
      return res.status(status).json({ message: error.message });
    }
  }
}

// Exporta o Controller para ser usado nas rotas
module.exports = User_PublicController;
