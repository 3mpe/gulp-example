angular
  .module('ionic-example')
  .service('Events', function($rootScope, $log, Config) {
    return {
      emit: function(name, args) {
        $rootScope.$emit(name, args);
        if (Config.debug.events || Config.debug.events == 'onlyfired') { $log.info('Event fired: ', name); }
      },
      listen: function(name, callback) {
        $rootScope.$on(name, function() {
          if (Config.debug.events || Config.debug.events == 'onlycatched') { $log.info('Event catched: ', name); }
          if (callback instanceof Function) { callback(); }
        });
      },
      watch: function(scope, watching, callback) {
        if (!scope) {
          if (Config.debug.events || Config.debug.events == 'onlywatched') { $log.error('[Events:watch] Scope is not defined!'); }
          return;
        }
        if (callback instanceof Function) {
          scope.$watch(watching, callback, true);
        }
      }
    };
  });