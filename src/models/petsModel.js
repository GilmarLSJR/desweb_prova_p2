// Importa a conexão pool com o banco de dados
const db = require('../config/database');

class PetsModel {
  // Busca todos os pets
  static async findAll() {
    const [rows] = await db.query('SELECT * FROM pets');
    return rows;
  }

  // Busca um pet pelo ID
  static async findByID(id) {
    const [rows] = await db.query('SELECT * FROM pets WHERE id = ?', [id]);
    return rows[0];
  }

  // Cria um novo pet
  static async create(pet) {
    const { name, age, species, size, status, description } = pet;
    const [result] = await db.query(
      'INSERT INTO pets (name, age, species, size, status, description) VALUES (?, ?, ?, ?, ?, ?)',
      [name, age, species, size, status, description]
    );
    return result.insertId; // Retorna o ID do pet criado
  }

  // Atualiza um pet existente
  static async update(id, pet) {
    const { name, age, species, size, status, description } = pet;
    const [result] = await db.query(
      'UPDATE pets SET name = ?, age = ?, species = ?, size = ?, status = ?, description = ? WHERE id = ?',
      [name, age, species, size, status, description, id]
    );
    return result.affectedRows; // Retorna o número de linhas afetadas
  }

  // Deleta um pet pelo ID
  static async delete(id) {
    const [result] = await db.query('DELETE FROM pets WHERE id = ?', [id]);
    return result.affectedRows; // Retorna o número de linhas afetadas
  }
}

// Exporta a classe PetModel para ser usada nos services
module.exports = PetsModel;
