(function() {
  define(function(require) {
    var $, Timers_VM, ko;
    ko = require('knockout');
    $ = require("jquery");
    return Timers_VM = (function() {
      function Timers_VM() {
        this.washer_time = ko.observable("1:05:00");
        this.dryer_time = ko.observable("1:05:00");
      }

      return Timers_VM;

    })();
  });

}).call(this);
