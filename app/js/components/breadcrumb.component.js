angular
    .module('marvelComics')
    .component('breadcrumb', {
        template: 
            `        
            <nav aria-label="breadcrumb" ng-show="locale === 'details'">
                <ol class="breadcrumb-color destructuring-ancor-w">
                    <div class="container">
                            <li class="breadcrumb-item active"><a ng-href="#!/"><i class="fas fa-arrow-left"></i> All Comics</a></li>
                    </div>
                </ol>
            </nav>`
        ,
        controller: function breadcrumbController ($scope, $rootScope) {

            $rootScope.$on('pageCurrent', function(evt, data) {
                $scope.locale = data;
            })
        }
    });
