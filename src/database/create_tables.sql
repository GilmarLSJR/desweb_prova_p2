-- Cria a tabela de usuários
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(100),
    role VARCHAR(100) NOT NULL DEFAULT 'adopter',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insere dois tipos de usuários
INSERT INTO
    users (name, email, password, phone, role)
VALUES
    (
        'usuario',
        'usuario@ifrs.edu.br',
        '$2b$10$382cEJJYi5YxSBNvWmufHeoPHX3dqIB9NP2R2XWzt/w.DnC0gmCr2',
        '54991090329',
        'adopter'
    );