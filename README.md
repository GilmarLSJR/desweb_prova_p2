# Descrição do Projeto

API RESTful para controle de adoção de PETS

# Tecnologias Utilizadas

- Node.js
- Express
- MySQL
- dotEnv
- Cors
- Helmet
- JWT
- bcryptjs
- ESLint
- Prettier
- GitHub
- Nodemon
- Morgan


# Banco de Dados

Declaração banco pets_db

```bash
CREATE DATABASE IF NOT EXISTS pets_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Declaração tabela users

```bash
USE pets_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    phone VARCHAR(100)NOT NULL,
    role VARCHAR(100) NOT NULL DEFAULT 'adopter',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Declaração tabela pets

```bash
USE pets_db;

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
```

Declaração tabela adoptions

```bash
USE pets_db;

CREATE TABLE IF NOT EXISTS adoptions (
id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
pet_id INT NOT NULL,
adoption_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES users (id),
FOREIGN KEY (pet_id) REFERENCES pets (id)
);
```

# Instruções de Instalação do ESLint

```bash
npm install eslint --save-dev # Instalação das dependências
npm init @eslint/confi g@latest # Assistente para configuração
```

1. What do you want to lint? → Selecione a opção “Javascript”.
2. How would you like to use ESLint? → Selecione a opção “To check syntax and find problems”
3. What type of modules does your project use? → Selecione a opção “CommonJS (require/exports)” para projetos com Node.js/Express
4. Which framework does your project use? → Selecione a opção “None of these”
5. Does your project use TypeScript? → Selecione a opção “no”
6. Where does your code run? → Selecione a opção “Node”
7. Which package manager do you want to use? → Selecione a opção “npm”

8. eslint, @eslint/js, globals / Would you like to install them now? → Selecione a opção “no”

# Configurações adicionais do ESLint

1. Configurar o arquivo .eslint.config.mjs corretamente

# Como Usar o ESLint - Execução manual via terminal

```bash
npx eslint server.js # Roda o eslint no server.js
npx eslint . --fix # Tenta corrigir erros automaticamente
```

# Como Usar o ESLint - Execução manual via scripts no package.json

```bash
npm run lint # Roda o eslint
npm run lint:fix # Roda o eslint e tenta corrigir erros automaticamente
npm run lint:report # Gera um relatório em JSON e salva no diretório
```

# Como Usar o ESLint - Integrado ao VSCode

1. Instalar a extensão do mesmo
2. Configurar o arquivo .vscode/settings.json
3. Após reiniciar o VSCode

# ESLint ignore

1. Criar o arquivo .eslintignore
2. Declarar as pastas devem ser ignoradas

# Instruções de Instalação do Prettier

```bash
npm install --save-dev prettier # Instalação das dependências
```

# Configuração do Prettier

1. Criar o arquivo .prettierrc
2. Declarar as configurações

# Como Usar o Prettier - Execução manual via termninal

```bash
npx prettier --write . # Roda o prettier
npx prettier --write server.js # Roda o prettier em um arquivo específico
npx prettier --check . # Verifica se os arquivos estão formatados
```

# Como Usar o Prettier - Execução manual via scripts no package.json

```bash
npm run format:check # Roda o prettier para verificar se precisa de formatação
npm run format # Roda o prettier para corrigir erros automaticamente
```

# Como Usar o Prettier - Integrado ao VSCode

1. Instalar a extensão do mesmo
2. Configurar o arquivo .vscode/settings.json
3. Após reiniciar o VSCode

# Prettier ignore

1. Criar o arquivo .prettierignore
2. Declarar as pastas devem ser ignoradas

# Como Usar o ESLint e Prettier juntos

```bash
npm install --save-dev eslint-plugin-prettier eslint-confi g-prettier # Instalação das dependências
```

# Configurações do ESLint e Prettier para trabalharem juntos

1. Configurar o arquivo .eslint.config.mjs corretamente

# Instruções de Instalação

```bash
git clone https://github.com/GilmarLSJR/desweb_prova_p2.git
npm install express mysql2 dotenv cors helmet jsonwebtoken bcryptjs morgan
npm install nodemon --save-dev
npm install morgan --save-dev
npm install --save-dev eslint-plugin-prettier eslint-confi g-prettier
npm run dev
```
