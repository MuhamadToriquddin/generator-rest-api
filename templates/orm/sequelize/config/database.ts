import { Sequelize } from "sequelize";

const db_name = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const dialect = process.env.DB_DIALECT

const sequelize = new Sequelize(db_name, username, password, {
  host: host,
  dialect: dialect,
  port: port,         
  logging: false,     
  pool: {
    max: 5,         
    min: 0,         
    acquire: 30000, 
    idle: 10000
}

});

export default sequelize