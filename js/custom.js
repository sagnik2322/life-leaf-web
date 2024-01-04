	/*main menu*/
	jQuery(document).ready(function() {
        jQuery(".menu li").find("ul").parent().append("<span></span>");
       jQuery(".menuButton").click(function() {
           jQuery( ".menuButton" ).toggleClass( "arrow_change" );
		 	jQuery(".menuButton + ul").slideToggle(); 
		});
	   jQuery(".menu ul li span").click(function(){
           if(jQuery("span").parent().children("ul").is(":visible")){
               jQuery(this).parent().siblings().children("ul").slideUp();
           }
            jQuery(this).parent().children("ul").slideToggle();  
    });
    });
 
 jQuery(".myAccount span").click(function() {
           jQuery( ".myAccount span" ).toggleClass( "arrow_change" );
		 	jQuery(".myAccountDropdown").slideToggle(); 
		});

// banner_slider
$('.banner_slider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.testimonial_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 7000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// product_slider
$('.product_slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


$('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
    countNum: countTo
    },
    {

duration: 3000,
    easing:'linear',
    step: function() {
        $this.text(Math.floor(this.countNum));
    },
    complete: function() {
        $this.text(this.countNum);
        //alert('finished');
    }

    });  
    

});

