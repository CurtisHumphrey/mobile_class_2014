(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(function(require) {
    var $, Main_App, PAGES, ko;
    ko = require('knockout');
    $ = require("jquery");
    PAGES = {
      SETTINGS: "settings",
      TIMERS: "timers"
    };
    return Main_App = (function() {
      function Main_App() {
        this.Open_Timmers = __bind(this.Open_Timmers, this);
        this.Open_Settings = __bind(this.Open_Settings, this);
        this.page = ko.observable(PAGES.TIMERS);
      }

      Main_App.prototype.Open_Settings = function(d, e) {
        return this.page(PAGES.SETTINGS);
      };

      Main_App.prototype.Open_Timmers = function(d, e) {
        return this.page(PAGES.TIMERS);
      };

      return Main_App;

    })();
  });

}).call(this);
