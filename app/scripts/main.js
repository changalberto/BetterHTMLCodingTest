(function($) {
  'use strict';

  var slideout = new Slideout({
    'panel': $('.main-container')[0],
    'menu': $('nav')[0],
    'padding': 256,
    'tolerance': 70
  });

  $('.hamburger').on('click', function(e) {
    e.preventDefault();
    slideout.toggle();
  });

  $(window).on('resize orientationchange', function() {
    if($(this).width() > 768) {
      slideout.close();
    }
  });

  var $cars = $('.list-cars li');

  $('.filters form').my({
    data: {
      price: 30000,
      percent: 20
    },
    ui: {
      '[name=price]': {
        bind: function(data, value, $control) {
          return data.price.format(0);
        },
        watch: '.price-range'
      },
      '.price-range': {
        init: function($node) {
          // Make UI Slider
          $node.slider({
            range: 'min',
            min: 0,
            max: 100000,
            values: this.price,
            step: 1
          });
        },
        bind: 'price',
        watch: '[name=price]'
      },
      '[name=percent]': {
        bind: 'percent',
        watch: '.percent-range'
      },
      '[name=value]': {
        bind: function(data, value, $control) {
          $cars.hide();
          $cars.filter(function() {
            var _value = data.price * (data.percent / 100);
            return ((+$(this).attr('data-value')  > _value) && ($(this).attr('data-price') < data.price));
          }).show();
          return (data.price  * (data.percent / 100)).format(0);
        },
        watch: '.percent-range, .price-range'
      },
      '.percent-range': {
        init: function($node) {
          // Make UI Slider
          $node.slider({
            range: 'min',
            min: 0,
            max: 100,
            values: this.percent,
            step: 1
          });
        },
        bind: 'percent',
        watch: '[name=percent]'
      }
    }
  });

})(jQuery);
