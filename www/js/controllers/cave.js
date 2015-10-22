angular.module('kastoria')
  .controller('CaveController',function($scope,$rootScope,$ionicPopup){


    $scope.displayMedia = function(point){
      $rootScope.point = point;


      var mediaPopup = $ionicPopup.show({
        templateUrl:'templates/popups/mediaPopup.html',
        title:$rootScope.currentLanguage.caveMapTitle+'/'+$rootScope.currentLanguage.points[point].title,
        scope:$rootScope
      });

    }




  });

