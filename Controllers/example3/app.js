var myApp = angular.module('myApp',[]);

myApp.factory("Share", function(){
    return {
        dataObject :{color:"Blue"}
    }
});

myApp.controller('ACtrl', function($scope,Share){
    //$scope.dataObject = {color : "Red"}
    $scope.dataObject = Share.dataObject;
});


myApp.controller('BCtrl', function($scope,Share){
    //$scope.dataObject = {color : "Green"}
    $scope.dataObject=Share.dataObject;
});

