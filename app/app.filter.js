angular
  .module('ionic-example')
  .filter('trusted', function($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  })
  .filter('TL', function() {
    return function(input) {
      if (input) {
        return parseFloat(input).toFixed(0) + '₺';
      }
    };
  });