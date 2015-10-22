angular.module('kastoria')
  .controller('CaveController', function ($scope, $rootScope, $ionicPopup, $timeout) {


    $scope.displayMedia = function (point) {
      if ($scope.soundDrag) {
        $scope.soundDrag.stop();
      }
      if (window.cordova) {
        console.log('data/' + $rootScope.currentLanguage.language + '/' + point.soundFileName);
        $scope.soundDrag = new Media('data/' + $rootScope.currentLanguage.language + '/' + point.soundFileName, onSuccess, onError);
      }
      var mediaPopup = $ionicPopup.show({
        templateUrl: 'templates/popups/mediaPopup.html',
        title: $rootScope.currentLanguage.caveMapTitle + ' / ' + point.title,
        scope: $rootScope
      });

    };

    $scope.playSound = function (progress) {
      $rootScope.currentLanguage.currentDescription = $rootScope.currentLanguage.points[index].description;
      if (!window.cordova) {
        return;
      }
      $timeout(function () {
        $scope.soundDrag.seekTo(progress);
        $scope.soundDrag.play();
      }, 1000);
    };

    function onSuccess() {
      console.log("playAudio():Audio Success");
    }

    // onError Callback
    //
    function onError(error) {
      console.log('code: ' + error.code + ' message: ' + error.message + '\n');
    }
  });

