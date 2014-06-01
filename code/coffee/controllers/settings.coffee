define (require) ->
  ko = require 'knockout'
  $ = require "jquery"

  ToHMM = (minutes) ->
    h = Math.floor minutes / 60
    m = minutes % 60
    m = "0"+m if m < 10
    ""+h+":"+m


  class Settings_VM
    constructor: ->
      @washer_options = ko.observableArray []
      @dryer_options  = ko.observableArray []
      @snooze_options = ko.observableArray []

      options = []
      for minutes in [10..4*50] by 5
        options.push 
          name: ToHMM minutes
          minutes: minutes
      @washer_options options

      options = []
      for minutes in [10..4*50] by 5
        options.push 
          name: ToHMM minutes
          minutes: minutes
      @dryer_options options

      options = []
      for minutes in [1..30]
        options.push 
          name: ToHMM minutes
          minutes: minutes
      @snooze_options options

      @washer_time = ko.observable 40
      @dryer_time  = ko.observable 60
      @snooze_time = ko.observable 10

      @washer_time.subscribe (nV) -> console.log nV

      @swipe_value = ko.observable false
      @swipe_text = ko.computed =>
        if @swipe_value()
          "Finished!"
        else
          "Swipe to finish"


      return

    Finish_Time: (d, e) =>
      @swipe_value  !@swipe_value()
      return