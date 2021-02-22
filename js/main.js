// main.js

$(function(){
  AOS.init();
});

/*** 작품 필터링하여 보여주기 ***/
$(function(){
  let dutation = 0;

  // all
  $('#btn-all').on('click', function(){
    $('#works .list li').show(dutation);
  })

  // web
  $('#btn-web').on('click', function(){
    $('#works .list li')
      .hide(dutation)
      .filter('.web')
      .show(dutation);
  })

  // graphic
  $('#btn-graphic').on('click', function(){
    $('#works .list li')
      .hide(dutation)
      .filter('.graphic')
      .show(dutation);
  })

  // homepage
  $('#btn-homepage').on('click', function(){
    $('#works .list li')
      .hide(dutation)
      .filter('.homepage')
      .show(dutation);
  })

});