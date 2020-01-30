
    var myapp = angular.module("app",[]);
    
    myapp.controller("msgcontroller",function ($scope){
        $scope.message="Table of Details of Students";

         $scope.detail_list = [
            {firstname:"Pritica", lastname:"Aruldas", qualification:"MSc Comp Sci", city:"Pune"},
            {firstname:"Sifa", lastname:"Tandel", qualification:"MSc Comp Sci", city:"Satara"},
            {firstname:"Shruti", lastname:"Patil", qualification:"BCA", city:"Mumbai"},
            {firstname:"Vedantika", lastname:"Ghadage", qualification:"M.Tech", city:"Pune"},
            {firstname:"Alfiya", lastname:"Shaikh", qualification:"BCS", city:"Kolhapur"},
         ];
         $scope.students = $scope.detail_list;
         console.log($scope.students);
    });

  

 