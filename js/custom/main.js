
$(document).ready(function(){


      $('.parallax').parallax();
       $('.scrollspy').scrollSpy();
        scrollOffset:0


        	



      jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});


    });
