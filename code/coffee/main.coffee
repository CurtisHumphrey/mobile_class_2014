define (require) ->
  ko = require 'knockout'
  $ = require "jquery"

  PAGES =
    SETTINGS: "settings"
    TIMERS: "timers"

  class Main_App
    constructor: ->
      @page = ko.observable PAGES.TIMERS

    Open_Settings: (d, e) =>
      @page PAGES.SETTINGS

    Open_Timmers: (d, e) =>
      @page PAGES.TIMERS

  return new Main_App()