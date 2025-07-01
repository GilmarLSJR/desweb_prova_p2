// Importa o serviço que contém a lógica de negócio para manipular pets
const PetsService = require('../../services/petsService');

class Pets_ProtectedController {
  // Método para listar todos os pets
  static async adminOnly_getAll(req, res) {
    console.log('pets_controller_adminOnly_getAll');
    try {
      const pets = await PetsService.getAll(); // Chama o service para buscar pets
      res.json(pets); // Retorna a lista em formato JSON
    } catch (error) {
      res.status(500).json({ error: error.message }); // Em caso de erro, retorna status 500 (erro interno)
    }
  }

  // Método para listar os pets pelo ID
  static async adminOnly_getByID(req, res) {
    console.log('pets_controller_adminOnly_getByID');
    try {
      const id = req.params.id; // Pega o ID da URL
      const pets = await PetsService.getByID(id); // Chama o service para buscar pets pelo ID
      res.json(pets); // Retorna a lista em formato JSON
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se pet não encontrado
    }
  }

  // Método para criar um novo pet
  static async adminOnly_create(req, res) {
    console.log('pets_controller_create');
    try {
      const id = await PetsService.create(req.body); // Chama o service para criar pet
      res.status(201).json({ message: 'Pet criado com sucesso.', id }); // Retorna status 201 (criado) e o ID
    } catch (error) {
      res.status(400).json({ error: error.message }); // Em caso de erro de validação, retorna status 400
    }
  }

  // Método para atualizar um et existente
  static async adminOnly_update(req, res) {
    console.log('pets_controller_adminOnly_update');
    try {
      const id = req.params.id; // Pega o ID da URL
      await PetsService.update(id, req.body); // Chama o service para atualizar
      res.json({ message: 'Pet atualizado com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se não encontrar ou problema nos dados
    }
  }

  // Método para deletar um pet
  static async adminOnly_delete(req, res) {
    console.log('pets_controller_adminOnly_delete');
    try {
      const id = req.params.id; // Pega o ID da URL
      await PetsService.delete(id); // Chama o service para deletar
      res.json({ message: 'Pet deletado com sucesso.' });
    } catch (error) {
      res.status(400).json({ error: error.message }); // Retorna erro se pet não encontrado
    }
  }
}

// Exporta o Controller para ser usado nas rotas
module.exports = Pets_ProtectedController;
