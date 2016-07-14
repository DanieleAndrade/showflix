
angular.module('showApp.controller', [])


.controller('HomeCtrl', function($scope, $http) {


  $scope.$watch('search', function() {
  });


  $scope.filme = function(Title, plot){

    var urlApi = 'http://www.omdbapi.com/?t=' + Title + '&plot=full';
          console.log(urlApi);

    $http.get(urlApi).success(function (data){
          console.log(data);

    })
        .error(function (data, status, headers, config) {
          console.log(data);
    });

  }

})




.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})
=======

>>>>>>> refs/remotes/origin/master
