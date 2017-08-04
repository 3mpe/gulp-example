angular
  .module('ionic-example')
  .run(function ($ionicPlatform, $location, PermPermissionStore, Auth) {

    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) { StatusBar.styleDefault(); }
    });

    PermPermissionStore.definePermission('unauthorized', function () {
      return !Auth.isAuthorized();
    });

    PermPermissionStore.definePermission('authorized', function () {
      return Auth.isAuthorized();
    });

    // Auth init check
    Auth.initcheck();
  });
