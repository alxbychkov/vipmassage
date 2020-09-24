$(document).ready(function() { 
    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close');
    var modal = $('.modal_div');

     open_modal.click( function(event){
         event.preventDefault(); 
         var div = $(this).attr('href');
         overlay.fadeIn(400, 
             function(){ 
                 $(div) 
                     .css('display', 'block') 
                     .animate({opacity: 1}, 200); 
         });
     });

     close.click( function(){ 
            modal 
             .animate({opacity: 0}, 200,
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400);
                 }
             );
     });
});
$(function() {
    $(".handler span").on("click", function() {
        $(this).addClass("choosen").siblings().removeClass("choosen");
        $(".slide")
            .eq($(this).index())
            .addClass("show")
            .siblings()
            .removeClass("show");
    });
}); 
$(function() {
    $('.open-popup').on('click', function(e){
        e.preventDefault();
        var popup = $(this).attr('data-popup');
        $(popup).addClass('modal-popup-form_open');
    });
    $('.modal-popup-form').find('.close').on('click', function(e){
        e.preventDefault();
        $(this).parents('.modal-popup-form').removeClass('modal-popup-form_open');
    });
    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".modal-popup-wrap"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			$('.modal-popup-form').removeClass('modal-popup-form_open');
		}
	});
	
	$(document).on('af_complete', function(event, response) {
	    if(response.success)
            $('.modal-popup-form').removeClass('modal-popup-form_open');
    });
}); 
$(function() {      
  var slider = $('.slider'),
    sliderContent = slider.html(),                      
    slideWidth = $('.slider-box').outerWidth(),         
    slideCount = $('.slider-bottom').length,               
    prev = $('.slider-box .prev'),                      
    next = $('.slider-box .next'),                      
    sliderInterval = 3300,                              
    animateTime = 1000,                                 
    course = 1,                                         
    margin = - slideWidth;                              
 
  $('.slider-bottom:last').clone().prependTo('.slider');   
  $('.slider-bottom').eq(1).clone().appendTo('.slider');     
  $('.slider').css('margin-left', -slideWidth);         
 
  
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     
      slider.css({'marginLeft':-slideWidth});           
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  
      slider.css({'marginLeft':-slideWidth*slideCount});
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              
    margin = margin - slideWidth*(course);              
    }
    slider.animate({'marginLeft':margin},animateTime);  
  }
 
  function sliderStop(){                                      
    window.clearInterval(interval);
  }
 
  prev.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = -1;                                        
    animate();                                          
    course = course2 ;                                  
  });
  next.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = 1;                                         
    animate();                                          
    course = course2 ;                                  
  });
 
  slider.add(next).add(prev).hover(function() {         
    sliderStop();                                       
  }, nextSlide);                                        
 
  nextSlide();                                          
});

$(function(){
    if($('.photo-block-item').length > 0){
        $('.photo-block-item').fancybox();
    }
})

$(function(){
    if($('.block-numbers__slider').length > 0){
        $('.block-numbers__slider').slick({
            autoplay: 2000,
            arrows: false,
            dots: true
        });
    }
})

$(function(){
    if($('[name="phone"]').length > 0){
        $('[name="phone"]').mask("8(999) 999-9999");
    }
})

$(function(){
    if($('.reviews-body').length > 0){
        function shuffle(array) {
          var currentIndex = array.length, temporaryValue, randomIndex;
        
          while (0 !== currentIndex) {
        
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
        
          return array;
        }
        var avatars = [
            'avatar1.svg',
            'avatar2.svg',
            'avatar3.svg',
            'avatar4.svg',
            'avatar5.svg',
            'avatar6.svg',
            'avatar7.svg',
            'avatar8.svg',
            'avatar9.svg',
            'avatar10.svg'
        ]
        
        for(i = 0; i < $('.reviews-avatar').length; i++){
            avatars = shuffle(avatars)
            $('.reviews-avatar').eq(i).attr({'src':'/assets/img/avatars/'+avatars[0]})
        }
        
        // Отзывы 
    	function shortrew(status){
    		if(status){
    			for(var i = 0; i < $('.reviews-body').length; i++){
    				var text = $('.reviews-body').eq(i).attr('data-reviewShort');
    				$('.reviews-body').eq(i).html(text);
    			}
    		}else{
    			// первый проход
    			for(var i = 0; i < $('.reviews-body').length; i++){
    				var text = $('.reviews-body').eq(i).attr('data-review');
    				if(text.length > 150){
    					var text = text.substr(0, 150)+'... <a href="#" class="more">Читать целиком</a>'
    					$('.reviews-body').eq(i).html(text);
    				}
    				$('.reviews-body').eq(i).attr({'data-reviewShort': text});
    			}
    		}
    
    		$('.more').on('click', function(e){
    			e.preventDefault();
    			var textBlock = $(this).parents('.reviews-body');
    			var text = textBlock.attr('data-review');
    			textBlock.html(text);
    		});
    	}
    
    	shortrew(false);
    
    	$(document).mouseup(function (e){
    		var div = $(".more"); // тут указываем ID элемента
    		if (!div.is(e.target) // если клик был не по нашему блоку
    			&& div.has(e.target).length === 0) { // и не по его дочерним элементам
    		 	shortrew(true);
    		}
    	});
    	// Отзывы-end 
    }
})
$(function() {
    if($('.reviews-list').length > 0){
        $('.reviews-list').slick({
            slidesToShow: 3,
            dots: true,
            arrows: false,
            autoplay: 5000,
            responsive: [
        	    {
        	      breakpoint: 720,
        	      settings: {
        	        slidesToShow: 1,
        	      }
        	    }
            ]
        });
    }
}); 

$(function() {      
  var slider = $('.carousel'),
    sliderContent = slider.html(),                      
    slideWidth = $('.slider-box-top').outerWidth(),         
    slideCount = $('.sliders-carousel').length,               
    prev = $('.slider-box-top .prev'),                      
    next = $('.slider-box-top .next'),                      
    sliderInterval = 6600,                              
    animateTime = 1000,                                 
    course = 1,                                         
    margin = - slideWidth;                              
 
  $('.sliders-carousel:last').clone().prependTo('.carousel');   
  $('.sliders-carousel').eq(1).clone().appendTo('.carousel');     
  $('.carousel').css('margin-left', -slideWidth);         
 
  
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     
      slider.css({'marginLeft':-slideWidth});           
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  
      slider.css({'marginLeft':-slideWidth*slideCount});
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              
    margin = margin - slideWidth*(course);              
    }
    slider.animate({'marginLeft':margin},animateTime);  
  }
 
  function sliderStop(){                                      
    window.clearInterval(interval);
  }
 
  prev.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = -1;                                        
    animate();                                          
    course = course2 ;                                  
  });
  next.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = 1;                                         
    animate();                                          
    course = course2 ;                                  
  });
 
  slider.add(next).add(prev).hover(function() {         
    sliderStop();                                       
  }, nextSlide);                                        
 
  nextSlide();                                          
});


$(function() {      
  var slider = $('.carousel1'),
    sliderContent = slider.html(),                      
    slideWidth = $('.slider-box-top1').outerWidth(),         
    slideCount = $('.sliders-carousel1').length,               
    prev = $('.slider-box-top1 .prev'),                      
    next = $('.slider-box-top1 .next'),                      
    sliderInterval = 6600,                              
    animateTime = 1000,                                 
    course = 1,                                         
    margin = - slideWidth;                              
 
  $('.sliders-carousel1:last').clone().prependTo('.carousel1');   
  $('.sliders-carousel1').eq(1).clone().appendTo('.carousel1');     
  $('.carousel1').css('margin-left', -slideWidth);         
 
  
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     
      slider.css({'marginLeft':-slideWidth});           
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  
      slider.css({'marginLeft':-slideWidth*slideCount});
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              
    margin = margin - slideWidth*(course);              
    }
    slider.animate({'marginLeft':margin},animateTime);  
  }
 
  function sliderStop(){                                      
    window.clearInterval(interval);
  }
 
  prev.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = -1;                                        
    animate();                                          
    course = course2 ;                                  
  });
  next.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = 1;                                         
    animate();                                          
    course = course2 ;                                  
  });
 
  slider.add(next).add(prev).hover(function() {         
    sliderStop();                                       
  }, nextSlide);                                        
 
  nextSlide();                                          
});

$(function() {      
  var slider = $('.carousel2'),
    sliderContent = slider.html(),                      
    slideWidth = $('.slider-box-top2').outerWidth(),         
    slideCount = $('.sliders-carousel2').length,               
    prev = $('.slider-box-top2 .prev'),                      
    next = $('.slider-box-top2 .next'),                      
    sliderInterval = 6600,                              
    animateTime = 1000,                                 
    course = 1,                                         
    margin = - slideWidth;                              
 
  $('.sliders-carousel2:last').clone().prependTo('.carousel2');   
  $('.sliders-carousel2').eq(1).clone().appendTo('.carousel2');     
  $('.carousel2').css('margin-left', -slideWidth);         
 
  
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     
      slider.css({'marginLeft':-slideWidth});           
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  
      slider.css({'marginLeft':-slideWidth*slideCount});
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              
    margin = margin - slideWidth*(course);              
    }
    slider.animate({'marginLeft':margin},animateTime);  
  }
 
  function sliderStop(){                                      
    window.clearInterval(interval);
  }
 
  prev.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = -1;                                        
    animate();                                          
    course = course2 ;                                  
  });
  next.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = 1;                                         
    animate();                                          
    course = course2 ;                                  
  });
 
  slider.add(next).add(prev).hover(function() {         
    sliderStop();                                       
  }, nextSlide);                                        
 
  nextSlide();                                          
});

$(function() {      
  var slider = $('.carousel3'),
    sliderContent = slider.html(),                      
    slideWidth = $('.slider-box-top3').outerWidth(),         
    slideCount = $('.sliders-carousel3').length,               
    prev = $('.slider-box-top3 .prev'),                      
    next = $('.slider-box-top3 .next'),                      
    sliderInterval = 6600,                              
    animateTime = 1000,                                 
    course = 1,                                         
    margin = - slideWidth;                              
 
  $('.sliders-carousel3:last').clone().prependTo('.carousel3');   
  $('.sliders-carousel3').eq(1).clone().appendTo('.carousel3');     
  $('.carousel3').css('margin-left', -slideWidth);         
 
  
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     
      slider.css({'marginLeft':-slideWidth});           
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  
      slider.css({'marginLeft':-slideWidth*slideCount});
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              
    margin = margin - slideWidth*(course);              
    }
    slider.animate({'marginLeft':margin},animateTime);  
  }
 
  function sliderStop(){                                      
    window.clearInterval(interval);
  }
 
  prev.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = -1;                                        
    animate();                                          
    course = course2 ;                                  
  });
  next.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = 1;                                         
    animate();                                          
    course = course2 ;                                  
  });
 
  slider.add(next).add(prev).hover(function() {         
    sliderStop();                                       
  }, nextSlide);                                        
 
  nextSlide();                                          
});

$(function() {      
  var slider = $('.carousel4'),
    sliderContent = slider.html(),                      
    slideWidth = $('.slider-box-top4').outerWidth(),         
    slideCount = $('.sliders-carousel4').length,               
    prev = $('.slider-box-top4 .prev'),                      
    next = $('.slider-box-top4 .next'),                      
    sliderInterval = 6600,                              
    animateTime = 1000,                                 
    course = 1,                                         
    margin = - slideWidth;                              
 
  $('.sliders-carousel4:last').clone().prependTo('.carousel4');   
  $('.sliders-carousel4').eq(1).clone().appendTo('.carousel4');     
  $('.carousel4').css('margin-left', -slideWidth);         
 
  
 
  function animate(){
    if (margin==-slideCount*slideWidth-slideWidth){     
      slider.css({'marginLeft':-slideWidth});           
      margin=-slideWidth*2;
    }else if(margin==0 && course==-1){                  
      slider.css({'marginLeft':-slideWidth*slideCount});
      margin=-slideWidth*slideCount+slideWidth;
    }else{                                              
    margin = margin - slideWidth*(course);              
    }
    slider.animate({'marginLeft':margin},animateTime);  
  }
 
  function sliderStop(){                                      
    window.clearInterval(interval);
  }
 
  prev.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = -1;                                        
    animate();                                          
    course = course2 ;                                  
  });
  next.click(function() {                               
    if (slider.is(':animated')) { return false; }       
    var course2 = course;                               
    course = 1;                                         
    animate();                                          
    course = course2 ;                                  
  });
 
  slider.add(next).add(prev).hover(function() {         
    sliderStop();                                       
  }, nextSlide);                                        
 
  nextSlide();                                          
});
$(function() {
    $("#1").on("click", function() {
        $(this).addClass("active-item-control").siblings().removeClass("active-item-control");
        $(".slider-box-top")
            .addClass("active-block")
            .siblings()
            .removeClass("active-block");
    });
}); 
$(function() {
    $("#2").on("click", function() {
        $(this).addClass("active-item-control").siblings().removeClass("active-item-control");
        $(".slider-box-top1")
            .addClass("active-block")
            .siblings()
            .removeClass("active-block");
    });
});
$(function() {
    $("#3").on("click", function() {
        $(this).addClass("active-item-control").siblings().removeClass("active-item-control");
        $(".slider-box-top2")
            .addClass("active-block")
            .siblings()
            .removeClass("active-block");
    });
}); 
$(function() {
    $("#4").on("click", function() {
        $(this).addClass("active-item-control").siblings().removeClass("active-item-control");
        $(".slider-box-top3")
            .addClass("active-block")
            .siblings()
            .removeClass("active-block");
    });
});
$(function() {
    $("#5").on("click", function() {
        $(this).addClass("active-item-control").siblings().removeClass("active-item-control");
        $(".slider-box-top4")
            .addClass("active-block")
            .siblings()
            .removeClass("active-block");
    });
});