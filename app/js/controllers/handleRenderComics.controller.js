angular.module('marvelComics')
    .controller('handleRenderComicsController', RenderComics);

    RenderComics.$inject = ['handleRenderComicsService'];

    function RenderComics (handleRenderComicsService) {
        const vm = this;
        vm.comics = handleRenderComicsService.initRendering();

        vm.comics.then((listOf) => {
            vm.returnOfData = listOf.data.data.results;
            console.log(vm.returnOfData);
        });

    }