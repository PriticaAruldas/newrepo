var app= angular.module('myapp')
    appp.controller('LoginController',function($scope, $rootscope, $state, $stateParams, Loginservice)
    {
        $scope.formsubmit = function()
        {
            if(Loginservice.login($scope.emailId,$scope.pswd)){
                $rootscope.email= $scope.emailId;
                $scope.error="";
                $scope.emailId="";
                $scope.pswd="";
                $state.transition.To('home');
                
            }
            else
            {
                $scope.error="Incorrect  EmailId!";
            }   
        };
    });