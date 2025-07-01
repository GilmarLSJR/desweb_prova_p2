// Biblioteca para criptografia de senhas
const bcrypt = require('bcryptjs');

// Biblioteca para geração de tokens JWT
const jwt = require('jsonwebtoken');

// Importa o Model responsável pelo acesso ao banco de dados (tabela users)
const UserModel = require('../models/userModel');

// Importa a função utilitária que valida o formato de e-mail
const validateEmail = require('../utils/validateEmail');

class UserService {
  // Busca todos os usuários cadastrados
  static async getAll() {
    console.log('user_service_getAll');
    return await UserModel.findAll();
  }

  // Busca os usuários cadastrados pelo ID
  static async getByID(id) {
    console.log('user_service_getByID');
    const getUserByID = await UserModel.findByID(id);
    if (!getUserByID) {
      throw new Error('Usuário não encontrado.'); // Caso nenhum usuário tenha sido encontrado
    }
    return getUserByID;
  }

  // Cria um novo usuário após validações
  static async create(user) {
    console.log('user_service_create');
    const { email, password } = user;

    if (!validateEmail(email)) {
      throw new Error('Formato de email inválido.'); // Verifica o formato do e-mail
    }

    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      throw new Error('Email já cadastrado.'); // Impede cadastro de e-mails duplicados
    }
    // Criptografa a senha antes de salvar no banco
    const hashed = await bcrypt.hash(password, 10);

    // Substitui a senha original pela criptografada
    user.password = hashed;

    return await UserModel.create(user); // Cria um novo usuário
  }

  // Atualiza informações de um usuário existente
  static async update(id, user) {
    console.log('user_service_update');
    const { email, password } = user;

    if (!validateEmail(email)) {
      throw new Error('Formato de email inválido.'); // Verifica o formato do e-mail
    }

    const existingUser = await UserModel.findByEmail(email);
    if (existingUser) {
      throw new Error('Email já cadastrado.'); // Impede cadastro de e-mails duplicados
    }
    // Criptografa a senha antes de salvar no banco
    const hashed = await bcrypt.hash(password, 10);

    // Substitui a senha original pela criptografada
    user.password = hashed;

    const updatedRows = await UserModel.update(id, user);
    if (updatedRows === 0) {
      throw new Error('Usuário não encontrado.'); // Caso nenhum usuário tenha sido atualizado
    }
    return updatedRows;
  }

  // Deleta um usuário pelo ID static
  static async delete(id) {
    console.log('user_service_delete');
    const deletedRows = await UserModel.delete(id);
    if (deletedRows === 0) {
      throw new Error('Usuário não encontrado.'); // Caso nenhum usuário tenha sido deletado
    }
    return deletedRows;
  }

  // Método para autenticar o usuário e gerar token JWT
  static async login({ email, password }) {
    console.log('user_service_login');
    // Verifica o formato do e-mail
    if (!validateEmail(email)) {
      throw new Error('Formato de email inválido.');
    }

    // Busca o usuário pelo e-mail
    const user = await UserModel.findByEmail(email);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    // Verifica se a senha fornecida é válida
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Senha inválida');
    }

    // Gera o token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Retorna o token para o controller
    return { token };
  }
}

// Exporta a classe para ser utilizada pelos controllers
module.exports = UserService;
