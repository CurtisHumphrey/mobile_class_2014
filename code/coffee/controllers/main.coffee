define (require) ->
  ko = require 'knockout'
  $ = require "jquery"

  class Main_VM
    constructor: ->
      @title = ko.observable "Hello"

      @title.subscribe (new_value) -> console.log "Value changed to "+new_value
      return