const db = require('./database/db');

//Criando uma tabela de nome postagem
const Post = db.sequelize.define('postagem', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
});

//Post.sync({force: true})

module.exports = Post;