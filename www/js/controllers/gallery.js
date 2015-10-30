angular.module('kastoria')
  .controller('GalleryController',function($ionicHistory){

    $ionicHistory.nextViewOptions({ disableBack: true });
  });
