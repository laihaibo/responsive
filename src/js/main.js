/*
* @Author: laihaibo
* @Date:   2016-08-02 14:02:22
* @Last Modified by:   laihaibo
* @Last Modified time: 2016-08-06 23:07:41
*/

'use strict';
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
  });
  var $scrollInfo = $('#scrollInfo');
  var timer;
  var speed = 50;
  var daly = 2000;
  console.log(new Date());
  function start() {
    $('#scrollInfo li:first').slideUp().queue(function (next) {
      $(this).appendTo($scrollInfo);
      next();
    }).slideDown();
    timer = setInterval(scroll, speed);
  }
  function scroll() {
    clearInterval(timer);
    setTimeout(start, daly);
  }
  setTimeout(start, daly);
})
