var myApp = angular.module('myApp',[]);



myApp.controller('myCtrl', function($scope){
   
    $scope.value=0;

    $scope.clickFunction = function () {window.alert("You clicked once")};
    $scope.doubleClickFunction = function () {window.alert("You clicked twice")};
});
    
    
    
