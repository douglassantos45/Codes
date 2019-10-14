<?php

    namespace App;

    class Route {

        private $routes;

        public function __construct() {
            $this->initroutes();
            $this->run($this->getUrl());
        }

        public function getRoutes(){
            return $this->routes;
        }

        public function setRoutes(array $routes) {
            $this->routes = $routes;
        }
        
        //Quais rotas a aplicação possuem
        public function initRoutes() {
            
            //Configurando Rotas

            $routes['home'] = array (
                'route' => '/',
                'controller' => 'indexController',
                'action' => 'index'
            );

            $routes['sobre_nos'] = array(
                'route' => '/sobre_nos',
                'controller' => 'indexController',
                'action' => 'sobreNos'
            );

            $this->setRoutes($routes);

        }

        public function run($url){
            foreach($this->getRoutes() as $key => $route){
                
                //Verificando Rota
                if($url == $route['route']) {
                    $class = "App\\Controllers\\".ucfirst($route['controller']);

                    //Instacionado a classe IndexController
                    $controller = new $class;

                    $action = $route['action'];
                    $controller->$action();
                }
            }       
        }

       //Verificando qual URL o usuário está acessando
        public function getUrl() {
            return parse_url(
                $_SERVER['REQUEST_URI'],
                PHP_URL_PATH
            );
        }
    }

?>