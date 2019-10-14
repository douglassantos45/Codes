//criptografando senha
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {

    const { existsOrError,notExistsOrError,equalsOrError } = app.api.validation

    const encryptPassword = password => {
        //Incriptando um novo hash, mesmo para senhas iguais
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }//Clonando o body
        if(req.params.id) user.id = req.params.id

        try {
            existsOrError(user.name, 'Nome não informado')
            existsOrError(user.email, 'E-mail não informado')
            existsOrError(user.password, 'Senha não informada')
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida')
            equalsOrError(user.password, user.confirmPassword, 'Senhas não conferem')

            //Verificar se o usuário já está cadastrado no banco
            const userFromDB = await app.db('user').where({
                email: user.email
            }).first()//Pegando o primeiro usuário

            if(!user.id) {
                notExistsOrError(userFromDB, 'Usuário já cadastrado')
            }
                        
        } catch(msg) {
            //Erro 400, erro do lado do cliente
            return res.status(400).send(msg)
        }

        //Criptografando a senha
        user.password = encryptPassword(user.password)

        //Deletando a confirmação da senha
        delete user.confirmPassword

        //Inserindo/Alterando usuário no banco
        if(user.id) {
            app.db('users')
               .update(user)
               .where({
                   id: user.id
               })
               .then(_ => res.status(204).send(err))
               
               //Verificando erro do 500, erro do lado do servidor
               .catch(err => res.status(500).send(err))
        
        //Se não tiver ID, Inseri o usuário
        } else {
            app.db('user')
               .insert(user)
               .then(_ => res.status(204).send)
               
               .catch(err => res.status(500).send(err))
        }
    }

    //Pegar lida de, ou seja, todos os usuários do sistema
    const get = (req, res) => {
        app.db('users')
           .select('id', 'name', 'email', 'admin')
           .then(users => res.json(users))

           .catch(err => res.status(500).send(err))
    }

    //Pegando ID do usuário pelo URL
    const getById = (req, res) => {
        app.db('users')
           .select('id', 'name', 'email', 'admin')
           .where({
               id: req.params.id
           }).first()
           .then(user => res.json(user))

           .catch(err => res.status(500).send(err))

    }

    //retornando objeto de todas as funções
    return { save, get }//Salvando novo usuário
}
