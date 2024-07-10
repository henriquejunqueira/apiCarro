# Projeto API com Node e Mysql

- O projeto no momento está rodando apenas com banco de dados MySQL local
- O projeto contém o banco de dados dbApiCarros e a tabela carros com os campos codigo, modelo e placa
- Para rodar o projeto foram instalados os pacotes npm: express, mysql, dotenv, cors, body-parser e nodemon, para instá-los basta rodar o comandos:

`npm init -y`<br>
`npm install express mysql dotenv cors body-parser`<br>
`npm install nodemon --save-dev`

- Após instalar os pacotes necessários, configure o package.json adicionando a seguinte linha dentro de scripts:

`"start": "nodemon ./src/server.js"`

- Obs. Seu package.json deve ficar assim:

{<br>
  "name": "apicarro",<br>
  "version": "1.0.0",<br>
  "main": "index.js",<br>
  "scripts": {<br>
    "start": "nodemon ./src/server.js",<br>
    "test": "echo \"Error: no test specified\" && exit 1"<br>
  },<br>
  "keywords": [],<br>
  "author": "",<br>
  "license": "ISC",<br>
  "description": "",<br>
  "dependencies": {<br>
    "body-parser": "^1.20.2",<br>
    "cors": "^2.8.5",<br>
    "dotenv": "^16.4.5",<br>
    "express": "^4.19.2",<br>
    "mysql": "^2.18.1"<br>
  },<br>
  "devDependencies": {<br>
    "nodemon": "^3.1.4"<br>
  }<br>
}<br>

- Depois de fazer todas essas alterações é só rodar o comando `npm start`
