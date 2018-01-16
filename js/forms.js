define(["jquery"], function ($) {
    "use strict"
    $(".login").submit(function (evt) {
        $(this).find("input.form-input").each(function (i, elem) {
            if (elem.value === "") {
                evt.preventDefault()
                $(this).addClass("dirty").attr("placeholder", "Please fill in some value!")
            } else {
                $(this).addClass("valid")
            }

            $(this).focus(function () {
                $(this).addClass("input").attr("placeholder", "")
            })

            $(this).blur(function () {
                if (elem.value !== "")
                    $(this).css({
                        border: "1px solid silver",
                        background: "lightgreen"
                    })
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
            }

            $(this).focus(function () {
                $(this).addClass("input").attr("placeholder", "")
            })

            $(this).blur(function () {
                if (elem.value !== "")
                    $(this).css({
                        border: "1px solid silver",
                        background: "lightgreen"
                    })
            })
        })
    })
})