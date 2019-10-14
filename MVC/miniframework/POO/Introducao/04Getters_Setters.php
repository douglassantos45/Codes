<?php 

    class Funcionario {

        public $nome      = null;
        public $telefone  = null;
        public $numFilhos = null;
        public $cargo     = null;
        public $salario   = null;

        //Overloading
        //Set
        function __set($atributo, $valor) {
            $this->$atributo = $valor;
        }

        //Get
        function __get($atributo) {
            return $this->$atributo;
        }

    }

    $funcionario = new Funcionario;

    //set

    $funcionario->__set('nome', 'Jose');
    $funcionario->__set('numFilhos', 2);
    $funcionario->__set('salario', 1500);
    $funcionario->__set('telefone', '9 99343434');
    $funcionario->__set('cargo', 'Eletricista');

    //get

    echo $funcionario->__get('nome') . ' possui ' . $funcionario->__get('numFilhos') . ' filho(s)';
    echo '<br />';
    echo 'Contato ' . $funcionario->__get('telefone') . '<br />Salario ' . $funcionario->__get('salario') . '<br />' . 'Cargo ' . $funcionario->__get('cargo');

?>