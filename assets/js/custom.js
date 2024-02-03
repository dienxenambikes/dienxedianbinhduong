$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "ThemeSine"
* Template Name : CarVilla HTML Template
* Version       : 1.0
==================================== */




/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top
2. welcome animation support
3. owl carousel
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 300) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});

	// 2. welcome animation support

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").removeClass("animated fadeInDown").css({'opacity':'0'});
        });

        $(window).load(function(){
        	$(".welcome-hero-txt h2,.welcome-hero-txt p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".welcome-hero-txt button").addClass("animated fadeInDown").css({'opacity':'0'});
        });

	
	// 3. owl carousel

		// i.  new-cars-carousel
		
			$("#new-cars-carousel").owlCarousel({
				items: 1,
				autoplay:true,
				loop: true,
				dots:true,
				mouseDrag:true,
				nav:false,
				smartSpeed:1000,
				transitionStyle:"fade",
				animateIn: 'fadeIn',
				animateOut: 'fadeOutLeft'
				// navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
			});


		// ii. .testimonial-carousel
	
		
			var owl=$('.testimonial-carousel');
			owl.owlCarousel({
				items:3,
				margin:0,
				
				loop:true,
				autoplay:true,
				smartSpeed:1000,
				
				//nav:false,
				//navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
				
				dots:false,
				autoplayHoverPause:false,
			
				responsiveClass:true,
					responsive:{
						0:{
							items:1
						},
						640:{
							items:2
						},
						992:{
							items:3
						}
					}
				
				
			});

		// iii. .brand-item (carousel)
		
			$('.brand-item').owlCarousel({
				items:6,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:false,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:3
						},
						1000:{
							items:6
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})

});

$(document).ready(function(){
	$(".video-item").owlCarousel({
	  items: 4,
	  loop: true,
	  video: true,
	  lazyLoad: true,
	  center: true,
	//   autoplay: true, 
   	//   autoplayTimeout: 3000,
	  responsiveClass: true,
	 
	  responsive: {
		0: {
		  items: 1, // Số lượng items ở độ rộng màn hình dưới 576px
		},
		600: {
		  items: 2, // Số lượng items ở độ rộng màn hình từ 576px đến 768px
		},
		768: {
		  items: 3, // Số lượng items ở độ rộng màn hình từ 768px trở lên
		}
	  },
	  nav: true, // Hiển thị nút prev và next
	  navText: ["<", ">"], // Chữ hiển thị trên nút prev và next
	});
  });

  

$(document).ready(function(){
	$(".image-carousel").owlCarousel({
		items: 4,
		loop: true,
		autoplay: true, // Tự động chuyển tiếp
		lazyLoad: true,
	  	center: true,
		autoplayTimeout: 2000, // Thời gian giữa các lần chuyển tiếp (đơn vị là milliseconds, 5000ms = 5s)
		autoplayHoverPause: true, // Tạm dừng tự động chuyển tiếp khi rê chuột vào
		responsiveClass: true,
		dots: false,
		
		responsive: {
			0: {
			  items: 1, // Số lượng items ở độ rộng màn hình dưới 576px
			},
			600: {
			  items: 2, // Số lượng items ở độ rộng màn hình từ 576px đến 768px
			},
			768: {
			  items: 3, // Số lượng items ở độ rộng màn hình từ 768px trở lên
			}
		  },
		  nav: true, // Hiển thị nút prev và next
		navText: ["<", ">"], // Chữ hiển thị trên nút prev và next
	});
});