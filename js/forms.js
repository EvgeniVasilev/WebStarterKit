define(["jquery"], function ($) {
    "use strict"
    $(".login").submit(function (evt) {
        $(this).find("input.form-input").each(function (i, elem) {
            if (elem.value === "") {
                evt.preventDefault()                        
                elem.style.borderColor = "red" 
                elem.style.borderWidth = "2px"
                elem.placeholder = "Please, fill in the text field!"                  
            } else {
                elem.style.borderColor = "silver"
                elem.style.borderWidth = "1px"
            }
        })
    })
})