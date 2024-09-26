const DataAccess = require('./data-access')

const getPersonas = async (payload) => {
  console.log('Service-getPersonas')
  return await DataAccess.getPersonas()
}
const addPersona = async (payload) => {
  console.log('Service-addPersona')
  return await DataAccess.addPersona(payload)
}
module.exports = {
  getPersonas,
  addPersona
}
