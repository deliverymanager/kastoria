angular.module("kastoria")
  .controller("MapController", function ($ionicSideMenuDelegate, $state, $scope, $ionicHistory) {

    $ionicSideMenuDelegate.toggleLeft(false);

    $scope.goToTour = function () {
      $ionicHistory.nextViewOptions({disableBack: true});
      $state.go("menu.cave");
    };

  });
