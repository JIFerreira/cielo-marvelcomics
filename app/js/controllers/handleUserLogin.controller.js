angular.module('handleUser')
       .controller('handleUserLoginController', UserLogin);

 UserLogin.$inject = ['$location', '$window', 'handleUserService']

function UserLogin($location, $window, handleUserService){

    var vm = this;
    vm.dadosDeLogin = {};
    vm.alert_login = false;
    
    vm.confirmLogin = function (dados){
        if(dados !== undefined && dados.email != undefined && dados.password !== undefined){
            handleUserService.login(dados).then(function(res){
                if(res.data.length !== 0){
                    $window.sessionStorage.setItem('User-Info', JSON.stringify(res.data[0]));
                    $location.path('/user');
                }else{
                    vm.alert_login = true;
                }
            });
        }else{
            vm.alert_login = true;
        }

    };


    //BLOQUEANDO O ACESSO A PÁGINA DE LOGIN, SE JÁ ESTIVER LOGADO!
    if($location.url() === '/'){
        if($window.sessionStorage.getItem('User-Info') !== null){
            $location.path('/user');
        }
    }
}