// Importa o Model responsável pelo acesso ao banco de dados (tabela adoptions)
const AdoptionsModel = require('../models/adoptionsModel');

// Importa o Model responsável pelo acesso ao banco de dados (tabela pets)
const PetsModel = require('../models/petsModel');

class AdoptionsService {
  // Busca todas as adoções cadastradas
  static async getAll() {
    console.log('adoptions_service_getAll');
    return await AdoptionsModel.findAll();
  }

  // Busca as adoções cadastrados pelo ID
  static async getByID(id) {
    console.log('adoptions_service_getByID');
    const getByID = await AdoptionsModel.findByID(id);
    if (!getByID) {
      throw new Error('Adoção não encontrada.'); // Caso nenhuma adoção tenha sido encontrada
    }
    return getByID;
  }

  // Cria uma nova adoção após validações
  static async create(adoption) {
    console.log('adoptions_service_create');
    // Verifica condições do pet antes de fazer a adoção
    const pet = await PetsModel.findByID(adoption.pet_id);
    if (!pet) {
      throw new Error('Pet não encontrado'); // Erro se não encontrar o pet
    }

    if (pet.status !== 'available') {
      throw new Error('Pet não está disponível para adoção'); // Erro se o pet não está disponível
    }

    // Se estiver disponível, prossegue com a criação
    const novaAdocao = await AdoptionsModel.create(adoption);

    // Atualiza o status do pet para "adopted"
    await PetsModel.updateStatus(adoption.pet_id, 'adopted');

    return novaAdocao;
  }
}

// Exporta a classe para ser utilizada pelos controllers
module.exports = AdoptionsService;
