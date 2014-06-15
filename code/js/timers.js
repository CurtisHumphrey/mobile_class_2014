(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(function(require) {
    var $, Timers_VM, ko;
    ko = require('knockout');
    $ = require("jquery");
    require('kox_morf');
    return Timers_VM = (function() {
      function Timers_VM() {
        this.Tap_Washer = __bind(this.Tap_Washer, this);
        this.washer_time = ko.observable("1:05:00");
        this.dryer_time = ko.observable("1:05:00");
        this.washer = [];
        this.washer.pos = ko.observable(true);
        this.washer.on = ko.observable(false);
        this.washer.effect = ko.computed((function(_this) {
          return function() {
            var animate;
            if (!_this.washer.on()) {
              return animate = {
                css: {
                  '-webkit-transform': 'rotate(0deg)'
                },
                parameters: {
                  duration: '200ms'
                }
              };
            } else {
              return animate = {
                css: {
                  '-webkit-transform': _this.washer.pos() ? 'rotate(5deg)' : 'rotate(-5deg)'
                },
                parameters: {
                  duration: '300ms',
                  timingfunction: 'ease-out',
                  callback: function() {
                    return _this.washer.pos(!_this.washer.pos());
                  }
                }
              };
            }
          };
        })(this));
      }

      Timers_VM.prototype.Tap_Washer = function(d, e) {
        return this.washer.on(!this.washer.on());
      };

      return Timers_VM;

    })();
  });

}).call(this);
