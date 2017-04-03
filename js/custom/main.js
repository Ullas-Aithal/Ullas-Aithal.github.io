
$(document).ready(function(){


      $('.parallax').parallax();
       $('.scrollspy').scrollSpy();
        scrollOffset:0


        var options = [
      {selector: '#projectDescriptionTab', offset: 620, callback: function(el) {
        Materialize.toast("Click on the images for project description", 3500 );
       } },
       {selector: '#skillSetTab', offset: 20, callback: function(el) {
        $( "skillSet1" ).removeClass( "skillbar" );
       } }

      // {selector: '#staggered-test', offset: 205, callback: function(el) {
      //   Materialize.toast("Please continue scrolling!", 1500 );
      // } },
      // {selector: '#staggered-test', offset: 400, callback: function(el) {
      //   Materialize.showStaggeredList($(el));
      // } },
      // {selector: '#image-test', offset: 500, callback: function(el) {
      //   Materialize.fadeInImage($(el));
      // } }
    ];
    Materialize.scrollFire(options);



      jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});


    });
