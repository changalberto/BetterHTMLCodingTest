"use strict";!function(e){var n=new Slideout({panel:e(".main-container")[0],menu:e("nav")[0],padding:256,tolerance:70});e(".hamburger").on("click",function(e){e.preventDefault(),n.toggle()}),e(window).on("resize orientationchange",function(){e(this).width()>768&&n.close()});var r=e(".list-cars li");e(".filters form").my({data:{price:3e4,percent:20},ui:{"[name=price]":{bind:function(e){return e.price.format(0)},watch:".price-range"},".price-range":{init:function(e){e.slider({range:"min",min:0,max:1e5,values:this.price,step:1})},bind:"price",watch:"[name=price]"},"[name=percent]":{bind:"percent",watch:".percent-range"},"[name=value]":{bind:function(n){return r.hide(),r.filter(function(){var r=n.price*(n.percent/100);return e(this).attr("data-value")>=r&&e(this).attr("data-price")<=n.price}).show(),(n.price*(n.percent/100)).format(0)},watch:".percent-range, .price-range"},".percent-range":{init:function(e){e.slider({range:"min",min:0,max:100,values:this.percent,step:1})},bind:"percent",watch:"[name=percent]"}}})}(jQuery);