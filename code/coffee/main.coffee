define (require) ->
  ko = require 'knockout'
  $ = require "jquery"
  FireBase = require "firebase"
  FirebaseSimpleLogin = require "firebase_login"

  PAGES =
    SETTINGS: "settings"
    TIMERS: "timers"
    LOGIN: "login"

  class Main_App
    constructor: ->
      @page = ko.observable PAGES.TIMERS
      @firebase_ref = new FireBase "https://radiant-fire-1684.firebaseio.com/"
      @auth = new FirebaseSimpleLogin @firebase_ref, @User_State
      @logged_in = ko.observable false
      @user = null
      @auth.logout()

    Open_Settings: (d, e) =>
      @page PAGES.SETTINGS

    Open_Timmers: (d, e) =>
      @page PAGES.TIMERS

    Open_Login: (d, e) =>
      @page PAGES.LOGIN

    User_State: (error, user) =>
      @logged_in false
      if error
        console.log error
        @Open_Login()
      else if user
        @user = user
        console.log('User ID: ' + user.uid + ', Provider: ' + user.provider)
        @logged_in true
        @Create_User()
      else
        console.log "User logged out"
        @Open_Login()

    Login: (email, password) =>
      @auth.login 'password',
        email: email
        password: password
        rememberMe: true

    Create_User: =>
      users = @firebase_ref.child "user_settings"
      users
        .child ""+@user.id
        .transaction (currentData) ->
          if currentData is null
            return {
              washer_time: 40
              dryer_time: 50
              snooze_time: 10
            }
          else
            return
        , (error, committed, snapshot) =>
          if error
            console.error error
          else
            @Open_Settings()

    User_Settings_Ref: =>
      if @logged_out 
        console.error "Called too soon"
        return

      return @firebase_ref
        .child "user_settings"
        .child @user.id


  return new Main_App()