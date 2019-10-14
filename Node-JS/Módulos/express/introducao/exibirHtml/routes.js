const express = require('express');
const app     = express();
const port    = 8080;

//Rota Raiz
app.get("/", (req, res) => {
    //Retornando conteúdo HTML
    res.sendFile(__dirname + "/view/index.html");//DirName retorna todo o diretório raiz
});

//Rota sobre
app.get("/sobre", (req, res) => {
    res.sendFile(__dirname + "/view/about.html");
});


/** SERVER **/
app.listen(port, function() {
    console.log("Servidor funcionando!");
});