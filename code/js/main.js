(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(function(require) {
    var $, FireBase, FirebaseSimpleLogin, Main_App, PAGES, ko;
    ko = require('knockout');
    $ = require("jquery");
    FireBase = require("firebase");
    FirebaseSimpleLogin = require("firebase_login");
    PAGES = {
      SETTINGS: "settings",
      TIMERS: "timers",
      LOGIN: "login"
    };
    Main_App = (function() {
      function Main_App() {
        this.User_Settings_Ref = __bind(this.User_Settings_Ref, this);
        this.Create_User = __bind(this.Create_User, this);
        this.Login = __bind(this.Login, this);
        this.User_State = __bind(this.User_State, this);
        this.Open_Login = __bind(this.Open_Login, this);
        this.Open_Timmers = __bind(this.Open_Timmers, this);
        this.Open_Settings = __bind(this.Open_Settings, this);
        this.page = ko.observable(PAGES.TIMERS);
        this.firebase_ref = new FireBase("https://radiant-fire-1684.firebaseio.com/");
        this.auth = new FirebaseSimpleLogin(this.firebase_ref, this.User_State);
        this.logged_in = ko.observable(false);
        this.user = null;
        this.auth.logout();
      }

      Main_App.prototype.Open_Settings = function(d, e) {
        return this.page(PAGES.SETTINGS);
      };

      Main_App.prototype.Open_Timmers = function(d, e) {
        return this.page(PAGES.TIMERS);
      };

      Main_App.prototype.Open_Login = function(d, e) {
        return this.page(PAGES.LOGIN);
      };

      Main_App.prototype.User_State = function(error, user) {
        this.logged_in(false);
        if (error) {
          console.log(error);
          return this.Open_Login();
        } else if (user) {
          this.user = user;
          console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
          this.logged_in(true);
          return this.Create_User();
        } else {
          console.log("User logged out");
          return this.Open_Login();
        }
      };

      Main_App.prototype.Login = function(email, password) {
        return this.auth.login('password', {
          email: email,
          password: password,
          rememberMe: true
        });
      };

      Main_App.prototype.Create_User = function() {
        var users;
        users = this.firebase_ref.child("user_settings");
        return users.child("" + this.user.id).transaction(function(currentData) {
          if (currentData === null) {
            return {
              washer_time: 40,
              dryer_time: 50,
              snooze_time: 10
            };
          } else {

          }
        }, (function(_this) {
          return function(error, committed, snapshot) {
            if (error) {
              return console.error(error);
            } else {
              return _this.Open_Settings();
            }
          };
        })(this));
      };

      Main_App.prototype.User_Settings_Ref = function() {
        if (this.logged_out) {
          console.error("Called too soon");
          return;
        }
        return this.firebase_ref.child("user_settings").child(this.user.id);
      };

      return Main_App;

    })();
    return new Main_App();
  });

}).call(this);
