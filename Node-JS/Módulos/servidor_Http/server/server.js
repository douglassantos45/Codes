//Criando conexão com servidor Node 
const http = require('http')

http.createServer(function(req, res) {
    //Monstando res(resposta), pelo end, para o usuário
    res.end("Olá");
}).listen(8080); //Porta 8080 do meu servidor

console.log("Servidor funcionando!");
