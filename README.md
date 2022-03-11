# Requesitos para rodar o projeto em sua máquina
<ul>
  <li>Ter o Node instalado</li>
  <li>Ter o MongoDB instalado</li>
  <li>Ter o VsCode ou outro editor de código instalado</li>
</ul>

# Comandos
<ul>
  1<li><strong>npm install - </strong>vai instalar as dependências no projeto**IMPORTANTE!**</li>
  2<li><strong>npm run prestart - </strong> vai rodar o script para popular sua database e colletion</li>
  3<li><strong>npm run start:dev - </strong> vai iniciar sua API(Obs: é recomendado rodar primeramente o comando npm prestart)</li>
</ul>

# Rotas
<h3><strong>GET</strong> /universities - Lista todas as universidades do banco de dados.</h3>

Exemplo de retorno:

```json
{
  "_id": "6229fd8e0fd7fd6712c59fd8",
  "country": "Chile",
  "name": "Universidad Academia de Humanismo Cristiano",
  "state-province": null
},
{
  "_id": "6229fd8e0fd7fd6712c59fda",
  "country": "Chile",
  "name": "Pontificia Universidad Catolica de Chile",
  "state-province": null
},
{
  "previousPage": "http://localhost:8000/universities?page=1",
  "nextPage": "http://localhost:8000/universities?page=2"
}
```

<h3><strong>GET</strong> /universities?country=brazil - Lista todas as universidades de acordo com seu país.</h3>

Exemplo de retorno: 

```json
{
  "_id": "6229fd8e0fd7fd6712c5a0c5",
  "country": "Brazil",
  "name": "Centro Universitário Barao de Maua",
  "state-province": null
},
{
  "_id": "6229fd8e0fd7fd6712c5a0c6",
  "country": "Brazil",
  "name": "Universidade Braz Cubas",
  "state-province": null
},
{
  "previousPage": "http://localhost:8000/universities?page=1&country=brazil",
  "nextPage": "http://localhost:8000/universities?page=2&country=brazil"
}
```

<h3><strong>GET</strong> /universities/:id - Lista uma única universidade de acordo com seu ID.</h3>

Exemplo de retorno:
ID pesquisado: http://localhost:8000/universities/6229fd8e0fd7fd6712c59fd8

```json
{
  "_id": "6229fd8e0fd7fd6712c59fd8",
  "country": "Chile",
  "name": "Universidad Academia de Humanismo Cristiano",
  "domains": [
  "academia.cl"
],
  "alpha_two_code": "CL",
  "state-province": null,
  "web_pages": [
  "http://www.academia.cl/"
]
}
```

<h3><strong>POST /universities</strong> - Cadastra uma única universidade.</h3>

<h4>Entrada:</h4>


```json
{
  "country": "MUNDIAL",
  "name": "Academia Exemplo",
  "domains": [
  "academia.cl"
  ],
  "alpha_two_code": "CL",
  "state-province": "zz",
  "web_pages": [
  "http://www.academia.cl/"
  ]
}
```

<h4>Retorno:</h4>

```json
  {
    "country": "MUNDIAL",
    "name": "Academia Exemplo",
    "domains": [
        "academia.cl"
    ],
    "alpha_two_code": "CL",
    "state-province": "zz",
    "web_pages": [
        "http://www.academia.cl/"
    ],
    "_id": "622b32cad5a2ea78835dd678"
}
```

<h3><strong>PUT /universities/:id </strong> - Atualiza uma única universidade de acordo com seu id.</h3>

```json
{
  "country": "MUNDIAL 2",
  "name": "Academia Exemplo2",
}
```

<h4>Retorno:</h4>

```json
  {
    "country": "MUNDIAL 2",
    "name": "Academia Exemplo 2",
    "domains": [
        "academia.cl"
    ],
    "alpha_two_code": "CL",
    "state-province": "zz",
    "web_pages": [
        "http://www.academia.cl/"
    ],
    "_id": "622b32cad5a2ea78835dd678"
}
```

<h3><strong>DELETE /universities/:id </strong> - Deleta uma única universidade de acordo com seu id.</h3>

Consulta: http://localhost:8000/universities/622b32cad5a2ea78835dd678

Retorno:

```json
  {
    "message": "Universidade Deletada com Sucesso!"
  }
```




