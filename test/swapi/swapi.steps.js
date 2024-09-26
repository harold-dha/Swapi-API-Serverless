const { defineFeature, loadFeature } = require('jest-cucumber')
const feature = loadFeature('./test/swapi/swapi.feature')
const mockRequest = require('./mock/request.mock.js')
const mockResponse = require('./mock/response.mock.js')
const util = require('../util/util')
const Controller = require('../../src/swapi/controller')
const Service = require('../../src/swapi/service')
const DataAccess = require('../../src/swapi/data-access')
const Validation = require('../../src/swapi/validation.js')

defineFeature(feature, (test) => {
  test('service putPersona', ({
    given,
    when,
    then
  }) => {
    let result = {};
    given('ingresa las datos', async () => {
      util.mockSpyDynamoDBPutItem(mockResponse.addPersonaResponse200)
    })
    when('ejecuta la busqueda', async () => {
      result = await Service.addPersona(mockRequest.addPersonaRequest200);
    })
    then('verifica que la informacion es correcta', async () => {
      console.log('service putPersona', result)
      expect(result).toHaveProperty('creado')
    })
  })

  test('service getPersona', ({
    given,
    when,
    then
  }) => {
    let result = {};
    given('ingresa las datos', async () => {
      util.mockSpyDocumentClientScan(mockResponse.getPersonasResponse200)
    })
    when('ejecuta la busqueda', async () => {
      result = await Service.getPersonas();
    })
    then('verifica que la informacion es correcta', async () => {
      expect(result.result.status).toEqual(200)
    })
  })

  test('controller-request', ({
    given,
    when,
    then
  }) => {
    let result = {};
    given('ingresa las datos', async () => {
      util.mockSpyDocumentClientScan(mockResponse.getPersonasResponse200)
    })
    when('ejecuta la busqueda', async () => {
      result = await Controller.getPersonas();
    })
    then('verifica que la informacion es correcta', async () => {
      expect(result.status).toEqual(200)
    })
  })

  test('validation-request', ({
    given,
    when,
    then
  }) => {
    let result = {};
    given('ingresa las datos', async () => {
      util.mockSpyDocumentClientScan(mockResponse.getPersonasResponse200)
    })
    when('ejecuta la busqueda', async () => {
      result = await Validation.validateRequestCrearPersona(mockRequest.validation)
    })
    then('verifica que la validacion es correcta', async () => {
      expect(result).toHaveProperty('value')
    })
  })
})
