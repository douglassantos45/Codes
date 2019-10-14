//Importar módulos do Sequelize
const Sequelize = require('sequelize');

/**
 * primeiro parametro é o nome do banco, segundo o usuário do banco, terceiro a senha do banco, quarto qual servidor está o banco de dados e o último é o dialect, que é o tipo de banco de dados
**/

const sequelize = new Sequelize('dbTeste', 'root', '99458483', {
    host: "localhost",
    dialect: 'mysql'
});

//Conectando com o banco de dados
sequelize.authenticate().then(function () {

    console.log("Conexão estabelicida com sucesso!");
}).catch((err) => {
    console.log("Não foi possível conectar ao servidor! " + err);
});

//Criando tabelas no Banco de Dados
const Usuario = sequelize.define('usuarios', {
    name: {
        type:  Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
});


//Criando/Adicionando valores para os atributos da tabela
Usuario.create({
    name: "Douglas",
    age: 21,
});

const Post = sequelize.define('post', {
    title: {
        type: Sequelize.STRING
    },
    mensage: {
        type: Sequelize.STRING
    }
});

//Adicionado valores
Post.create({
    title: "Tópico 1",
    mensage: "Testando a criação dos valores do campo da tabela"
});


//Forçando a geranção de tabelas no banco de dados
//Usuario.sync({ force: true });
//Post.sync({ force: true});




