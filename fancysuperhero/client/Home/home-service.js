homeModule.factory('homeFactory', ['$http', function ($http) {

    return {
        getImages: function ()
        {
           // return $http.get('../../images/Gallery');
        }
    }
}]);
