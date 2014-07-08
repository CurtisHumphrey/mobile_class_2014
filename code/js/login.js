(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(function(require) {
    var Login_VM, Main, ko;
    ko = require('knockout');
    Main = require('main');
    return Login_VM = (function() {
      function Login_VM() {
        this.Try_Login = __bind(this.Try_Login, this);
        this.email = ko.observable("");
        this.password = ko.observable("");
        this.login_ready = ko.computed((function(_this) {
          return function() {
            return _this.email().length > 5 && _this.password().length > 5;
          };
        })(this));
      }

      Login_VM.prototype.Try_Login = function(d, e) {
        return Main.Login(this.email(), this.password());
      };

      return Login_VM;

    })();
  });

}).call(this);
