angular
  .module('ionic-example')
  .service('Cache', function($log, Storage) {
    var service = {
      temporary: {},
      errors: [],
      name: function(name) {
        service.temporary.name = "cache-" + name;
        return this;
      },
      data: function(data) {
        service.temporary.data = data;
        return this;
      },
      expire: function(expire) {
        service.temporary.expire = this.dateParser(expire);
        return this;
      },
      push: function() {
        if (this.errors.length > 0) {
          this.errors.map(function(message) { $log.error(message); });
          return;
        }
        Storage.name(service.temporary.name).set(service.temporary.data);
        Storage.name(service.temporary.name + "-expire").set(service.temporary.expire);
      },
      pull: function() {
        return Storage.name(service.temporary.name).get(service.temporary.data);
      },
      clean: function() {
        return Storage.name(service.temporary.name).remove();
      },
      isexpired: function(date) {
        var expire_date = this.dateParser(date) || moment();
        var saved_date = moment(Storage.name(service.temporary.name + "-expire").get());
        return saved_date.diff(expire_date) > 0 ? false : true;
      },
      dateParser: function(date) {
        if (typeof date == "string") {
          var parsed = date.split(" ");
          if (parsed.length < 2) {
            this.errors.push('String parameter format is must be "x|xx|xxxx seconds|minutes|hours|years"');
          }
          date = moment().add(parsed.shift(), parsed.pop());
        } else if (typeof date == "number") {
          date = moment().add(date, 'minutes');
        }
        return date;
      }
    };

    return service;

  });
