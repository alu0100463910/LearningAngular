function randomFunction(el){
    var $scope = angular.element(el).scope();
    $scope.firstName = "Fabiuu";
    $scope.lastName = "Fuu";
    $scope.$apply();
}