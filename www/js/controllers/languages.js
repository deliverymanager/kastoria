angular.module('kastoria')
  .controller("LanguagesController", function ($scope, $rootScope, _, $timeout, $ionicSideMenuDelegate, $ionicPlatform, $state, $ionicHistory) {

    console.log("LanguagesController loaded...");

    /*Selecting Language function*/
    $ionicPlatform.ready(function () {

      if (ionic.Platform.isAndroid()) {
        $rootScope.rootDir = cordova.file.applicationDirectory + 'www/';
      } else if (ionic.Platform.isIOS()) {
        $rootScope.rootDir = "";
      }

      $scope.selectLanguage = function (language) {

        $rootScope.currentLanguage = _.findWhere($rootScope.languages, {"language": language});
        $ionicHistory.nextViewOptions({ disableBack: true });
        $state.go('menu.cave');
      };
    });
  });
