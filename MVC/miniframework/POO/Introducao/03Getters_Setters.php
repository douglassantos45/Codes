<?php 

    class Funcionario {

        public $nome        = null;
        public $telefone    = null;
        public $numDeFilhos = null;
        
        //getters é do tipo return
        function getNome() {
            return $this->nome;
        }

        function getNumFilhos() {
            return $this->numDeFilhos;
        }


        //setteres é do tipo void
        function setNome($nome){
            $this->nome = $nome;
        }

        function setNumFilhos($numFilhos) {
            $this->numDeFilhos = $numFilhos;
        }


        //métodos
        function resumirCadFund() {
            return "$this->nome possui $this->numDeFilhos filho(s)";
        }

        function numDeFilhos() {

        }
    }

    $y = new Funcionario;

    $y->setNome("Jose");
    $y->setNumFilhos(2);

    echo $y->resumirCadFund();

?>