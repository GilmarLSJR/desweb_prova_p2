// Importa a conexão pool com o banco de dados
const db = require('../config/database');

class AdoptionsModel {
  // Busca todas as adoções
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM adoptions');
    return rows;
  }

  // Busca uma adoção pelo ID
  static async findByID(id) {
    const [rows] = await db.query('SELECT * FROM adoptions WHERE id = ?', [id]);
    return rows[0];
  }

  // Cria uma nova adoção
  static async create(adoption) {
    const { user_id, pet_id } = adoption;
    const [result] = await db.query(
      'INSERT INTO adoptions (user_id, pet_id ) VALUES (?, ?)',
      [user_id, pet_id]
    );
    return result.insertId; // Retorna o ID da adoção criada
  }

  // Atualiza uma adoção existente
  static async update(id, adoption) {
    const { user_id, pet_id } = adoption;
    const [result] = await db.query(
      'UPDATE adoptions SET user_id = ?, pet_id = ? WHERE id = ?',
      [user_id, pet_id, id]
    );
    return result.affectedRows; // Retorna o número de linhas afetadas
  }

  // Deleta uma adoção pelo ID
  static async delete(id) {
    const [result] = await db.query('DELETE FROM adoptions WHERE id = ?', [id]);
    return result.affectedRows; // Retorna o número de linhas afetadas
  }
}

// Exporta a classe AdoptionsModel para ser usada nos services
module.exports = AdoptionsModel;
