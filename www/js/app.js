// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('showApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .controller('MovieController', function($scope, $http) {
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Sherlock Holmes";

    function fetch() {
      $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
        .then(function(response) {
          $scope.details = response.data;
        });

      $http.get("http://www.omdbapi.com/?s=" + $scope.search)
        .then(function(response) {
          $scope.related = response.data;
        });
    }

    $scope.update = function(movie) {
      $scope.search = movie.Title;
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }
  });
