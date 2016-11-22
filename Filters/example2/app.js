var myApp = angular.module('myApp',[]);

myApp.controller('appController', function($scope){

    $scope.specialsList = {
        "Apple":{"name" : "Apple", "priceInDollars":1.50, "salePriceInDollars":2, "specialDate":"Monday"},
        "Banana":{"name" : "Banana", "priceInDollars":2, "salePriceInDollars":3, "specialDate":"Tuesday"},
        "Cheryy":{"name" : "Cherries", "priceInDollars":2.3, "salePriceInDollars":4, "specialDate":"Wednesday"},
        "Eggs":{"name" : "Eggs", "priceInDollars":2.12, "salePriceInDollars":5, "specialDate":"Thursday"},
        "Figs":{"name" : "Figs", "priceInDollars":2.99, "salePriceInDollars":6, "specialDate":"Friday"},
    };

    $scope.description = "This controller contains a list of food specials.";
});

myApp.filter('dashes',function(){

    return function(text){
        var chars = text.split("");
        return chars.join('-');
    }
});