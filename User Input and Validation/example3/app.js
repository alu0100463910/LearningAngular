var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', function($scope){

    $scope.model = {};

    $scope.submitForm=function(form){

        if (form.$valid){
            window.alert('Passed');
        }else{
             window.alert('Failed');
        }
    }
});

    
    
    
