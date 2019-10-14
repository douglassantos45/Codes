
document.getElementById('formulario').addEventListener('submit', cadastrarVeiculo);

//Pegar valor input
function cadastrarVeiculo(e) {
    /*
    console.log('Cadastro feito com sucesso');
    
    e.preventDefault();//Bloqueia que o evento aconteça*/

    let modeloCarro = document.getElementById('modeloCarro').value;
    let placaCarro  = document.getElementById('placaCarro').value;

    //Capiturando informação de data e hora 
    let time = new Date();


    //Verificando os campos estão vazios
    if(!modeloCarro && !placaCarro) {
        alert('Por favor, preecha os campos em branco');

        return false;
    }


    //Criando Objeto Carro
    carro = {
        modelo : modeloCarro,
        placa  : placaCarro,
        hora   : time.getHours(),
        minutos: time.getMinutes()
    }

    //Armazenar dados no navegador por chave e valor
    //localStorage.setItem('Key', 'Value');

    //Removendo
    //localStorage.removeItem('Key');

    //Criando Carros
    if(localStorage.getItem('patio') === null) {
        
        var carros = [];
        carros.push(carro);

        //Convertendo JSON para String
        localStorage.setItem('patio', JSON.stringify(carros));

    } else {
	//Convertendo String para JSON
        var carros = JSON.parse(localStorage.getItem('patio'));
        carros.push(carro);
        localStorage.setItem('patio', JSON.stringify(carros));

    }

    document.getElementById('formulario').reset();

    console.log(carro);

    e.preventDefault();
}

//Deletando Veículo

function deletarVeiculo(placa) {
    let carros = JSON.parse(localStorage.getItem('patio'));

    //Verificando Placas
    for(let i = 0; i < carros.length; i++) {
        if(carros[i].placa == placa) {
            //Retirando carro
            carros.splice(i, 1);
        }

        //Setando novamente
        localStorage.setItem('patio', JSON.stringify(carros));
    }

    exibirCadastro();
}


//Exibir resultados na tabela

function exibirCadastro() {

    let carrosResultado = document.getElementById('resultados');
    let carros 		= JSON.parse(localStorage.getItem('patio'));
    
    carrosResultado.innerHTML = '';

    //Exibindo dados na tabela
    for(let i = 0; i < carros.length; i++) {
        //Recuperando Informações do Carro
        let modelo  = carros[i].modelo;
        let placa   = carros[i].placa;
        let hora    = carros[i].hora;
        let minutos = carros[i].minutos;

        carrosResultado.innerHTML += 
        `<tr>
            <td>${modelo}</td>
            <td>${placa}</td>
            <td>${hora}:${minutos}</td>
            <td>
                <buttom class="btn btn-danger btn-sm" onclick="deletarVeiculo('${placa}')">Excluir</buttom>
            </td>
        </th>`;
    }
}
