// Importa o Model responsável pelo acesso ao banco de dados (tabela users)
const UserModel = require('../models/userModel');

// Importa a função utilitária que valida o formato de e-mail
const validateEmail = require('../utils/validateEmail');

class UserService {
  // Busca todos os usuários cadastrados
  static async getAll() {
    return await UserModel.findAll();
  }

  // Busca os usuários cadastrados pelo ID
  static async getByID(id) {
    const getUserByID = await UserModel.findByID(id);
    if (!getUserByID) {
      throw new Error('Usuário não encontrado.'); // Caso nenhum usuário tenha sido encontrado
    }
    return getUserByID;
  }

  // Cria um novo usuário após validações
  static async create(user) {
    if (!validateEmail(user.email)) {
      throw new Error('Formato de email inválido.'); // Valida o formato do e-mail
    }
    const existingUser = await UserModel.findByEmail(user.email);
    if (existingUser) {
      throw new Error('Email já cadastrado.'); // Impede cadastro de e-mails duplicados
    }
    return await UserModel.createUser(user); // Cria um novo usuário
  }

  // Atualiza informações de um usuário existente
  static async update(id, user) {
    const updatedRows = await UserModel.update(id, user);
    if (updatedRows === 0) {
      throw new Error('Usuário não encontrado.'); // Caso nenhum usuário tenha sido atualizado
    }
    return updatedRows;
  }

  // Deleta um usuário pelo ID static
  static async delete(id) {
    const deletedRows = await UserModel.delete(id);
    if (deletedRows === 0) {
      throw new Error('Usuário não encontrado.'); // Caso nenhum usuário tenha sido deletado
    }
    return deletedRows;
  }
}

// Exporta a classe para ser utilizada pelos controllers
module.exports = UserService;
