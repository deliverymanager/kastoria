angular.module('kastoria')
  .controller('CaveController', function ($ionicLoading, $scope, $rootScope, $ionicPopup, $timeout, _, $interval, $state, $ionicHistory, ngAudio, $ionicSideMenuDelegate, $ionicScrollDelegate) {

    $ionicLoading.show();

    $ionicSideMenuDelegate.canDragContent(false);
    /*Navigation Function*/
    $scope.navigateToMap = function () {
      $ionicHistory.nextViewOptions({disableBack: true});
      $state.go('menu.map');
    };

    $timeout(function () {
      _.each($rootScope.currentLanguage.points, function (point, key, list) {
        $rootScope.currentLanguage.points[key].sound = ngAudio.load('data/' + $rootScope.currentLanguage.language + '/' + point.soundFileName);
      });
    });


    $timeout(function () {
      _.each($rootScope.currentLanguage.points, function (point, key, list) {
        $rootScope.currentLanguage.points[key].sound.currentTime = 0;
      });
    }, 500);

    /*On loading Page*/
    $scope.togglePlay = function () {
      if ($rootScope.currentLanguage.points[$rootScope.data.index].sound.canPlay) {
        console.log("Sound is loaded enough to play!");
      }

      console.log("PLAY SOUND!");
      if ($rootScope.currentLanguage.points[$rootScope.data.index].sound.paused) {
        $rootScope.currentLanguage.points[$rootScope.data.index].sound.play();
        console.log($rootScope.currentLanguage.points[$rootScope.data.index].sound.remaining);
        $timeout(function () {
          console.log($rootScope.currentLanguage.points[$rootScope.data.index].sound.remaining);
          $rootScope.currentLanguage.points[$rootScope.data.index].duration = ($rootScope.currentLanguage.points[$rootScope.data.index].sound.remaining + $rootScope.currentLanguage.points[$rootScope.data.index].sound.currentTime).toFixed(1);
          console.log($rootScope.currentLanguage.points[$rootScope.data.index].duration);
        }, 500);
      } else {
        $rootScope.currentLanguage.points[$rootScope.data.index].sound.pause();
      }
    };

    $scope.changeSpot = function (index) {
      $rootScope.currentLanguage.points[$rootScope.data.index].sound.pause();
      $timeout(function () {
        $rootScope.data.index = index;
        $ionicScrollDelegate.resize();
      });
    };

    $timeout(function () {
      $ionicLoading.hide();
      $scope.changeSpot($rootScope.data.index);
    }, 1000);

    /*PLAY NEXT*/
    $scope.playNext = function () {
      $rootScope.currentLanguage.points[$rootScope.data.index].sound.pause();
      if ($rootScope.data.index + 1 < $rootScope.currentLanguage.points.length) {
        $rootScope.data.index = $rootScope.data.index + 1;
        $scope.changeSpot($rootScope.data.index);
      }
    };


    /*PLAY PREVIOUS*/
    $scope.playPrevious = function () {
      $rootScope.currentLanguage.points[$rootScope.data.index].sound.pause();
      if ($rootScope.data.index - 1 >= 0) {
        $rootScope.data.index = $rootScope.data.index - 1;
        $scope.changeSpot($rootScope.data.index);
      }
    };

    $scope.$on('resume', function () {
      console.log("resume called");
      $timeout(function () {
        _.each($rootScope.currentLanguage.points, function (point, key, list) {
          $rootScope.currentLanguage.points[key].duration = 1;
          $rootScope.currentLanguage.points[key].sound = ngAudio.load('data/' + $rootScope.currentLanguage.language + '/' + point.soundFileName);
        });
      });
    });

    //On Navigating Away
    $scope.$on('$destroy', function () {
      console.log("destroy called");
      _.each($rootScope.currentLanguage.points, function (point, key, list) {
        $rootScope.currentLanguage.points[key].sound.stop();
      });
    });

  });

