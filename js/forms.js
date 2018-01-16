define(["jquery"], function ($) {
    "use strict"
    $(".login").submit(function (evt) {
        $(this).find("input.form-input").each(function (i, elem) {
            if (elem.value === "") {
                evt.preventDefault()
                $(this).css({
                    border: "2px solid red",
                    background: "pink"
                }).attr("placeholder", "Please fill in some value!")
            } else {
                $(this).css({
                    border: "1px solid silver",
                    background: "lightgreen"
                })
            }

            $(this).focus(function () {
                $(this).css({
                    border: "1px solid silver",
                    background: "white"
                }).attr("placeholder", "")
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