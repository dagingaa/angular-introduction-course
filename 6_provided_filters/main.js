var myApp = angular.module('myApp', []);

myApp.factory('JamesService', function($http) {
  var James = {};

  James.fetchMovies = function(success, error) {
    $http({
      method: "GET",
      url: '/cmore.json'
    })
    .success(success)
    .error(error);
  };

  return James;
});

function MovieCtrl($scope, JamesService) {
  $scope.movies = [];

  JamesService.fetchMovies(
    function(response) {
      $scope.movies = response;
    }, 
    function(error) {
      console.log('An error has occured');
    }
  );
}
