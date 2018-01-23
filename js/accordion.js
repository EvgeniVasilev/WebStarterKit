define(['jquery'], function ($) {
  return {
    init: function (data, param) {
      this.getData(data, param)
    },

    closeAccordion: function () {
      $('.card-head')
            .removeClass('active')

      $('.card-body')
            .slideUp(300)
            .removeClass('open')
    },

    printCardHtml: function (param) {
      return '<div class="card"><div class="card-header-content"><div class="card-head" data-body="#card' + (param + 1) + '" aria-live="polite"></div><span class="open-mark"></span></div><div id="card' + (param + 1) + '" class="card-body" aria-live="polite"></div>'
    },

    buildAccordionEvents: function (param) {
      var self = this
      $(param).on('click', function (evt) {
        var cardToOpen = $(this)
                .attr('data-body')

            // process swap between [+] and [-]
        $('#opened')
                .removeClass('close-mark')
                .attr('id', '')

        $(this)
                .next()
                .addClass('close-mark')

        $(this)
                .next()
                .attr('id', 'opened')

        if ($(evt.target).hasClass('active')) {
          self.closeAccordion()

          $(this)
                    .next()
                    .toggleClass('close-mark')
        } else {
          self.closeAccordion()

          $(this)
                    .addClass('active')

          $(cardToOpen)
                    .slideDown(300)
                    .addClass('open')
        }
      })
    },

    getData: function (data, param) {
      var self = this
      $.getJSON(data)
       .done(function (result) {
         var dataLength = result.faqs.length

         for (var i = 0; i < dataLength; i++) {
           $('.accordion')
                .append(self.printCardHtml(i))

           $('.card-head')
                .eq(i)
                .text('Q: ' + result.faqs[i].question)

           $('.card-body')
                .eq(i)
                .text(result.faqs[i].answer)
         }

         self.buildAccordionEvents(param)
       })
    .fail(function (error) {
      $('.accordion')
            .append('<p>Woops something went wrong! Please, try again later!</p>')

      console.log(error.responseText)
    })
    }
  }
})
