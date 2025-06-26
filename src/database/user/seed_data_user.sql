-- Usa o banco de dados
USE pets_db;

-- Insere dois tipos de usuários
INSERT INTO
    users (name, email, password, phone, role)
VALUES
    (
        'adopter_1',
        'adopter_1@ifrs.edu.br',
        '$2b$10$382cEJJYi5YxSBNvWmufHeoPHX3dqIB9NP2R2XWzt/w.DnC0gmCr2',
        '54991090329',
        'adopter'
    ),
    (
        'admin_1',
        'admin_1@ifrs.edu.br',
        '$2b$10$/JLXJ62EBlk1bNq0xmpvMuTLDJb6AWmZUs74lgEJb4Z.J9.3kFJM.',
        '54996821107',
        'admin'
    );