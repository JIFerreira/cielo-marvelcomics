angular.module('marvelComics')
    .controller('handleRenderComicsController', RenderComics);

    RenderComics.$inject = ['handleRenderComicsService', '$rootScope'];

    function RenderComics (handleRenderComicsService, $rootScope) {
        const vm = this;
        vm.comics = handleRenderComicsService.initRendering();
        $rootScope.$emit('pageCurrent', 'list');

        vm.comics.then((listOf) => {
            vm.returnOfData = listOf.data.data.results;

        });

    }