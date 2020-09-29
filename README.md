# Tarea1 - Escalab
Crear modelos no relacionales

## Instrucciones:
 - Clonar el proyecto
 - Instalar las dependencias
 - Correr el backend
 - Abrir el [Postman](https://www.getpostman.com/collections/82da023ab58bd51e8832)


## Instalar dependencias

    npm install

## Run the app

    npm start


# API REST

Ejemplos de rutas de la API

# Rutas
## Crear usuario 
`POST | http://localhost:8000/user/create`

Bodyraw (text)
{
    "names": "Paula K",
    "surnames": "Campos Campos",
    "birthdate": "",
    "email": "pau@gmail.com",
    "password": "123123",
    "avatar": "",
    "banner": "",
    "biography": "",
    "location": "",
    "website": ""
}

## Crear Tweet |
`POST | http://localhost:8000/tweet/create`

Bodyraw (text)
{
    "userId": "5f728ccd5a745c22b8e00d44",
    "message": "Segundo Tweet"
}

## Listar usuarios
`GET | http://localhost:8000/user/list`
