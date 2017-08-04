angular
  .module('ionic-example')
  .config(function($authProvider) {

    $authProvider.tokenName = 'access_token';
    var facebookConfig = {
      clientId: '',
      scope: ['email'],
      responseType: 'token',
      authorizationEndpoint: 'https://www.facebook.com/v2.3/dialog/oauth'
    };

    switch (location.hostname) {
      case 'localhost':
        facebookConfig.clientId = '';
        break;
    }
    $authProvider.facebook(facebookConfig);
  });