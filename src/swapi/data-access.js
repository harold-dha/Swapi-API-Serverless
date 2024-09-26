const AWS = require('aws-sdk')
const { v4 } = require('uuid')


const getPersonas = async (payload) => {
  console.log('Data Access-getPersonas')
  const dynamodb = new AWS.DynamoDB.DocumentClient()
  const result = await dynamodb.scan({
    TableName: "Personas"
  }).promise()

  const data = {
    contador: result.Items.length,
    next: "",
    previous: null,
    result: result.Items
  }
  return data
}

const addPersona = async (payload) => {
  console.log('Data Access-addPersona')
  console.log(payload)
  const dynamodb = new AWS.DynamoDB.DocumentClient()
  const id = v4()
  const data = {
    id,
    creado: new Date().toISOString(),
    editado: "",
    ...payload,
  }
  await dynamodb.put({
    TableName: 'Personas',
    Item: data
  }).promise()
    .then(() => console.log('success PUT Persona: ' + JSON.stringify(data)))
    .catch(error => console.log('error PUT Persona: ' + error))

  return data
}

module.exports = {
  getPersonas,
  addPersona
}
