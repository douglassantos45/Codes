<?php 

    class Funcionario {

        //Atributo
        public $nome = "Carlos";
        public $telefone = "45 02931099";
        public $numFilho = 2;

        //Métodos
        function resumirCadFun() {
            return ("$this->nome tem $this->numFilho filho(s)");
        }

        function modificarNumFilhos($numFilho) {
            $this->numFilho = $numFilho;
        }

    }

    $y = new Funcionario;

    $y->modificarNumFilhos(10);
    echo $y->resumirCadFun();

    

?>