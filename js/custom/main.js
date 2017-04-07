
$(document).ready(function(){


      $('.parallax').parallax();
       $('.scrollspy').scrollSpy();
        scrollOffset:0
        $('.scrollspy').scrollSpy();

        var options = [
      {selector: '#projectDescriptionTab', offset: 620, callback: function(el) {
        Materialize.toast("Click on the images for project description", 3500 );
       } },
       {selector: '#skillSetTab', offset: 20, callback: function(el) {
        $( "skillSet1" ).removeClass( "skillbar" );
       } }
    ];
    Materialize.scrollFire(options);

    $('#intro-scroll').hover(

      function()
      {
        $('#intro-scroll-label').toggleClass("invisible");
        $('#intro-scroll-label').addClass("animated bounceIn");
      }

      );

    $('#exp-scroll').hover(

      function()
      {
        $('#exp-scroll-label').toggleClass("invisible");
        $('#exp-scroll-label').addClass("animated bounceIn");
      }

      );

    $('#edu-scroll').hover(

      function()
      {
        $('#edu-scroll-label').toggleClass("invisible");
        $('#edu-scroll-label').addClass("animated bounceIn");
      }

      );

    $('#prj-scroll').hover(

      function()
      {
        $('#prj-scroll-label').toggleClass("invisible");
        $('#prj-scroll-label').addClass("animated bounceIn");
      }

      );

    $('#skills-scroll').hover(

      function()
      {
        $('#skills-scroll-label').toggleClass("invisible");
        $('#skills-scroll-label').addClass("animated bounceIn");
      }

      );

      var waypoint = new Waypoint({
        element: document.getElementById('intro'),
        handler: function() {
          $('#scrollWindow').toggleClass("invisible");
          $('#scroll-down').toggleClass("invisible");
          $('#scrollWindow').addClass("animated slideInRight");

        },
        offset: '65%'
      });

      var waypoint2 = new Waypoint({
        element: document.getElementById('skillSetTab'),
        handler: function() {
          jQuery('.skillbar').each(function(){
            jQuery(this).find('.skillbar-bar').animate({
              width:jQuery(this).attr('data-percent')
        },2000);
      });

    
  },
  offset: '95%'
});

     




      

    });
