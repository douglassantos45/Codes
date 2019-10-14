<?php 

    //Herança
    class Veiculo {
        public $placa = null;
        public $cor   = null;

        function acelerar() {
            echo '<br />Acelerando...';
        }

        function freiar() {
            echo '<br />Freiando...';
        }
    }


    class Carro extends Veiculo {
        public $tetoSolar = true;
        
        function __construct($placa, $cor) {
            $this->placa = $placa;
            $this->cor   = $cor;
        }

        function abrirTetoSolar() {
            echo '<br />Abrindo teto solar';
        }

        function mudarVolante() {
            echo '<br />Virando o Volante';
        }
    }


    class Moto extends Veiculo {
        public $peso           = null;
        public $pesoBalanceado = true;

        function __construct($placa, $cor) {
            $this->placa = $placa;
            $this->cor   = $cor;
        }

        function empinar() {
            echo '<br />Empinando';
        }
    }


    //Instância
    $carro1 = new Carro('FFTA234', 'Azul');
    $carro2 = new Carro('234RTG2', 'Vermelho');
    
    print_r($carro1);
    echo '<br />';
    print_r($carro2);
    echo '<br />';

    $carro1->acelerar();
    $carro1->abrirTetoSolar();
    $carro2->mudarVolante();

    $moto1 = new Moto('CMP3452', 'Cinza');
    $moto2 = new Moto('POOWR23', 'Verde');

    print_r($moto1);
    echo '<br />';
    print_r($moto2);
    echo '<br />';

    $moto1->acelerar();
    $moto1->empinar();
    $moto2->acelerar();
    $moto2->freiar();

?>