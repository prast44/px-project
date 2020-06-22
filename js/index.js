var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        // type: 'progressbar',

      },
      lazy: true,
      speed: 2000,
      initialSlide: 1,
      // freeMode: true,
      grabCursor: true,
      parallax: true,
      navigation: {
        nextEl: '.menu-right',
        prevEl: '.menu-left',
      },
      mousewheel: true,
      keyboard: {
        enabled: true,
      },
    });
	// $('.menu-nav .right').click(function(e) {
	//     e.preventDefault();
	//     // $(".menu .active").removeClass('active');
	//     // $(this).addClass('active');
	//     mySwiper.slideTo( 1,2000,false );
	// });

  $('.menu-nav a').click(function(){
    $('.menu-nav a').removeClass("active");
    $(this).addClass("active");
  });


  swiper.on('slideChange', function () {
    $(".main-nav > a").removeClass("active");
    
    if(swiper.realIndex == 0){
      $("#link-about").addClass("active")
    }
    if(swiper.realIndex == 1){
      $("#link-home").addClass("active")
    }
    if(swiper.realIndex == 2 || swiper.realIndex == 3 || swiper.realIndex == 4 || swiper.realIndex == 5 || swiper.realIndex == 6 ){
      $("#link-works").addClass("active")
    }
    if(swiper.realIndex == 7){
      $("#link-contact").addClass("active")
    }
    if(swiper.realIndex != 1){
      $(".astro").addClass("disappear")
    } else {
      $(".astro").removeClass("disappear");
    }
  });

	function gotoHome() {
		// current slide
		swiper.slideTo( 1,2000,false );
	}

  function gotoAbout() {
    // current slide
    swiper.slideTo( 0,2000,false );
  }

  function gotoWorks() {
    // current slide
    swiper.slideTo( 2,2000,false );
  }

  function gotoContact() {
    // current slide
    swiper.slideTo( 7,2000,false );
  }




	const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;");
      // console.log(window.innerWidth + " - " + e.pageX);
      if(e.pageX < window.innerWidth/2){
      	// console.log(e.pageX + " = left");
      	cursor.classList.remove("mouse-right");
      	cursor.classList.add("mouse-left");
      } else {
      	// console.log(e.pageX + " = right");
      	cursor.classList.remove("mouse-left");
      	cursor.classList.add("mouse-right");
      }

  })

  
// document.getElementsByClassName("parallax-bg").style.width = "200px";

function myTimer() {
    // var getID = document.getElementsByTagName("canvas")[0].style.width = "200px";
  // getID.getElementsByTagName("canvas").style["padding-top"] = "10px";
}

// var myVar = setTimeout(myTimer, 100);
  // document.addEventListener('click', () => {
  //     cursor.classList.add("expand");

  //     setTimeout(() => {
  //         cursor.classList.remove("expand");
  //     }, 500)
  // })

  const links = document.querySelectorAll("a");

  links.forEach(link => link.addEventListener('mouseover', () => {
      cursor.classList.add("hover");
  }));

  links.forEach(link => link.addEventListener('mouseleave', () => {
      cursor.classList.remove("hover");
  }));

 //  document.addEventListener("mouseover", disableAnimation);
	// // document.addEventListener("mouseleave", disableAnimation));
