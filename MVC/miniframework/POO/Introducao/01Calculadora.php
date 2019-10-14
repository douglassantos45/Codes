<?php 

    class Calculadora {

        public $a = 10;
        public $b = 5;
        public $op = 'soma';

        public static function calcular() {

            if($this->op == 'soma') {
                return $this->a + $this->b;
            }
           
        }

    }

    $calculadora = new Calculadora;

    $calculadora->calcular();

?>
