var myApp = angular.module('myApp',[]);



myApp.controller('myCtrl', function($scope){
    
    $scope.value = "Original Value";

    $scope.$watch('value',function(){
        if($scope.value != 'Original Value'){
            $scope.message = "Please change me back to my 'Original Value'";
        }else{
            $scope.message = "";
        }
    });
});

    
    
    
