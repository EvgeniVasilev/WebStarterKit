define(["jquery"], function ($) {
  "use strict"
  var footer = $("footer")
  var footerHeight = parseInt(footer.css("height"))
  var windowHeight = parseInt($(window).height())
  
  footer.css({
    position: "absolute",
    width: "100%",
    top: (windowHeight - footerHeight) + "px"
  })  
})