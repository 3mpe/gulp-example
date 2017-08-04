angular
  .module('ionic-example')
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');
    $locationProvider.hashPrefix('!');

    // Main
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'components/layout/layout.html',
        controller: 'LayoutController',
        controllerAs: 'vm'
      })
      .state('app.home', {
        url: '/',
        views: {
          wrapper: { 
           templateUrl: 'components/home/home.html',
           controller: 'HomeController', 
           controllerAs: 'vm' }
        }
      });
