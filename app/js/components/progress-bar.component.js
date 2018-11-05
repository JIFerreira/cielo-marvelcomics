angular
    .module('marvelComics')
    .component('progressBar', {
        template: 
            `<div class="progress"><div class="progress-bar progress-bar-striped" role="progressbar" style="width: {{progressValue}}%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div></div>`
        ,
        controller: function progressBarController ($scope, $interval, $rootScope) {
            $scope.amt = 1;
            $rootScope.listShow = false;
            $rootScope.progressShow = true;

            let progress = $interval(function() {
              $scope.progressValue = $scope.amt++;
            }, 10);

            $scope.$watch('amt', function() {
               if($scope.amt === 101){
                 $interval.cancel(progress);
                 $rootScope.listShow = true;
                 $rootScope.progressShow = false;
               } 
            })            
        }
    });
