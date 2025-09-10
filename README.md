  <p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Biblioteca API — Cynthia Sawaya
Trabalho de Pos Graduaçao - FAEX

## Project setup
```bash
src/
 ┣ auth/        # Autenticação e JWT
 ┣ users/       # Usuários (CRUD, roles)
 ┣ books/       # Livros (CRUD, disponibilidade)
 ┣ prisma/      # Configuração do Prisma e acesso ao BD
 ┣ main.ts      # Bootstrap da aplicação
```

## Compile and run the project

```bash
1. Clone o repositório
git clone https://github.com/seu-usuario/biblioteca-api-cynthia-sawaya.git
cd biblioteca-api-cynthia-sawaya
2. Instale as dependências
npm install
3. Configure o arquivo .env
Crie um arquivo .env na raiz do projeto com o conteúdo:

DATABASE_URL="mysql://root:senha@localhost:3306/biblioteca_api"
JWT_SECRET="root1"
PORT=3006
⚠️ Altere root e senha conforme seu ambiente MySQL.

4. Rodar as migrations
npx prisma migrate dev

5. Executar o projeto
npm run start:dev

🔑 Autenticação
A autenticação é baseada em JWT (Bearer Token).
Após login, você receberá um access_token que deve ser enviado no header:
```

## tests Postman

```bash
Na raiz do projeto existe a collection do Postman (biblioteca-api.postman_collection.json).
Configure a variável {{base_url}} com http://localhost:3006 e {{jwt}} após o login.
```


## Stay in touch

- Author - Cynthia Sawaya
-  Pós-graduação FAEX


