angular.module('kastoria')
  .controller("KastoriaController", function ($scope) {

    $scope.myLocation = {
      lat: '40.505038',
      lng: '21.284637'
    }


    $scope.map = {
      center: {
        latitude: $scope.myLocation.lat,
        longitude: $scope.myLocation.lng
      },
      zoom: 16,
      pan: 1
    };

    $scope.marker = {
      id: 0,
      coords: {
        latitude: $scope.myLocation.lat,
        longitude: $scope.myLocation.lng
      }
    };

    $scope.marker.options = {
      draggable: false
    };

  });
