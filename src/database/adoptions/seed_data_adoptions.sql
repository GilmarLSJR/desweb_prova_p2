-- Usa o banco de dados
USE pets_db;

-- Insere dois tipos de adoções
INSERT INTO
    adoptions (user_id, pet_id)
VALUES
    (
        1,
        1
    ),
    (
        2,
        2
    );