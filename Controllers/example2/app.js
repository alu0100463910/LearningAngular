var myApp = angular.module('myApp',[]);

myApp.factory('Share', function(){
    return {sharedMessage: "im am shared"}
})

function controllerA($scope,Share){
    $scope.value = "Hello from controoler A";
    //$scope.sharedValue = 'value@A';
    $scope.sharedValue = Share;
}

function controllerB($scope,Share){
    $scope.value = "Hello from controoler B";
    //$scope.sharedValue = 'value@B';
    $scope.sharedValue = Share;
}
