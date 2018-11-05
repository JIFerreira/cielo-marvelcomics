angular.module('marvelComics')
    .controller('handleRenderComicController', RenderComic);

    RenderComic.$inject = ['handleRenderComicService', '$location', '$scope'];

    function RenderComic (handleRenderComicService, $location, $rootScope) {
        const vm = this;
        let clearParamsRequested = $location;
        const theIdResponse = clearParamsRequested.$$path.split('/')[2];
        
        $rootScope.$emit('pageCurrent', 'details');

        vm.theComic = handleRenderComicService.searchTheComic(theIdResponse);

        vm.theComic.then((listOf) => {
            vm.comicDetails = listOf.data.data.results;
            console.log(vm.comicDetails);
        });
    }
