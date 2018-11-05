angular.module('handleUser')
        .service('handleUserService', HandleUserService)
        

function HandleUserService($http){
    var vm = this;
    
    vm.register = function(objetoRegister){
        return $http.post('http://localhost:3000/users', objetoRegister);
    };

    vm.login = function(objetoLogin){
        return $http.get('http://localhost:3000/users?'+'email='+objetoLogin.email+'&password='+objetoLogin.password);
    };

    vm.update = function(userId, objetoUser){
        return $http.patch('http://localhost:3000/users/'+userId, objetoUser);
    };

    vm.delete = function(userId){
        return $http.delete('http://localhost:3000/users/'+userId);
    };
};