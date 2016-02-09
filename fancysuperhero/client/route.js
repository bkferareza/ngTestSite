app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
       .when('/',
       {
           controller: 'homeController',
          // templateUrl: base + 'Templates/Archive'
       })
        .otherwise(
       {
           redirectTo: '/'
       });


});
