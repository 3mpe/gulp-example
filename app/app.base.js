.module('ionic-example', [ 'ionic', 'angularMoment', 'onezone-datepicker',
						   'permission.ui', 'LocalStorageModule', 'permission',
						   'angular-loading-bar', 'jett.ionic.content.banner',
						   'ionic-toast', 'ui.mask', 'blockUI', 'satellizer','ionic-modal-select'])


.value('Config', {
    debug: {
      events: true // true | false | onlyfired | onlycatched | onlywatched
    },
    sessionkey: 'gasess',
    userkey: 'gauser',
    api: {
      url: '/',
      version: 'v1'
    }
  });