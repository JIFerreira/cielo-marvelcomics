(function(){
    'use strict';

    angular
        .module('marvelComics')
        .config(config);

function config($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: "app/js/layout/catalogOfComics.html",
            controller: "handleRenderComicsController",
            controllerAs: "RenderComics"
        });  
        
    // $routeProvider
    //     .when('/register', {
    //         templateUrl: "app/js/layout/register.html",
    //         controller: "UserRegisterController",
    //         controllerAs: "UserRegister"
    //     });        
        
    // $routeProvider
    //     .when('/user', {
    //         templateUrl: "app/js/layout/user.html",
    //         controller: "UserDetailsController",
    //         controllerAs: "UserDetails"
    //     });  

    $routeProvider.otherwise({redirectTo: '/'});
}})();