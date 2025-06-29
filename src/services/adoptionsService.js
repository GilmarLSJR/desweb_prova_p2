// Importa o Model responsável pelo acesso ao banco de dados (tabela adoptions)
const AdoptionsModel = require('../models/adoptionsModel');

class AdoptionsService {
  // Busca todas as adoções cadastradas
  static async getAll() {
    return await AdoptionsModel.findAll();
  }

  // Busca as adoções cadastrados pelo ID
  static async getByID(id) {
    const getByID = await AdoptionsModel.findByID(id);
    if (!getByID) {
      throw new Error('Adoção não encontrada.'); // Caso nenhuma adoção tenha sido encontrada
    }
    return getByID;
  }

  // Cria uma nova adoção após validações
  static async create(adoption) {
    return await AdoptionsModel.create(adoption); // Cria uma nova adoção
  }

  // Atualiza informações de uma adoção existente
  static async update(id, adoption) {
    const updatedRows = await AdoptionsModel.update(id, adoption);
    if (updatedRows === 0) {
      throw new Error('Adoção não encontrada.'); // Caso nenhuma adoção tenha sido atualizada
    }
    return updatedRows;
  }

  // Deleta uma adoção pelo ID static
  static async delete(id) {
    const deletedRows = await AdoptionsModel.delete(id);
    if (deletedRows === 0) {
      throw new Error('Adoção não encontrada.'); // Caso nenhuma adoção tenha sido deletada
    }
    return deletedRows;
  }
}

// Exporta a classe para ser utilizada pelos controllers
module.exports = AdoptionsService;
