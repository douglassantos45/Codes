//Carregando Módulos em uma variável
const add      = require('../models/addition')
const sub      = require('../models/subtraction')
const mult     = require('../models/multiplication')
const division = require('../models/division')

//Imprimindo valores dos módulos
console.log(add(3, 5));
console.log(sub(4, 2));
console.log(mult(2, 3));
console.log(division.runDivision(10, 2));
