const Sequelize  = require('sequelize');

/**
 * primeiro parametro é o nome do banco, segundo o usuário do banco, terceiro a senha do banco, quarto qual servidor está o banco de dados e o último é o dialect, que é o tipo de banco de dados
**/

const sequelize = new Sequelize('dbPostagem', 'root', '99458483', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function () {
    console.log("conexão estabelecida com sucesso");
}).catch((err)=>{
    console.log("conexão NÃO estabelecida com sucesso");
});

//Exportando mais de um module
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}