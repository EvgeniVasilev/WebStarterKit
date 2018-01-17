define(["jquery"], function ($) {
    "use strict"

    function emptyOrNotValidation(parent, child, evt) {
        $(parent).find(child).each(function (i, elem) {
            if (!$(this).val()) {
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
                if (!$(this).val()) {
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
        var e_mailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
            email = $("#email")

        if (email.val() && !email.val().match(e_mailValid)) {
            email.removeClass("dirty")
            email.removeClass("input")
            email.addClass("invalid_email")
            alert("Please insert a valid email!");

            email.focus(function () {
                email.removeClass("valid")
                email.addClass("input")
            })

        }

        email.blur(function () {
            if (email.val().match(e_mailValid)) {
                email.removeClass("input")
                email.removeClass("invalid_email")
                email.addClass("valid")
            }
        })

    }

    function validatePasswordRepeat() {
        // TODO
    }


    $(".login").submit(function (evt) {
        emptyOrNotValidation($(this), "input.form-input", evt)
    })


    $(".register").submit(function (evt) {
        emptyOrNotValidation($(this), "input.form-input", evt)
        isValidEmail()
    })
})