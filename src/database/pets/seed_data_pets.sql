-- Usa o banco de dados
USE pets_db;

-- Insere dois tipos de pets
INSERT INTO
    pets (name, age, species, size, status, description)
VALUES
    (
        'dog_1',
        5,
        'dog',
        'large',
        'available',
        'very beatiful'
    ),
    (
        'cat_1',
        2,
        'cat',
        'small',
        'available',
        'very fast'
    );