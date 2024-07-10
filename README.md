# Projeto API com Node e Mysql

- O projeto no momento está rodando apenas com banco de dados MySQL local
- O projeto contém o banco de dados dbApiCarros e a tabela carros com os campos codigo, modelo e placa
- Para rodar o projeto foram instalados os pacotes npm: express, mysql, dotenv, cors, body-parser e nodemon, para instá-los basta rodar o comandos:

`npm init -y`
`npm install express mysql dotenv cors body-parser`
`npm install nodemon --save-dev`

- Após instalar os pacotes necessários, configure o package.json adicionando a seguinte linha dentro de scripts:

`"start": "nodemon ./src/server.js"`

- Obs. Seu package.json deve ficar assim:

{
  "name": "apicarro",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "nodemon ./src/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mysql": "^2.18.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  }
}

- Depois de fazer todas essas alterações é só rodar o comando `npm start`
