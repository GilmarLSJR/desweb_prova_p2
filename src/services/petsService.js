// Importa o Model responsável pelo acesso ao banco de dados (tabela pets)
const PetsModel = require('../models/petsModel');

class PetsService {
  // Busca todos os pets cadastrados
  static async getAll() {
    console.log('pets_service_getAll');
    return await PetsModel.findAll();
  }

  // Busca os pets cadastrados pelo ID
  static async getByID(id) {
    console.log('pets_service_getByID');
    const getByID = await PetsModel.findByID(id);
    if (!getByID) {
      throw new Error('Pet não encontrado.'); // Caso nenhum pet tenha sido encontrado
    }
    return getByID;
  }

  // Busca os pets cadastrados pelo status de disponiveis
  static async getByStatus(status) {
    console.log('pets_service_getByStatus');
    const getByStatus = await PetsModel.findByStatus(status);
    if (!getByStatus || getByStatus.length === 0) {
      throw new Error(`Nenhum pet encontrado com o status ${status}.`); // Caso nenhum pet tenha sido encontrado
    }
    return getByStatus;
  }

  // Cria um novo pet após validações
  static async create(pet) {
    console.log('pets_service_create');
    return await PetsModel.create(pet); // Cria um novo pet
  }

  // Atualiza informações de um pet existente
  static async update(id, pet) {
    console.log('pets_service_update');
    const updatedRows = await PetsModel.update(id, pet);
    if (updatedRows === 0) {
      throw new Error('Pet não encontrado.'); // Caso nenhum pet tenha sido atualizado
    }
    return updatedRows;
  }

  // Deleta um pet pelo ID static
  static async delete(id) {
    console.log('pets_service_delete');
    // Verifica condições do pet antes de excluir
    const pet = await PetsModel.findByID(id);
    if (!pet) {
      throw new Error('Pet não encontrado'); // Erro se não encontrar o pet
    }

    if (pet.status === 'adopted') {
      throw new Error('Pet adotado não pode ser excluido');
    }

    const deletedRows = await PetsModel.delete(id);
    if (deletedRows === 0) {
      throw new Error('Pet não encontrado.'); // Caso nenhum pet tenha sido deletado
    }
    return deletedRows;
  }
}

// Exporta a classe para ser utilizada pelos controllers
module.exports = PetsService;
