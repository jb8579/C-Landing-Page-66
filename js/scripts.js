(function($){
	$(document).ready(function() {	


		$(".slider1").owlCarousel({
	 	"items" : 5,
	 	"margin" : 15,
	 	"autoplay": false,	 	
	 	"autoplayTimeout" : 2000,
	 	"loop" : true,
	 	"nav" : false,
	 	"dop" : true,
	 	"responsive" : {
	 		0 : {
	 			"items" : 2
	 		},
	 		576 : {
	 			"items" : 3
	 		},
	 		767 : {
	 			"items" : 5
	 		},
	 		991 : {
	 		 	"items" : 8
	 		}


	 	}
	 });


		var owl = $('.slider1');
		owl.owlCarousel();
		// Go to the next item
		$('.customNextBtn1').click(function() {
		    owl.trigger('next.owl.carousel');
		})
		// Go to the previous item
		$('.customPrevBtn1').click(function() {
		    // With optional speed parameter
		    // Parameters has to be in square bracket '[]'
		    owl.trigger('prev.owl.carousel', [300]);
		})
		
	
	});
})(jQuery);