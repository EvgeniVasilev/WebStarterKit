define(["jquery"],function(a){"use strict";return{isValidEmail:function(s){var e=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,l=a("#email");l.removeClass("bad-value"),l.next().removeClass("show").addClass("hide"),l.val()&&!l.val().match(e)&&(l.removeClass("dirty"),l.removeClass("input"),l.addClass("bad-value"),l.next().removeClass("hide").addClass("show"),l.focus(function(){l.removeClass("valid"),l.addClass("input")}),s.preventDefault()),l.keyup(function(){l.val().match(e)?(l.removeClass("input"),l.removeClass("bad-value"),l.addClass("valid"),l.prev().removeClass("show").addClass("hide"),l.next().removeClass("show").addClass("hide")):(l.addClass("bad-value"),l.next().addClass("show"))})}}});