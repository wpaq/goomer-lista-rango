![Build Status](https://github.com/wpaq/goomer-lista-rango/actions/workflows/deployment.yaml/badge.svg)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

## Challenge Developer Backend - Goomer :computer:

O desafio consiste no desenvolvimento de uma API REST
<br>
Segue as instruções no link abaixo:

https://github.com/goomerdev/job-dev-backend-interview

<br>

## Documentação da API com Swagger
A documentação da API fica na rota: http://localhost:5050/api/api-docs

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js) instalado
- [PostgreSQL](https://www.postgresql.org/) instalado
- [Docker](https://www.docker.com) instalado, caso prefira executar a API por ele

## Configurando o Banco de Dados e Rodando a API Manualmente

1. Faça o clone do repositório
2. Na raiz do projeto execute `npm install` para instalar as dependências
3. Inicie o PostgreSQL na sua máquina e crie um banco de dados para a aplicação, caso deseje executar os testes é necessário criar um database somente para testes.
4. Crie e configure o arquivo `.env` na raiz do projeto com as seguintes variáveis ambiente:

<br>

- `DATABASE_URL_PROD=postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME?schema=public`
- `DATABASE_URL_TEST=postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE_NAME?schema=public`
- `API_PORT=`, default: 5050 -  Opcional

5. `npm run migration:run` para aplicar as migrations no banco de dados de produção que você criou
6. `npm run migration:run:all` para aplicar as migrations tanto no banco de dados de produção quanto no de testes
7. `npm run build` faz o build da API
8. `npm start` executa a API

## APIs construídas no desafio

- [Criar Restaurante](./requirements/api/restaurant/add-restaurant.md)
- [Listar Restaurantes](./requirements/api/restaurant/load-restaurants.md)
- [Listar um Restaurante](./requirements/api/restaurant/load-restaurant-by-id.md)
- [Atualizar Restaurante](./requirements/api/restaurant/update-restaurant.md)
- [Excluir Restaurante](./requirements/api/restaurant/delete-restaurant.md)

- [Criar Produto de Restaurante](./requirements/api/product/add-product.md)
- [Listar Produtos de Restaurante](./requirements/api/product/load-products.md)
- [Listar um Produto de Restaurante](./requirements/api/product/load-product-by-id.md)
- [Atualizar Produto de Restaurante](./requirements/api/product/update-produtct.md)
- [Excluir Produto de Restaurante](./requirements/api/product/delete-product.md)

## Requerimentos da API

- [Requerimentos](./requirements/requirements.md)