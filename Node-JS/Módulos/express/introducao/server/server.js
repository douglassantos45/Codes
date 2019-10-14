const express = require('express');
const app     = express();
let port      = 8080;

//Rotas / raiz
app.get("/", function(req, res) {
    res.send("Seja bem-vindo!");
});

//Rota /sobre sobre
app.get("/sobre", (req, res) => {
    res.send("Página Sobre");
})

//Iniciando Servidor
app.listen(port, () => {
    console.log("Servidor funcionando no hppt://localhost:8080");
})