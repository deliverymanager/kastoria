angular.module('kastoria')
  .controller('CaveController', function ($scope, $rootScope, $ionicPopup, $timeout) {


    $scope.displayMedia = function (point) {
      $rootScope.point = point;


      var mediaPopup = $ionicPopup.show({
        templateUrl: 'templates/popups/mediaPopup.html',
        title: $rootScope.currentLanguage.caveMapTitle + '/' + $rootScope.currentLanguage.points[point].title,
        scope: $rootScope
      });

    }
    $scope.soundDrag = new Media('data/english/test.mp3', onSuccess, onError);
    $timeout(function () {
      $scope.soundDrag.play();
    }, 1000);

    function onSuccess() {
      console.log("playAudio():Audio Success");
    }

    // onError Callback
    //
    function onError(error) {
      console.log('code: ' + error.code + ' message: ' + error.message + '\n');
    }

    /*
     $scope.myTrack = {
     url: 'data/english/test.mp3'
     }
     */
  });

