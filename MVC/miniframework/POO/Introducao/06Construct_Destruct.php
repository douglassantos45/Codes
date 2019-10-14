<?php 

    class Pessoa {

        public $nome = null;

        //Construct
        function __construct($nome) {
            echo 'Objeto Iniciado';
            $this->nome = $nome;
        }

        //Destruct
        function __destruct() {
             echo '<br />Objeto removido';
        }

        function __get($atributo) {
            return $this->$atributo;
        }

        function correr(){
            echo '<br />'. $this->__get('nome') . ' está correndo';
        }

    }

    $pessoa = new Pessoa('Carlinhos');

    echo '<br />Nome: ' . $pessoa->__get('nome');
    echo $pessoa->correr();

    //Usando Destruct
    unset($pessoa);

?>