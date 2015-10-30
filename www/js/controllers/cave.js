angular.module('kastoria')
  .controller('CaveController', function ($scope, $rootScope, $ionicPopup, $timeout, _, $interval, $state, $ionicHistory, ngAudio) {

    /*Navigation Function*/
    $scope.navigateToMap = function () {
      $ionicHistory.nextViewOptions({disableBack: true});
      $state.go('menu.map');
    };

    /*On loading Page*/
    $scope.togglePlay = function () {

      if ($scope.sound.paused) {
        $scope.sound.play();

        $timeout(function () {
          $rootScope.currentLanguage.points[$rootScope.data.index].duration = ($scope.sound.remaining + $scope.sound.currentTime).toFixed(1);
        });
      } else {
        $scope.sound.pause();
      }
    };


    $scope.changeSpot = function () {

      if ($scope.sound) {
        $scope.sound.stop();
      }
      $rootScope.currentLanguage.points[$rootScope.data.index].duration = 1;
      $scope.sound = ngAudio.load('data/' + $rootScope.currentLanguage.language + '/' + $rootScope.currentLanguage.points[$rootScope.data.index].soundFileName);
    };

    $scope.changeSpot();

    /*PLAY NEXT*/
    $scope.playNext = function () {

      if ($rootScope.data.index + 1 < $rootScope.currentLanguage.points.length) {
        $rootScope.data.index = $rootScope.data.index + 1;
        $scope.changeSpot();
      }
    };


    /*PLAY PREVIOUS*/
    $scope.playPrevious = function () {
      if ($rootScope.data.index - 1 >= 0) {
        $rootScope.data.index = $rootScope.data.index - 1;
        $scope.changeSpot();
      }
    };

    /*On Navigating Away */
    $scope.$on('$destroy', function () {
      console.log("destroy called");
      if ($scope.sound) {
        $scope.sound.stop();
      }
    });

  });

