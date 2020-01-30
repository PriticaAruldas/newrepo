(function(){
    var app = angular.module("myapp",['ui.router']
     app.run(function($rootscope,$location,$state,Loginservice)
    {
        console.clear();
        console('runnuing');
        if(!Loginservice.isAuthenticated())
        {
            $state.transitionTo('Login');
        }
    });

    app.config(['$stateProvider','$urlrouteProvider',
    function($stateProvider,$urlrouteProvider)
    {
        $stateProvider
        .state('login',{
            url:'/login',
            template: 'login.html',
            controller:'LoginController'
        })

        .state('home',{
            url:'/home',
            template: 'home.html',
            controller:'homeController'
        });  
        
        $urlrouteProvider.otherwise('/Login');

    }]);

})();



