var myApp = angular.module('myApp', []);

myApp.factory('Data', function() {
  return {message: 'Hello Data'};
});

myApp.filter('reverse', function() {
  return function(text) {
      return text.split("").reverse().join("");
    };
});

function FirstCtrl($scope, Data) {
  $scope.data = Data;
}

function SecondCtrl($scope, Data) {
  $scope.data = Data;

  $scope.reversedText = function(text) {
    return text.split("").reverse().join("");
  };
}
