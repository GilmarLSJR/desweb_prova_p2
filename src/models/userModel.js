// Importa a conexão pool com o banco de dados
const db = require('../config/database');

class UserModel {
  // Busca todos os usuários
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM users');
    return rows;
  }

  // Busca um usuário pelo ID
  static async findByID(id) {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  // Busca um usuário pelo email
  static async findByEmail(email) {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [
      email,
    ]);
    return rows[0];
  }

  // Cria um novo usuário
  static async create(user) {
    const { name, email, password, phone, role } = user;
    const [result] = await db.query(
      'INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)',
      [name, email, password, phone, role]
    );
    return result.insertId; // Retorna o ID do usuário criado
  }

  // Atualiza um usuário existente
  static async update(id, user) {
    const { name, email, password, phone, role } = user;
    const [result] = await db.query(
      'UPDATE users SET name = ?, email = ?, password = ?, phone = ?, role = ? WHERE id = ?',
      [name, email, password, phone, role, id]
    );
    return result.affectedRows; // Retorna o número de linhas afetadas
  }

  // Deleta um usuário pelo ID
  static async delete(id) {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows; // Retorna o número de linhas afetadas
  }
}

// Exporta a classe UserModel para ser usada nos services
module.exports = UserModel;
