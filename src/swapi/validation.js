const Joi = require('@hapi/joi')
const validationMessages = require('./validation-messages');

const validate = async (schema, payload) => {
  if (Joi.isSchema(schema)) {
    const validation = schema.validate(payload, {
      allowUnknown: true,
      abortEarly: false,
      convert: false,
      errors: { language: 'spanish' },
      messages: validationMessages,
    })
    if (validation.error) {
      const messagesError = [];
      validation.error.details.forEach((value) => {
        messagesError.push(value.message);
      })
      validation.error.details = messagesError
    }
    console.log('Imprimiendo validation____________: ' + JSON.stringify(validation))
    console.log('Imprimiendo validation____________: ' + JSON.parse(JSON.stringify(validation)))
    return validation
  }
}

const validateRequestCrearPersona = async (payload) => {

  const schema = Joi.object().keys({
    nombre: Joi.string().required(),
    anio_nacimiento: Joi.string().required(),
    color_ojos: Joi.string().required(),
    genero: Joi.string().required(),
    color_cabello: Joi.string().required(),
    talla: Joi.string().required(),
    peso: Joi.string().required(),
    color_piel: Joi.string().required(),
    planeta_origen: Joi.string().required(),
    peliculas: Joi.array().items(Joi.string()).required(),
    especies: Joi.array().items(Joi.string()).required(),
    vehiculos: Joi.array().items(Joi.string()).required(),
    naves: Joi.array().items(Joi.string()).required(),
    url: Joi.string().required(),
  })
  return validate(schema, payload)
}

module.exports = {
  validateRequestCrearPersona,
}

