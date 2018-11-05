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
        
    $routeProvider
        .when('/comic/:id', {
            templateUrl: "app/js/layout/theComicDetail.html",
            controller: "handleRenderComicController",
            controllerAs: "RenderComic"
        }); 

    $routeProvider.otherwise('/');
}})();