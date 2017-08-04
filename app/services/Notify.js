angular
  .module('ionic-example')
  .service('Notify', function($q, $ionicLoading, $ionicPopover, $ionicModal, $ionicActionSheet, $ionicPopup, $timeout, ionicToast) {
    return {
      toast: function(message, duration, position) {
        duration = duration || 3000;
        position = position || 'bottom';

        var deferred = $q.defer();
        deferred.resolve(ionicToast.show(message, position, false, duration));
        return deferred.promise;
      },
      popup: function(opts) {
        return $ionicPopup.show(opts);
      },
      popover: function(template, opts) {
        return $ionicPopover.fromTemplate(template, opts);
      },
      popoverUrl: function(template, opts) {
        return $ionicPopover.fromTemplateUrl(template, opts);
      },
      modal: function(url, opts) {
        var options = angular.extend({ animation: 'slide-in-up' }, opts);
        var deferred = $q.defer();
        $ionicModal
          .fromTemplateUrl(url, options)
          .then(function(modal) {
            deferred.resolve(modal);
          });
        return deferred.promise;
      },
      confirm: function(confirmParams) {
        var deferred = $q.defer();
        var params = angular.extend({
          title: 'Emin misiniz?',
          cancelText: 'Vazgeç',
          cancelType: 'button-assertive',
          okText: 'Tamam',
          okType: 'button-positive',
        }, confirmParams);
        var confirmPopup = $ionicPopup.confirm(params);

        confirmPopup.then(function(res) {
          if (res) { deferred.resolve(res); } else { deferred.reject("bi biiiip!"); }
        });
        return deferred.promise;
      },
      actionSheet: function(titleText, Btn1Text, Button2Text, cancelFunc, buttonClickedFunc) {
        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
          buttons: [
            { text: Button2Text },
            { text: Button2Text }
          ],
          titleText: titleText,
          cancelText: 'Vazgec',
          cancel: cancelFunc(),
          buttonClicked: buttonClickedFunc()
        });

        $timeout(function() {
          hideSheet();
        }, 2000);
      },
      loadingOn: function(loadingparams) {
        var params = angular.extend({ template: '<ion-spinner icon="dots"></ion-spinner>', hideOnStateChange: true }, loadingparams);
        $ionicLoading.show(params);
      },
      loadingOff: function() {
        $ionicLoading.hide();
      }

    };
  });
