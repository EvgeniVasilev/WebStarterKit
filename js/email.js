define(['jquery'], function ($) {
  'use strict'
  return {
    isValidEmail: function (evt) {
      var emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
      var email = $('#email')
      email
         .removeClass('bad-value')
      email
             .next()
             .removeClass('show')
             .addClass('hide')

      if (email.val() && !email.val().match(emailValid)) {
        email
           .removeClass('dirty')
        email
           .removeClass('input')
        email
           .addClass('bad-value')
        email
           .next()
           .removeClass('hide')
           .addClass('show')

        email
           .focus(function () {
             email
             .removeClass('valid')
             email
              .addClass('input')
           })
        evt.preventDefault()
      }

      email.keyup(function () {
        if (email.val().match(emailValid)) {
          email
             .removeClass('input')
          email
             .removeClass('bad-value')
          email
             .addClass('valid')

          email
              .prev()
              .removeClass('show')
              .addClass('hide')

          email
             .next()
             .removeClass('show')
             .addClass('hide')
        } else {
          email
             .addClass('bad-value')
          email
             .next()
             .addClass('show')
        }
      })
    }
  }
})
