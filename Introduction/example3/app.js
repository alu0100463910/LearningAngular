var myApp = angular.module('myApp',[]);

myApp.controller('AppCtrl', function($scope){

    $scope.model = {
        firstName : "Fabio",
        lastName : "Mendoza"
    };

    $scope.testFunction = function(){
        window.alert("Hello from Angular 1!");
    }

});