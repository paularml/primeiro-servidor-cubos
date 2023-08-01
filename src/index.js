// const { uniq } = require("lodash")
// const { arrayNumeros, arrayLetras } = require("./array")

// console.log(arrayLetras)
// console.log(arrayNumeros)

// const arrayNumerosUnico = uniq(arrayNumeros)

// console.log(arrayNumerosUnico)

const express = require("express")
const app = express()

app.get("/home", (requisicao, resposta) => {
    resposta.send("Esse é meu primeiro servidor com o express")
})

app.listen(3000)