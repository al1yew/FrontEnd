
let slideNo = 0;

let slide = document.getElementsByClassName("slide_hide");
let dot = document.getElementsByClassName("dot");

Slider();

function Slider() {
    
    for(let _slide of slide){
        _slide.style.display = 'none';
    }

    slideNo++;

    if (slideNo > slide.length) {
        slideNo = 1
    }

    for (i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace(" active", "");
    }

    slide[slideNo - 1].style.display = "flex";
    dot[slideNo - 1].className += " active";

    setTimeout(Slider, 3000);
}


$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});