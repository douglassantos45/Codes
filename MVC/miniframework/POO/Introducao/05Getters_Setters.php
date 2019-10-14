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

        //Métodos
        function resumiCadFun() {
            echo $this->__get('nome') . ' possui ' . $this->__get('numFilhos') . 
                ' filho(s)<br />Contato ' . $this->__get('telefone') . '<br />Salario ' . 
                $this->__get('salario') . '<br />' . 'Cargo ' . $this->__get('cargo');
        }


    }

    $funcionario = new Funcionario;

    //set

    $funcionario->__set('nome', 'Jose');
    $funcionario->__set('numFilhos', 2);
    $funcionario->__set('salario', 1500);
    $funcionario->__set('telefone', '9 99343434');
    $funcionario->__set('cargo', 'Eletricista');

    $funcionario->resumiCadFun();
    

?>