const express    = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const mongoose   = require('mongoose');
const session    = require('express-session');
const flash      = require('connect-flash');

const path  = require('path'); //Import native node function, to manipulate public folders
const admin = require('./routes/admin');//Exports archve admin for routes
const app   = express();

const PORT  = 8080;

//Config
    // Session
    app.use(session({
        secret: "cursonodejs", //Gera uma chava
        resave: true,
        saveUninitialized: true
    }));

    //Flash
    app.use(flash());

    //Middleware
    app.use((req, res, next) => {
        //Created Global variable 
        //Variável para exibir messagens aos usuários
        res.locals.success_msg = req.flash("success_msg");
        res.locals.error_msg   = req.flash("error_msg");
    });

    //Body Parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    //Handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/appBlog", {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log("Conectado ao MongoDB!");
    }).catch((err) => {
        console.log("Erro ao conectar ao MongoDB " + err);
    });

    //Public/Path
    app.use(express.static(path.join(__dirname, '/public'))); //Folder public archive static
    

//Routes config
    //Route default
    app.get('/', (req, res) => {
        res.send("Página principal");
    });

    //Route Admin
    app.use('/admin', admin);


//Init server

app.listen(PORT, () => {
    console.log("Conectado ao servidor!");
});