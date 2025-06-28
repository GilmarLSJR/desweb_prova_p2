// Importa o Model responsável pelo acesso ao banco de dados (tabela pets)
const PetsModel = require('../models/petsModel');

class PetsService {
  // Busca todos os pets cadastrados
  static async getAll() {
    return await PetsModel.findAll();
  }

  // Busca os pets cadastrados pelo ID
  static async getByID(id) {
    const getByID = await PetsModel.findByID(id);
    if (!getByID) {
      throw new Error('Pet não encontrado.'); // Caso nenhum pet tenha sido deletado
    }
    return getByID;
  }

  // Cria um novo pet após validações
  static async create(pet) {
    return await PetsModel.create(pet); // Cria o novo pet
  }

  // Atualiza informações de um pet existente
  static async update(id, pet) {
    const updatedRows = await PetsModel.update(id, pet);
    if (updatedRows === 0) {
      throw new Error('Pet não encontrado.'); // Caso nenhum pet tenha sido atualizado
    }
    return updatedRows;
  }

  // Deleta um pet pelo ID static
  static async delete(id) {
    const deletedRows = await PetsModel.delete(id);
    if (deletedRows === 0) {
      throw new Error('Pet não encontrado.'); // Caso nenhum pet tenha sido deletado
    }
    return deletedRows;
  }
}

// Exporta a classe para ser utilizada pelos controllers
module.exports = PetsService;
