define(["jquery", 'accordion'], function ($, accordion) {
  "use strict"
  accordion.init('./data/faqs.json', '.card-head')
})