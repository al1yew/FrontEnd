
// let slideNo = 0;

// let slide = document.getElementsByClassName("slide_hide");
// let dot = document.getElementsByClassName("dot");

// Slider();

// function Slider() {

//   for (let _slide of slide) {
//     _slide.style.display = 'none';
//   }

//   slideNo++;

//   if (slideNo > slide.length) {
//     slideNo = 1
//   }

//   for (i = 0; i < dot.length; i++) {
//     dot[i].className = dot[i].className.replace(" active", "");
//   }

//   slide[slideNo - 1].style.display = "flex";
//   dot[slideNo - 1].className += " active";

//   setTimeout(Slider, 3000);
// }


$('.slider1').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false
      }
    }
  ]
});

$('.slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false
      }
    }
  ]
});


$(window).scroll(function () {
  if ($(window).scrollTop() > 70) {
    $('header').css('background-color', 'black');
    $('header').css('transition', '0.4s')
    $('header').css('padding', '3px 10px')

  }
  else {
    $('header').css('background-color', 'transparent');
    $('header').css('transition', '0.4s')
    $('header').css('padding', '10px')
  }
})

let scroll = document.querySelector('#scroll_up');
scroll.addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})