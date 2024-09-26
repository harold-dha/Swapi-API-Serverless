const addPersonaResponse200 = {
  status: 200,
  body: {
    id: "087e4a82-dc36-4859-a81f-a4f6056f7377",
    creado: "2023-11-05T21:47:04.079Z",
    editado: "",
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
const addPersonaResponse400 = {
  status: 400,
  body: {
    _original: {
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
    },
    details: [
      "\"nombre\" es requerido"
    ]
  }
}
const getPersonasResponse200 = {
  status: 200,
  body: {
    contador: 11,
    next: "",
    previous: null,
    result: [
      {
        naves: [
          "https://swapi.py4e.com/api/starships/12/",
          "https://swapi.py4e.com/api/starships/22/"
        ],
        nombre: "Luke Skywalker",
        color_cabello: "blond",
        vehiculos: [
          "https://swapi.py4e.com/api/vehicles/14/",
          "https://swapi.py4e.com/api/vehicles/30/"
        ],
        url: "https://swapi.py4e.com/api/people/1/",
        peso: "77",
        peliculas: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/2/",
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/6/",
          "https://swapi.py4e.com/api/films/7/"
        ],
        talla: "172",
        editado: "",
        color_piel: "fair",
        especies: [
          "https://swapi.py4e.com/api/species/1/"
        ],
        creado: "2023-11-05T08:32:37.645Z",
        id: "2a9b7bce-0091-46a7-98f9-0d01d878c68e",
        color_ojos: "blue",
        planeta_origen: "https://swapi.py4e.com/api/planets/1/",
        anio_nacimiento: "19BBY",
        genero: "male"
      },
      {
        naves: [],
        nombre: "R2-D2",
        color_cabello: "n/a",
        vehiculos: [],
        url: "https://swapi.py4e.com/api/people/3/",
        peso: "32",
        peliculas: [
          "https://swapi.py4e.com/api/films/1/",
          "https://swapi.py4e.com/api/films/2/",
          "https://swapi.py4e.com/api/films/3/",
          "https://swapi.py4e.com/api/films/4/",
          "https://swapi.py4e.com/api/films/5/",
          "https://swapi.py4e.com/api/films/6/",
          "https://swapi.py4e.com/api/films/7/"
        ],
        talla: "96",
        editado: "",
        color_piel: "white, blue",
        especies: [
          "https://swapi.py4e.com/api/species/2/"
        ],
        creado: "2023-11-05T18:34:31.668Z",
        id: "d37f4c82-adfd-46e3-b3ba-4f79e4846173",
        color_ojos: "red",
        planeta_origen: "https://swapi.py4e.com/api/planets/8/",
        anio_nacimiento: "33BBY",
        genero: "n/a"
      },
    ]
  }
}

module.exports = {
  addPersonaResponse200,
  addPersonaResponse400,
  getPersonasResponse200,
}
