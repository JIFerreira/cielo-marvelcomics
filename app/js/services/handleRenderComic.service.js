angular.module('marvelComics')
    .service('handleRenderComicService', HandleRenderComicService);

    function HandleRenderComicService($http) {
        const vm = this;
        let timestamp = 1;
        let privateKey = '175189e5a357bbbff97107e995c7bcbe66185858';
        let publicKey = 'f3d08986955380b5ccc7ad7d8918f3ae';
        let hash = '0896943f190926c3a23bf998ffe3dea6';

        vm.searchTheComic = function(url) {
            return $http.get(`http://gateway.marvel.com/v1/public/comics/${url}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`);
        }
    }