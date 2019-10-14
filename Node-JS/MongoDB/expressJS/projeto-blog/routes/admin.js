const express  = require('express');
const routes   = express.Router();

//Import Model Category
const mongoose = require('mongoose');
require('../models/Category');
const Category = mongoose.model("category");

routes.get('/', (req, res) => {
    //res.send("Página principal do painel ADM");
    res.render('admin/index');//Pasta admin e arquivo Index
});

routes.get('/post', (req, res) => {
    res.send("Página de posts");
});

routes.get('/category', (req, res) => {
    //res.send("Página de categorias");
    res.render('admin/listcategories');
});

routes.get('/category/add', (req, res) => {
    res.render('admin/addcategory');
});

//Create route add new categories
routes.post('/category/new', (req, res) => {
    
    var errs = []
    
    //Validation forms
    if(!req.body.name || typeof req.body.name === undefined || req.body.name === null) {
        errs.push({
            text: "Nome inválido!"
        })
    }

    if(!req.body.name || typeof req.body.name === undefined || req.body.name === null) {
        errs.push({
            text: "Slog inválido!"
        })
    }

    if(req.body.name.length < 2) {
        errs.push({
            text: "Nome da categoria muito pequeno!"
        })
    }

    //Verificando existência de erros
    if(errs.length > 0) {
        res.render('admin/addcategory', {err: errs})
    } else {
        const newCategory = {
            name: req.body.name,
            slug: req.body.slug
        };
    
        //Create new category in mongoDB
        new Category(newCategory).save().then(() => {
            //Exibindo mensagem 
            req.flash("success_msg", "Categoria cadastrada com sucesso!")
            res.redirect('admin/listcategories');
        }).catch(() => {
            //Exibindo mensagem
            req.flash("error_msg", "Erro ao cadastrar categoria!")
            res.redirect('/admin');
        });
    }

    
})

module.exports = routes;
