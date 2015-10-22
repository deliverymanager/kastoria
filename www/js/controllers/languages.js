angular.module('kastoria')
  .controller("LanguagesController", function ($scope, $rootScope, _,$timeout,$ionicSideMenuDelegate) {

    console.log("LanguagesController loaded...");

    /*Selecting Language function*/
    $scope.selectLanguage = function(language){

      $rootScope.currentLanguage = _.findWhere($rootScope.languages,{"language":language});

      $timeout(function(){
        $ionicSideMenuDelegate.toggleLeft(true);
      });
    }

  });
