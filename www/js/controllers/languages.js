angular.module('kastoria')
  .controller("LanguagesController", function ($ionicLoading, $scope, $rootScope, _, $timeout, $ionicSideMenuDelegate, $ionicPlatform, $state, $ionicHistory, $ionicSideMenuDelegate) {

    console.log("LanguagesController loaded...");

    /*Selecting Language function*/
    $ionicPlatform.ready(function () {
      $ionicSideMenuDelegate.canDragContent(true);
      if (ionic.Platform.isAndroid()) {
        $rootScope.rootDir = cordova.file.applicationDirectory + 'www/';
      } else if (ionic.Platform.isIOS()) {
        $rootScope.rootDir = "";
      }

      $scope.selectLanguage = function (language) {
        $ionicLoading.show();
        $rootScope.currentLanguage = _.findWhere($rootScope.languages, {"language": language});
        $ionicHistory.nextViewOptions({disableBack: true});
        $rootScope.data = {index: 0};
        $state.go('menu.cave');
      };
    });
  });
