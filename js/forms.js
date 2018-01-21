define(['jquery', 'presence', 'email', 'passwords'], function ($, presence, email, passwords) {
  'use strict'
  $('.login').submit(function (evt) {
    presence.emptyOrNotValidation('.login', 'input.form-input', evt)
  })
  $('.register').submit(function (evt) {
    presence.emptyOrNotValidation('.register', 'input.form-input', evt)
    email.isValidEmail(evt)
    passwords.validatePassword(evt)
  })
})
