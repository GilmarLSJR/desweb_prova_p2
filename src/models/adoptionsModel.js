// Importa a conexão pool com o banco de dados
const db = require('../config/database');

class AdoptionsModel {
  // Busca todas as adoções
  static async findAll() {
    console.log('adoptions_model_findAll');
    const [rows] = await db.query(
      `SELECT
      adoptions.id AS adoption_id,
      users.name AS user_name,
      pets.name AS pet_name,
      adoptions.adoption_date AS adoption_date
      FROM adoptions
      JOIN users ON adoptions.user_id = users.id
      JOIN pets ON adoptions.pet_id = pets.id`
    );
    return rows;
  }

  // Busca uma adoção pelo ID
  static async findByID(id) {
    console.log('adoptions_model_findByID');
    const [rows] = await db.query(
      `SELECT
      adoptions.id AS adoption_id,
      users.name AS user_name,
      pets.name AS pet_name,
      adoptions.adoption_date AS adoption_date
      FROM adoptions
      JOIN users ON adoptions.user_id = users.id
      JOIN pets ON adoptions.pet_id = pets.id
      WHERE adoptions.id = ?`,
      [id]
    );
    return rows[0];
  }

  // Cria uma nova adoção
  static async create(adoption) {
    console.log('adoptions_model_create');
    const { user_id, pet_id } = adoption;
    const [result] = await db.query(
      'INSERT INTO adoptions (user_id, pet_id ) VALUES (?, ?)',
      [user_id, pet_id]
    );
    return result.insertId; // Retorna o ID da adoção criada
  }

  // Atualiza uma adoção existente
  static async update(id, adoption) {
    console.log('adoptions_model_update');
    const { user_id, pet_id } = adoption;
    const [result] = await db.query(
      'UPDATE adoptions SET user_id = ?, pet_id = ? WHERE id = ?',
      [user_id, pet_id, id]
    );
    return result.affectedRows; // Retorna o número de linhas afetadas
  }

  // Deleta uma adoção pelo ID
  static async delete(id) {
    console.log('adoptions_model_delete');
    const [result] = await db.query('DELETE FROM adoptions WHERE id = ?', [id]);
    return result.affectedRows; // Retorna o número de linhas afetadas
  }
}

// Exporta a classe AdoptionsModel para ser usada nos services
module.exports = AdoptionsModel;
