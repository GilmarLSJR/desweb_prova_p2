-- Usa o banco de dados
USE pets_db;

-- Cria a tabela de usuários
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(100)NOT NULL,
    role VARCHAR(100) NOT NULL DEFAULT 'adopter',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);