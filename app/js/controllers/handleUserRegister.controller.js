angular.module('handleUser')
        .controller('UserRegisterController', UserRegister)

UserRegister.$inject = ['handleUserService', '$location']

function UserRegister(handleUserService, $location){
    var vm = this;
    vm.dadosDeRegistro = {};
    vm.alert_login = false;

    vm.confirmRegister = function (dados){
        if(dados !== undefined && dados.nome != undefined && dados.email != undefined && dados.password !== undefined){
            handleUserService.register(dados).then(function(res){
                $location.path('/');
            }).catch(function(err){
                console.log(err);
            });
        }else{
            vm.alert_login = true;
        }
    };
};