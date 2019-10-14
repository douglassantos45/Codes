document.getElementById('formulario').addEventListener('submit', pesquisarFilme);

//Função para pesquisar os filmes vai input
function pesquisarFilme(e) {
    
    let filmePesquisa = document.getElementById('pesquisa').value;
    
    buscarFilmes(filmePesquisa);

    e.preventDefault();
}


//Usando API para buscar poster dos filmes
function buscarFilmes(filmePesquisa) {
    axios.get('http://www.omdbapi.com/?apikey=46618baa&s=' + filmePesquisa)
    .then(
        function(response) {
            console.log(response);
            let filmes = response.data.Search;
            let mostrarFilmes = '';

            //Percorrendo e exibindo lista de Filmes
            for(let i = 0; i < filmes.length; i++) {
                mostrarFilmes += 
                `<div class="col-sm-6 col-md-4>
                    <div class="thumbnail">
                        <img src="${filmes[i].Poster}" class="img-thumbnail">
                        <h4 class="title">${filmes[i].Title}</h4>
                        <p><a href="#" class="btn btn-primary" role="button">Ver Detalhes</a></p>
                    </div>
                </div>
                `;
            }

            //Exibindo banner dos filmes
            document.getElementById('filmes').innerHTML = mostrarFilmes;
        }
    )
    .catch(function (error) {
	console.log(error);
    });
}
