/* Initialisation JQUERY */
$(document).ready(function(){

/* Initialisation fonction JS via JQUERY */
  /* Inititialisation Puspin - Sticky navbar */
    $('#navbar').pushpin({
      top: $('header').height()
    });

    /* Inititialisation Scrollspy  - Suivi scrolling page*/
    $('.scrollspy').scrollSpy({
      activeClass:'active',
      scrollOffset: 100,
    });

    /* Initialisation Tooltip au survol pour mail et téléphone dans le footer*/
    $('.tooltipped').tooltip({
      inDuration: 700, // temps de l'animation en ms
      outDuration: 500, // temps de l'animation en ms
      margin: 40, // margin par rapport à son élément de réfénce
      transitionMovement: 40, // déplacement vertical du tooltip lors de son animation
      exitDelay: 100
    });
  });


  /* Ajout trigger pour passer le footer en position:fixed à partir d'un certain défilement*/
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop(); //récupère avancement scroll de la page
    
    var headerHeight=$('header').height(); //récupère taille du header scroll de la page
  
    if(scroll >= headerHeight){ /* Passage en fixed à partir du moment ou le scroll vertical est supérieur à celui du header */
      $('footer').addClass("fixed-footer");
      $('footer').fadeIn(800); //délai en ms pour l'animation
      
    } else {
      $('footer').fadeOut(800);
      $('footer').removeClass("fixed-footer");
    }
});