define (require) ->
  ko = require 'knockout'

  Main = require 'main'

  class Login_VM
    constructor: ->
      @email = ko.observable ""
      @password = ko.observable ""

      @login_ready = ko.computed => @email().length > 5 and @password().length > 5

    Try_Login: (d, e) =>
      Main.Login @email(), @password()