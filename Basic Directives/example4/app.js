var myApp = angular.module('myApp',[]);



myApp.controller('appController', function($scope){
   
    $scope.firstName='';
    

    $scope.setName = function($fName){
        $scope.firstName=$fName;
      
    }
});
    
    
    
