const express = require('express')
const PORT    = 8080

const app     = express()
const db      = require('./db')

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
   const produto = db.salvarValores({
       nome: req.body.nome,
       preco: req.body.preco
   })
   res.send(produto)//Retornando a resposta JSON
})

app.listen(PORT, () =>{
    console.log(`Servior rodando na porta: ${PORT}`)
})
