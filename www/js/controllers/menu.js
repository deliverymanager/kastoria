angular.module("kastoria")
  .controller('MenuController', function ($rootScope, $http, _, $ionicPlatform) {

    console.log("MenuController loaded!");

    $ionicPlatform.ready(function () {
      $http.get('data/languages.json')
        .success(function (response) {

          console.log("Success in getting languages.json");

          console.log("What GET received: ");
          console.log(response);

          /*Array that contains all language objects*/
          $rootScope.languages = response;

          /*Setting the current language*/
          $rootScope.currentLanguage = _.findWhere($rootScope.languages, {"language": "english"});

        })
        .error(function (err) {

          console.log("Problem: " + err);

        });
    });


  });
