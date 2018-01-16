define(["jquery"], function ($) {
    "use strict"
    $(".login").submit(function (evt) {
        $(this).find("input.form-input").each(function (i, elem) {
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
    })


    $(".register").submit(function (evt) {
        $(this).find("input.form-input").each(function (i, elem) {
            if (elem.value === "") {
                evt.preventDefault()
                $(this).addClass("dirty").attr("placeholder", "Please fill in some value!")
            } else {
                $(this).addClass("valid")  
                $(this).removeClass("input")             
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
    })
})