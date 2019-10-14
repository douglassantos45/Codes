//Importar módulos do Sequelize
const express    = require('express');
const app        = express();
const port       = 3333;
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const Post       = require('./models/Post');


// Config
    //Template Engine para as views
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    //Body Parser para pegar dados do input
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());


//Rotas
app.get('/', function(req, res) {
    //Pegar todos os elementos da postagem e order:[["id", "DESC"]] ordena os valores em ordem decrescente e ASC em ordem crescente
    Post.findAll({order: [["id", "DESC"]]}).then(function (postagem) {
        res.render(__dirname + '/views/home', {
            //Passando para a variavel posts os as postagem recebina na função
            posts: postagem
        })
    })
});

app.get('/deletar/:id', (req, res) => {
    //Destruindo um recurso do banco de dados
    Post.destroy({
        //Deletando pelo ID
        where: {"id": req.params.id}
    }).then(function () {
        res.send("Postagem Deletada com sucesso!")
    }).catch(() => {
        res.send("Postagem não foi deletada com sucesso!")
    })
});

app.get('/atualizar/:id', (req, res) => {
    Post.findAll({
        order: [[
            "id"
        ]]
    }).then(function(postagem) {
        res.render(__dirname + '/views/formEdit', {
            posts: postagem
        })
    })
});

app.get('/att/:id', (req, res) => {
    Post.update({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }, 
    { where: {
        "id": req.params.id
    }}).then(() => {
        res.send("Atualizado com sucesso!");
    }).catch((err) => { 
        res.send("Erro ao atualizar "+ err);
    })
});

app.get('/cadastrar', (req, res) => {
    res.render(__dirname + '/views/form');
});

//Rota method POST
app.post('/add', (req, res) => {
    //Enviando os dados para o Banco de Dados
    Post.create({
        titulo  : req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function() {
        //Redirecinando para outra rota 
        res.redirect('/');
    })
      .catch(function(err) {
        res.send("Ocorreu um Erro!");
    })
});

app.listen(port, function() {
    console.log("Servidor Rodando na url http://localhost:"+port);
});





