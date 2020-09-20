/* Initialisation fonction JS via JQUERY */

  /* Inititialisation Puspin - Sticky navbar */
  $(document).ready(function(){
    $('#navbar').pushpin({
      top: $('#navbar').offset().top
    });

    $('#Contact').pushpin({
      bottom: $('#Contact').offset().bottom
    });

    /* Inititialisation Scrossspy  - Suivi scrolling page*/
    $('.scrollspy').scrollSpy({
      scrollOfffset: 0,
      activeClass:'active'
    });
  });
