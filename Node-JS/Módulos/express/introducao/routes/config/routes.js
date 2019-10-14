const express = require('express');
const app     = express();
const port    = 8080;

//Rotas
app.get("/", (req, res) => {
    res.send("Bem-vindo");
});

//Rota por parametros
app.get("/funcionario/:nome/:cargo/:salario", (req, res) => {
    //Somente pode chamar o send uma única vez em uma rota
    res.send("<h1>Nome: " + req.params.nome + "</h2><br/>" + "<h1>Cargo: " + req.params.cargo + "</h2><br/>" + "<h1>Salario: " + req.params.salario + "</h2>");
});


//Conexão com o servidor
app.listen(port, () => {
    console.log("Servidor funcionando!");
});