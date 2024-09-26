const addPersonaRequest200 = {
  body: {
    nombre: "R2-D2",
    anio_nacimiento: "33BBY",
    color_ojos: "red",
    genero: "n/a",
    color_cabello: "n/a",
    talla: "96",
    peso: "32",
    color_piel: "white, blue",
    planeta_origen: "https://swapi.py4e.com/api/planets/8/",
    peliculas: [
      "https://swapi.py4e.com/api/films/1/",
      "https://swapi.py4e.com/api/films/2/",
      "https://swapi.py4e.com/api/films/3/",
      "https://swapi.py4e.com/api/films/4/",
      "https://swapi.py4e.com/api/films/5/",
      "https://swapi.py4e.com/api/films/6/",
      "https://swapi.py4e.com/api/films/7/"
    ],
    especies: [
      "https://swapi.py4e.com/api/species/2/"
    ],
    vehiculos: [],
    naves: [],
    url: "https://swapi.py4e.com/api/people/3/"
  }
}
const addPersonaRequest400 = {
  body: {
    anio_nacimiento: "33BBY",
    color_ojos: "red",
    genero: "n/a",
    color_cabello: "n/a",
    talla: "96",
    peso: "32",
    color_piel: "white, blue",
    planeta_origen: "https://swapi.py4e.com/api/planets/8/",
    peliculas: [
      "https://swapi.py4e.com/api/films/1/",
      "https://swapi.py4e.com/api/films/2/",
      "https://swapi.py4e.com/api/films/3/",
      "https://swapi.py4e.com/api/films/4/",
      "https://swapi.py4e.com/api/films/5/",
      "https://swapi.py4e.com/api/films/6/",
      "https://swapi.py4e.com/api/films/7/"
    ],
    especies: [
      "https://swapi.py4e.com/api/species/2/"
    ],
    vehiculos: [],
    naves: [],
    url: "https://swapi.py4e.com/api/people/3/"
  }
}
const validation = {
  nombre: "R2-D2",
  anio_nacimiento: "33BBY",
  color_ojos: "red",
  genero: "n/a",
  color_cabello: "n/a",
  talla: "96",
  peso: "32",
  color_piel: "white, blue",
  planeta_origen: "https://swapi.py4e.com/api/planets/8/",
  peliculas: [
    "https://swapi.py4e.com/api/films/1/",
    "https://swapi.py4e.com/api/films/2/",
    "https://swapi.py4e.com/api/films/3/",
    "https://swapi.py4e.com/api/films/4/",
    "https://swapi.py4e.com/api/films/5/",
    "https://swapi.py4e.com/api/films/6/",
    "https://swapi.py4e.com/api/films/7/"
  ],
  especies: [
    "https://swapi.py4e.com/api/species/2/"
  ],
  vehiculos: [],
  naves: [],
  url: "https://swapi.py4e.com/api/people/3/"
}
module.exports = {
  addPersonaRequest200,
  addPersonaRequest400,
  validation,
}
