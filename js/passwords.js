define(['jquery'], function ($) {
  'use strict'
  return {
    validatePassword: function (evt) {
      var password = $('#password')
      var repeatePassword = $('#rep-password')
      var isValidPassword = true

      password.removeClass('bad-value')
      repeatePassword.removeClass('bad-value')

      if ((password.val() !== '') &&
     (password.val().length < 8)) {
        password
       .addClass('bad-value')
        password
       .next()
       .addClass('show')
        evt.preventDefault()
        isValidPassword = false
      } else {
        isValidPassword = true
      }

      password.focus(function () {
        password
       .removeClass('bad-value')
        password
       .removeClass('valid')
        password
      .removeClass('dirty')
        password
       .addClass('input')
      })

      password.keyup(function () {
        if ((password.val() !== '') &&
       (password.val().length >= 8)) {
          password
         .removeClass('bad-value')
          password
         .addClass('valid')
          password
         .prev()
         .removeClass('show')
         .addClass('hide')
          password
         .next()
         .removeClass('show')
         .addClass('hide')
        } else if (password.val().length < 8) {
          password
        .addClass('bad-value')

          password
         .next()
         .removeClass('hide')
         .addClass('show')
        }
      })
      if ((isValidPassword) && (password.val() !== repeatePassword.val())) {
        repeatePassword
       .addClass('bad-value')
        repeatePassword
       .next()
       .removeClass('hide')
       .addClass('show')
        evt.preventDefault()
      }

      repeatePassword.focus(function () {
        repeatePassword.removeClass('valid')
        repeatePassword.addClass('input')
      })

      repeatePassword.keyup(function () {
        if ((isValidPassword) && (password.val() === repeatePassword.val())) {
          repeatePassword.removeClass('bad-value')
          repeatePassword.addClass('valid')

          repeatePassword
        .prev()
        .removeClass('show')
        .addClass('hide')

          repeatePassword
        .next()
        .removeClass('show')
        .addClass('hide')
        } else if ((isValidPassword) && (password.val() !== repeatePassword.val())) {
          repeatePassword.addClass('bad-value')

          repeatePassword
        .next()
        .removeClass('hide')
        .addClass('show')
        }
      })
    }
  }
})
