var app= angular.module("myapp")
app.controller("homeController",
function($scope, $rootscope, $state, $stateParams, Loginservice )
{
        $scope.user=$rootscope.userName;
});