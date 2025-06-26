-- Usa o banco de dados
USE pets_db;

-- Cria a tabela de pets
CREATE TABLE IF NOT EXISTS pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    species VARCHAR(100) NOT NULL,
    size VARCHAR(100) NOT NULL,
    status VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);