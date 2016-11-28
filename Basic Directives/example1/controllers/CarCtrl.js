function CarCtrl($scope){

    $scope.cars ={
        "BMW":{"make" : "BMW", "model":"1 Series", "year":"2010"},
        "Audi":{"make" : "Audi", "model":"R8", "year":"2015"},
        "Mercedes":{"make" : "Mercedes", "model":"C-Class", "year":"2009"},
        "Honda":{"make" : "Honda", "model":"Civic", "year":"2013"},
        "Ford":{"make" : "Ford", "model":"Mustang", "year":"2000"},     
    };

    $scope.description = "This controller contains a list of a cars.";

}