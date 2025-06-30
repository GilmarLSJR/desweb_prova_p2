// Importa a conexão pool com o banco de dados
const db = require('../config/database');

class PetsModel {
  // Busca todos os pets
  static async findAll() {
    console.log('pets_model_findAll');
    const [rows] = await db.query('SELECT * FROM pets');
    return rows;
  }

  // Busca um pet pelo ID
  static async findByID(id) {
    console.log(`pets_model_findByID - ${id}`);
    const [rows] = await db.query('SELECT * FROM pets WHERE id = ?', [id]);
    return rows[0];
  }

  // Busca os pets pelo status de disponivies
  static async findByStatus(status) {
    console.log('pets_model_findByStatus');
    const [rows] = await db.query('SELECT * FROM pets WHERE status = ?', [
      status,
    ]);
    return rows;
  }

  // Cria um novo pet
  static async create(pet) {
    console.log('pets_model_create');
    const { name, age, species, size, status, description } = pet;
    const [result] = await db.query(
      'INSERT INTO pets (name, age, species, size, status, description) VALUES (?, ?, ?, ?, ?, ?)',
      [name, age, species, size, status, description]
    );
    return result.insertId; // Retorna o ID do pet criado
  }

  // Atualiza um pet existente
  static async update(id, pet) {
    console.log('pets_model_update');
    const { name, age, species, size, status, description } = pet;
    const [result] = await db.query(
      'UPDATE pets SET name = ?, age = ?, species = ?, size = ?, status = ?, description = ? WHERE id = ?',
      [name, age, species, size, status, description, id]
    );
    return result.affectedRows; // Retorna o número de linhas afetadas
  }

  // Deleta um pet pelo ID
  static async delete(id) {
    console.log('pets_model_delete');
    const [result] = await db.query('DELETE FROM pets WHERE id = ?', [id]);
    return result.affectedRows; // Retorna o número de linhas afetadas
  }
}

// Exporta a classe PetModel para ser usada nos services
module.exports = PetsModel;
