// Importa o serviço que contém a lógica de negócio para manipular adoções
const AdoptionsService = require('../../services/adoptionsService');

class Adoptions_PublicController {
  // Método para listar todas as adoções
  static async adminOnly_getAll(req, res) {
    console.log('adoptions_PublicController_getAll');
    try {
      const adoptions = await AdoptionsService.getAll(); // Chama o service para buscar adoções
      res.json(adoptions); // Retorna a lista em formato JSON
    } catch (error) {
      res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
    }
  }

  // Método para listar todas as adoção
  static async adminOnly_getByID(req, res) {
    console.log('adoptions_PublicController_adminOnly_getByID');
    try {
      const id = req.params.id; // Pega o ID da URL
      const adoptions = await AdoptionsService.getByID(id); // Chama o service para buscar adoções pelo ID
      res.json(adoptions); // Retorna a lista em formato JSON
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se et não encontrado
    }
  }

  // Método para criar uma nova adoção
  static async create(req, res) {
    console.log('adoptions_PublicController_create');
    try {
      const id = await AdoptionsService.create(req.body); // Chama o service para criar adoções
      res.status(201).json({ message: 'Adoção criada com sucesso.', id }); // Retorna status 201 (criado) e o ID
    } catch (error) {
      res.status(400).json({ error: error.message }); // Em caso de erro de validação, retorna status 400
    }
  }
}

// Exporta o Controller para ser usado nas rotas
module.exports = Adoptions_PublicController;
