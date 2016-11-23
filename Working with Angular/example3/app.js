var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl',function($scope,randomNameService,$q){

    var firstNamePromise = randomNameService.getName('first');
    var middleNamePromise = randomNameService.getName('middle');
    var lastNamePromise = randomNameService.getName('last'); 
/*
    firstNamePromise.then(function(name){$scope.firstName= name;});
    middleNamePromise.then(function(name){$scope.middleName= name;});
    lastNamePromise.then(function(name){$scope.lastName= name;}); 
    */
    var allPromisesDone = $q.all([firstNamePromise,middleNamePromise,lastNamePromise])

    allPromisesDone.then(
        function(data){
            console.log(data);
            $scope.firstName=data[0];
            $scope.middleName=data[1];
            $scope.lastName=data[2];
        }
    );  
});

myApp.factory('randomNameService', function($q, $timeout){

    var firstNames = ["Jane","April","Ann","Joanne","Kate","Karen"];
    var middleNames = ["Anson","Bernice","Jackie","George","Israel","Joy"];
    var lastNames = ["Smith","Nicolas","Miller","McPhee","Robert"];

    return {
        getName: function(nameType){

            var defer = $q.defer();
            $timeout(function(){
                var name = "";

                switch(nameType){
                    case "first":
                        name= firstNames[Math.floor(Math.random()*firstNames.length)];
                        break;
                    case "middle":
                        name= middleNames[Math.floor(Math.random() * middleNames.length)];
                        break;
                    case "last":
                        name= lastNames[Math.floor(Math.random() * lastNames.length)];
                        break;
                }

                defer.resolve(name);

            }, Math.random() * 3000);

            return defer.promise;

        }

    }


});
