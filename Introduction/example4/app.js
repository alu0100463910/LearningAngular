var myApp = angular.module('myApp',[]);

myApp.controller('OuterCtrl', function($scope){

   // $scope.val1= "Fabius";

   $scope.val1 = {
       name : "Outer Fabius"
   };

    $scope.testFunction = function(){
        window.alert("Hello from Angular 1!");
    }

});

myApp.controller('InnerCtrl', function($scope){

});