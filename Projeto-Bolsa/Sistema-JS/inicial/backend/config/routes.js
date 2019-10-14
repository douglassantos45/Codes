module.exports = app => {
    app.route('/users')
        //Acessando o arquivo user.js da Api
        .post(app.api.user.save)
        .get(app.api.user.get)
    
    app.route('/users/:id')
        //Alterar usuários
       .put(app.api.user.save)
       .get(app.api.user.getById)//Pegando ID pela URL
}