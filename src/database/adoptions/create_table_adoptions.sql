-- Usa o banco de dados
USE pets_db;

-- Cria a tabela de adoções
CREATE TABLE IF NOT EXISTS adoptions (
id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
pet_id INT NOT NULL,
adoption_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES users (id),
FOREIGN KEY (pet_id) REFERENCES pets (id)
);