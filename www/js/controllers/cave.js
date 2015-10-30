angular.module('kastoria')
  .controller('CaveController', function ($scope, $rootScope, $ionicPopup, $timeout, _, $interval, $state, $ionicHistory, ngAudio) {

    $scope.data = {index: 0};

    /*Initializing*/
    _.each($rootScope.currentLanguage.points, function (point, key, list) {
      /*$rootScope.currentLanguage.points[key].progress = 0;*/
      $rootScope.currentLanguage.points[key].playing = false;
    });

    /*Navigation Function*/
    $scope.navigateToMap = function () {
      $ionicHistory.nextViewOptions({disableBack: true});
      $state.go('menu.map');
    };


    /*

        /!*PLAY SOUND*!/
        $scope.playSound = function (progress) {


          if (progress) {
            console.log("progress: " + progress);
            //$scope.sound.seekTo(parseInt(progress) * 1000);

            $rootScope.currentLanguage.points[$scope.data.index].playing = true;
            return;
          }

          if ($rootScope.currentLanguage.points[$scope.data.index].playing) {
            if ($scope.sound) {
              $scope.sound.stop();
            }
          }
          $scope.stopAll();
          if (!window.cordova) {
            return;
          }
          $rootScope.currentLanguage.points[$scope.data.index].playing = true;

          /!*$scope.sound = new Media($rootScope.rootDir + 'data/' + $rootScope.currentLanguage.language + '/' + $rootScope.currentLanguage.points[$scope.data.index].soundFileName, onSuccess, onError);*!/
          $scope.sound = ngAudio.load('data/' + $rootScope.currentLanguage.language + '/' + $rootScope.currentLanguage.points[$scope.data.index].soundFileName);

          $timeout(function () {
            //$scope.sound.seekTo(parseInt($rootScope.currentLanguage.points[$scope.data.index].progress) * 1000);
            $scope.sound.play();
          }, 400);
        };


        var playSoundIntervalPromise;

        $scope.$on('$destroy', function () {
          console.log("destroy called");
          if (window.cordova && $scope.sound) {
            $scope.sound.stop();
            $scope.sound.release();
          }

          if (playSoundIntervalPromise) {
            $interval.cancel(playSoundIntervalPromise);
          }
        });

        playSoundIntervalPromise = $interval(function () {
          if (!window.cordova || !$scope.sound) {
            return;
          }

          $scope.sound.getCurrentPosition(
            function (position) {
              console.log(position);

              if ($rootScope.currentLanguage.points[$scope.data.index].playing && position !== -1 && position !== 0) {
                $rootScope.currentLanguage.points[$scope.data.index].progress = position;
              }

            },
            function (e) {

              console.log("Error getting pos=" + e);
            }
          );

        }, 200, 0, true);

     */


    /*On loading Page*/
    $scope.togglePlay = function(){

      console.log($scope.sound.paused);

      if($scope.sound.paused){
        $scope.sound.play();

        $rootScope.currentLanguage.points[$scope.data.index].duration = ($scope.sound.remaining + $scope.sound.currentTime).toFixed(1);

        console.log($rootScope.currentLanguage.points[$scope.data.index].duration);
      }else{

        $scope.sound.pause();

      }

    };


    $scope.changeSpot = function(index){

      if ($scope.sound) {
        $scope.sound.stop();
      }
      $rootScope.currentLanguage.points[$scope.data.index].playing = false;

      $scope.data.index = index;

      $scope.sound = ngAudio.load('data/' + $rootScope.currentLanguage.language + '/' + $rootScope.currentLanguage.points[$scope.data.index].soundFileName);

    };

    $scope.changeSpot(0);


    /*PLAY NEXT*/
    $scope.playNext = function () {

      if ($scope.data.index + 1 < $rootScope.currentLanguage.points.length) {
        $scope.data.index = $scope.data.index + 1;
        $scope.changeSpot($scope.data.index);
      }
    };


    /*PLAY PREVIOUS*/
    $scope.playPrevious = function () {
      if ($scope.data.index - 1 >= 0) {
        $scope.data.index = $scope.data.index - 1;
        $scope.changeSpot($scope.data.index);
      }
    };

    /*On Navigating Away */
    $scope.$on('$destroy', function () {
      console.log("destroy called");
      if ($scope.sound) {
        $scope.sound.stop();
      }
    });

    /*function onSuccess() {
      console.log("playAudio():Audio Success");
    }*/


    // onError Callback
    /*function onError(error) {
      console.log('code: ' + error.code + ' message: ' + error.message + '\n');
    }
     */


  });

