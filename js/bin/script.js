/* Initialisation JQUERY */
$(document).ready(function(){

/* Initialisation fonction JS via JQUERY */
  /* Inititialisation Puspin - Sticky navbar */
    $('#navbar').pushpin({
      top: $('#navbar').offset().top
    });

    /* Inititialisation Scrollspy  - Suivi scrolling page*/
    $('.scrollspy').scrollSpy({
      scrollOfffset:0,
      activeClass:'active'
    });
  });

  /* Ajout trigger pour passer le footer en position:fixed à partir d'un certain défilement*/
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop(); //récupère avancement scroll de la page
    
    var headerHeight=$('header').height(); //récupère taille du header scroll de la page
  
    if(scroll >= headerHeight){ /* Passage en fixed à partir du moment ou le scroll vertical est supérieur à celui du header */
      $('#Contact').addClass("fixed-footer");
      $('#Contact').fadeIn(1000); //délai en ms pour l'animation
      
    } else {
      $('#Contact').fadeOut(1000);
      $('#Contact').removeClass("fixed-footer");
    }
});