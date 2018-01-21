define(['jquery'], function ($) {
  'use strict'
  return {
    emptyOrNotValidation: function (parent, child, evt) {
      $(parent).find(child).each(function (i, elem) {
        if ($(this).val() === '') {
          evt.preventDefault()
          $(this)
                 .addClass('dirty')
          $(this)
                 .prev()
                 .removeClass('hide')
                 .addClass('show')
        } else {
          $(this)
                 .removeClass('input')
          $(this)
                 .addClass('valid')
          $(this)
                 .prev()
                 .removeClass('show')
                 .addClass('hide')
        }

        $(this).keyup(function () {
          if ($(this).val() === '') {
            $(this)
                  .prev()
                  .removeClass('hide')
                  .addClass('show')
          } else {
            $(this)
                  .prev()
                  .removeClass('show')
                  .addClass('hide')
          }
        })

        $(this).focus(function () {
          $(this)
                 .addClass('input')
        })

        $(this).blur(function () {
          if ($(this).val() !== '') {
            $(this)
                   .removeClass('input')
            $(this)
                   .addClass('valid')
            $(this)
                  .prev()
                  .removeClass('show')
                  .addClass('hide')
          } else {
            $(this)
                   .removeClass('valid')
            $(this)
                   .removeClass('input')
            $(this)
                   .addClass('dirty')
          }
        })
      })
    }
  }
}
)
