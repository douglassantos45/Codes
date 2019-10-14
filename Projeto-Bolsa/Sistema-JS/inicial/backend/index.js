const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

//Knex
app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api/user.js')
    .then('./config/routes.js')
    .into(app)

//Porta do server
app.listen(3000, () => {
    console.log('Backend executando...')
})