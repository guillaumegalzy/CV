$(document).ready(function(){
  $('#navbar').pushpin({
    top: $('#navbar').offset().top
  });
  $('.scrollspy').scrollSpy({
    scrollOfffset: 0,
    activeClass:'active'
  });
});
