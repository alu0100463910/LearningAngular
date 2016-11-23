var myApp = angular.module('myApp',[]);



myApp.controller('myCtrl', function($scope){
    
    var g = 'background:green';
    var r = 'background:red';

    var testValue = 1;

    angular.isObject(testValue) ? console.log(testValue + "%c is an object", g) : console.log(testValue + " %c is not an object", r);

    angular.isArray(testValue) ? console.log(testValue + "%c is an Array", g) : console.log(testValue + " %c is not an Array", r);

    angular.isString(testValue) ? console.log(testValue + "%c is an string", g) : console.log(testValue + " %c is not an string", r);

    angular.isDate(testValue) ? console.log(testValue + "%c is an date", g) : console.log(testValue + " %c is not an date", r);

    angular.isElement(testValue) ? console.log(testValue + "%c is an string", g) : console.log(testValue + " %c is not an string", r);

    angular.isFunction(testValue) ? console.log(testValue + "%c is an function", g) : console.log(testValue + " %c is not an function", r);

    angular.isDefined(testValue) ? console.log(testValue + "%c is defined", g) : console.log(testValue + " %c is not defined", r);

    angular.isUndefined(testValue) ? console.log(testValue + "%c is undefined", g) : console.log(testValue + " %c is not undefined", r);

    angular.isNumber(testValue) ? console.log(testValue + "%c is an number", g) : console.log(testValue + " %c is not an number", r);

});

    
    
    
