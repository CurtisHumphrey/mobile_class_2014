(function() {
  define(function(require) {
    var $, Main_VM, ko;
    ko = require('knockout');
    $ = require("jquery");
    return Main_VM = (function() {
      function Main_VM() {
        this.title = ko.observable("Hello");
        this.title.subscribe(function(new_value) {
          return console.log("Value changed to " + new_value);
        });
        return;
      }

      return Main_VM;

    })();
  });

}).call(this);
