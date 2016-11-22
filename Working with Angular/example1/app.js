var myApp = angular.module('myApp',[]);

myApp.config(function($interpolateProvider){

        $interpolateProvider.startSymbol('(~');
        $interpolateProvider.endSymbol('~)');

}
);

myApp.controller('myCtrl', function($scope){
    $scope.someInformation= "Hello from the scope";
});

    
    
    
