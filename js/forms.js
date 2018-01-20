define(['jquery'], function ($) {
  'use strict'

  function emptyOrNotValidation (parent, child, evt) {
    $(parent).find(child).each(function (i, elem) {
      if ($(this).val() === '') {
        evt.preventDefault()
        $(this).addClass('dirty').attr('placeholder', 'Please fill in some value!')
      } else {
        $(this).removeClass('input')
        $(this).addClass('valid')
      }

      $(this).focus(function () {
        $(this).addClass('input').attr('placeholder', '')
      })

      $(this).blur(function () {
        if ($(this).val() !== '') {
          $(this).removeClass('input')
          $(this).addClass('valid')
        } else {
          $(this).removeClass('valid')
          $(this).removeClass('input')
          $(this).addClass('dirty').attr('placeholder', 'Please fill in some value!')
        }
      })
    })
  }

  function isValidEmail (evt) {
    var emailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
    var email = $('#email')

    email.removeClass('bad-value')

    if (email.val() && !email.val().match(emailValid)) {
      email.removeClass('dirty')
      email.removeClass('input')
      email.addClass('bad-value')
      alert('Please insert a valid email!')

      email.focus(function () {
        email.removeClass('valid')
        email.addClass('input')
      })
      evt.preventDefault()
    }

    email.keyup(function () {
      if (email.val().match(emailValid)) {
        email.removeClass('input')
        email.removeClass('bad-value')
        email.addClass('valid')
      } else {
        email.addClass('bad-value')
      }
    })
  }

  function validatePassword (evt) {
    var password = $('#password')
    var repeatePassword = $('#rep-password')
    var isValidPassword = true

    password.removeClass('bad-value')
    repeatePassword.removeClass('bad-value')

    if ((password.val() !== '') &&
     (password.val().length < 8)) {
      password.addClass('bad-value')
      alert('Password must be et least 8 characters!')
      evt.preventDefault()
      isValidPassword = false
    } else {
      isValidPassword = true
    }

    password.focus(function () {
      password.removeClass('bad-value')
      password.removeClass('valid')
      password.removeClass('dirty')
      password.addClass('input')
    })

    password.keyup(function () {
      if ((password.val() !== '') &&
       (password.val().length >= 8)) {
        password.removeClass('bad-value')
        password.addClass('valid')
      } else if (password.val().length < 8) {
        password.addClass('bad-value')
      }
    })
    if ((isValidPassword) && (password.val() !== repeatePassword.val())) {
      repeatePassword.addClass('bad-value')
      alert('Passwords does not match!')
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
      } else if ((isValidPassword) && (password.val() !== repeatePassword.val())) {
        repeatePassword.addClass('bad-value')
      }
    })    
  }

  $('.login').submit(function (evt) {
    emptyOrNotValidation('.login', 'input.form-input', evt)
  })

  $('.register').submit(function (evt) {
    emptyOrNotValidation('.register', 'input.form-input', evt)
    isValidEmail(evt)
    validatePassword(evt)
  })
})
