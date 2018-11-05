angular.module('handleUser')
     .controller('UserDetailsController', UserDetails)

UserDetails.$inject = ['$window', 'handleUserService','$location', '$route']

function UserDetails($window, handleUserService, $location, $route){
    var vm = this;

    //BLOQUEANDO O ACESSO A PÁGINA DE LOGIN, SE JÁ ESTIVER LOGADO!
    if($location.url() === '/user'){
        if($window.sessionStorage.getItem('User-Info') === null){
            $location.path('/');
        }else{
            vm.infosUsuario = JSON.parse($window.sessionStorage.getItem('User-Info'));
        }
    }
    vm.alter = {};

    vm.alterInfo = function(alterado){
        var user = document.querySelector('.button-alter-data'),
            idUser = user.getAttribute('data-user-id');
            console.log(alterado);
            handleUserService.update(idUser, alterado).then(function(success){
            var dados = JSON.stringify(success.data);
            $window.sessionStorage.removeItem('User-Info');
            $window.sessionStorage.setItem('User-Info', dados);
            $route.reload();
        }).catch(function(error){
            console.log(error);
        });
    };


    vm.deleteUser = function(){
        var user = document.querySelector('.button-delete-user'),
            idUser = user.getAttribute('data-user-id');
        handleUserService.delete(idUser).then(function(success){
            console.log(success);
            $window.sessionStorage.removeItem('User-Info');
            $location.path('/');
        }).catch(function(error){
            console.log(error);
        });
    };

    vm.sair = function(id){
        $window.sessionStorage.removeItem('User-Info');
        $location.path('/');
    };
};