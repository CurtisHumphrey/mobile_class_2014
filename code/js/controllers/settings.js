(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(function(require) {
    var $, Settings_VM, ToHMM, ko;
    ko = require('knockout');
    $ = require("jquery");
    ToHMM = function(minutes) {
      var h, m;
      h = Math.floor(minutes / 60);
      m = minutes % 60;
      if (m < 10) {
        m = "0" + m;
      }
      return "" + h + ":" + m;
    };
    return Settings_VM = (function() {
      function Settings_VM() {
        this.Finish_Time = __bind(this.Finish_Time, this);
        var minutes, options, _i, _j, _k, _ref, _ref1;
        this.washer_options = ko.observableArray([]);
        this.dryer_options = ko.observableArray([]);
        this.snooze_options = ko.observableArray([]);
        options = [];
        for (minutes = _i = 10, _ref = 4 * 50; _i <= _ref; minutes = _i += 5) {
          options.push({
            name: ToHMM(minutes),
            minutes: minutes
          });
        }
        this.washer_options(options);
        options = [];
        for (minutes = _j = 10, _ref1 = 4 * 50; _j <= _ref1; minutes = _j += 5) {
          options.push({
            name: ToHMM(minutes),
            minutes: minutes
          });
        }
        this.dryer_options(options);
        options = [];
        for (minutes = _k = 1; _k <= 30; minutes = ++_k) {
          options.push({
            name: ToHMM(minutes),
            minutes: minutes
          });
        }
        this.snooze_options(options);
        this.washer_time = ko.observable(40);
        this.dryer_time = ko.observable(60);
        this.snooze_time = ko.observable(10);
        this.washer_time.subscribe(function(nV) {
          return console.log(nV);
        });
        this.swipe_value = ko.observable(false);
        this.swipe_text = ko.computed((function(_this) {
          return function() {
            if (_this.swipe_value()) {
              return "Finished!";
            } else {
              return "Swipe to finish";
            }
          };
        })(this));
        return;
      }

      Settings_VM.prototype.Finish_Time = function(d, e) {
        this.swipe_value(!this.swipe_value());
      };

      return Settings_VM;

    })();
  });

}).call(this);
