const mongoose = require('mongoose');

//Evitando erros
mongoose.Promise = global.Promise;

//Criando conexão com o mongoDB passando o servidor e o nome do Banco que queremos criar
mongoose.connect("mongodb://localhost/dbAprendendo", {
    //Evitando erros
    useMongoClient: true
}).then(() => {
    console.log("MongoDB Conectado...");
}).catch((err) => {
    console.log("Erro ao conectar ao MongoDB" +err);
});


//Criando campos do MongoDB
const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    data: {
        type: Date,
        require: true
    }
});

//Definindo um novo model / Collection
mongoose.model('usuarios', UserSchema);

//Inserindo dados no Mongo
const newUser = mongoose.model('usuarios');

new newUser({
    nome: "Douglas",
    sobrenome: "Silva",
    email: "testando@gmail.com",
    data: 10/01/2019
}).save().then(() => {
    console.log("Usuários cadastrados com sucesso!")
}).catch((err) => {
    console.log("Usuário não foi cadastrado " + err)
});