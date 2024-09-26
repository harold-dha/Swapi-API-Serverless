const swapi = require('./swapi/controller')
const dotenv = require('dotenv')
const controllers = {
  ...swapi
}
if (process.env.NODE_ENV !== 'production') {
  console.log('Cargando archivo de variables de entorno local')
  dotenv.config({ path: './default.env' })
}

module.exports.handler = controllers

