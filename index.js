const { uniq } = require("lodash")
const { arrayNumeros, arrayLetras } = require("./array")

console.log(arrayLetras)
console.log(arrayNumeros)

const arrayNumerosUnico = uniq(arrayNumeros)

console.log(arrayNumerosUnico)