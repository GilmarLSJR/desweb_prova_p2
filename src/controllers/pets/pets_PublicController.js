// Importa o serviço que contém a lógica de negócio para manipular pets
const PetsService = require('../../services/petsService');

class Pets_PublicController {
  // Método para listar todos os pets disponiveis
  static async getByStatus(req, res) {
    console.log('pets_controller_getByStatus');
    try {
      const status = req.params.status; // Pega o ID da URL
      const pets = await PetsService.getByStatus(status); // Chama o service para buscar pets pelo ID
      res.json(pets); // Retorna a lista em formato JSON
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se pet não encontrado
    }
  }
}

// Exporta o Controller para ser usado nas rotas
module.exports = Pets_PublicController;
