define (require) ->
  ko = require 'knockout'
  $ = require "jquery"

  class Timers_VM
    constructor: ->
      @washer_time = ko.observable "1:05:00"
      @dryer_time = ko.observable "1:05:00"
