define(["jquery"], function ($) {
    "use strict"

    function emptyOrNotValidation(parent, child, evt) {
        $(parent).find(child).each(function (i, elem) {
            if ($(this).val() === "") {
                evt.preventDefault()
                $(this).addClass("dirty").attr("placeholder", "Please fill in some value!")
            } else {
                $(this).removeClass("input")
                $(this).addClass("valid")
            }

            $(this).focus(function () {
                $(this).addClass("input").attr("placeholder", "")
            })

            $(this).blur(function () {
                if ($(this).val() !== "") {
                    $(this).removeClass("input")
                    $(this).addClass("valid")
                } else {
                    $(this).removeClass("valid")
                    $(this).removeClass("input")
                    $(this).addClass("dirty").attr("placeholder", "Please fill in some value!")
                }
            })
        })
    }

    function isValidEmail() {
        // TODO
    }

    function validatePasswordRepeat() {
        // TODO
    }


    $(".login").submit(function (evt) {
        emptyOrNotValidation(".login", "input.form-input", evt)
    })


    $(".register").submit(function (evt) {
        emptyOrNotValidation(".register", "input.form-input", evt)
    })
})