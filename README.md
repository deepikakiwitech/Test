# Test
## AuthMarket API seup

## Requirements

* Node 12.x
* Git
* sequelize-cli
*typescript 3.7.2

## setup

Clone the repo and install the dependencies.

```bash
git clone https://github.com/KiwiTechLLC/authmarket-api.git
cd authmarket-api
```

```bash
npm i -g @nestjs/cli
npm install -g sequelize
npm install --save sequelize sequelize-typescript pg-hstore pg
npm i --save @nestjs/config
npm i class-validator class-transformer --save
```

```bash
npm install
```
## Create ENV file

Create .env file in project root folder and add following details
```

DB_HOST='127.0.0.1'
DB_PORT=5432
DB_USER=kiwitech
DB_PASS=kiwitech
DB_DIALECT=postgres
DB_NAME_TEST=authMarket
DB_NAME_DEVELOPMENT=authMarket
DB_NAME_PRODUCTION=authMarket
JWTKEY=random_secret_key
TOKEN_EXPIRATION=48h
BEARER=Bearer
API_KEY

```

## Start server

To start the express server, run the following

```bash
npm run start:dev
```

Open [http://localhost:3000](http://localhost:3000) and take a look around.
API link : http://localhost:3000/apidocs
