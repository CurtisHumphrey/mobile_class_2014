define (require) ->
  ko = require 'knockout'
  $ = require "jquery"
  require 'kox_morf'

  class Timers_VM
    constructor: ->
      @washer_time = ko.observable "1:05:00"
      @dryer_time = ko.observable "1:05:00"

      @washer = []
      @washer.pos = ko.observable true
      @washer.on = ko.observable false
      @washer.effect = ko.computed =>
        unless @washer.on()
          animate =
            css:
              '-webkit-transform': 'rotate(0deg)'
            parameters:
              duration: '200ms'
        else
          animate =
            css:
              '-webkit-transform': if @washer.pos() then 'rotate(5deg)' else 'rotate(-5deg)'
            parameters:
              duration: '300ms'
              timingfunction: 'ease-out'
              callback: =>
                @washer.pos !@washer.pos()

    ##Event Bindings
    Tap_Washer: (d, e) =>
      @washer.on !@washer.on()