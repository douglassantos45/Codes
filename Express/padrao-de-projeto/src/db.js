const sequece = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarValores(produto) {
    if(!produto.id) produto.id = sequece._id
    produtos[produto.id] = produto

    return produto
}
//Retornando valores pelo ID
function getProduto(id) {
    return produtos[id] || {}
}

//Retornando todos os valores
function getProdutos() {
    return Object.values(produtos)
}

module.exports = {
    salvarValores, getProduto, getProdutos
}