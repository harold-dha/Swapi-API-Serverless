const { validateRequestCrearPersona } = require('./validation')
const Service = require('./service')

const getPersonas = async () => {
  console.log('Controller-getPersona')
  const result = await Service.getPersonas()
  return {
    status: 200,
    body: result
  }
}

const addPersona = async (payload) => {
  console.log('Controller-addPersona')
  const result = await validateRequestCrearPersona(JSON.parse(payload.body))
  console.log('Result Validation: ' + JSON.stringify(result))
  if (result.error) {
    return {
      status: 400,
      body: result.error
    }
  }
  const response = await Service.addPersona(JSON.parse(payload.body))
  return {
    status: 200,
    body: response
  }
}

module.exports = {
  getPersonas,
  addPersona
}
