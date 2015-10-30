// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('kastoria', ['ionic', 'ngIOS9UIWebViewPatch', 'ngAudio'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('menu', {
        url: '/menu',
        cache: false,
        abstract: true,
        templateUrl: 'templates/pages/menu/index.html',
        controller: 'MenuController'
      })

      .state('menu.languages', {
        url: '/languages',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/languages/index.html',
            controller: 'LanguagesController'
          }
        }
      })
      .state('menu.cave', {
        url: '/cave',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/cave/index.html',
            controller: 'CaveController'
          }
        }
      })
      .state('menu.gallery', {
        url: '/gallery',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/gallery/index.html',
            controller: 'GalleryController'
          }
        }
      })
      .state('menu.map', {
        url: '/map',
        cache: false,
        views: {
          'menuContent': {
            templateUrl: 'templates/pages/map/map.html',
            controller: 'MapController'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/menu/languages');
  });
