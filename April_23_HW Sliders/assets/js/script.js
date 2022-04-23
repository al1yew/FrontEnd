
let slideNo = 0;

let slide = document.getElementsByClassName("slide_hide");
let dot = document.getElementsByClassName("dot");

Slider();

function Slider() {
    let i;
    
    
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

    slide[slideNo - 1].style.display = "block";
    dot[slideNo - 1].className += " active";

    setTimeout(Slider, 3000);

    // setTimeout(Slider, 3000);
    // slide[slideNo - 1].style.display = "block";

    // Dots();

    // function Dots() {
    //         setTimeout(Dots,3000)
    //         for (let _dot of dot) {
    //         setTimeout(Dots,3000)

    //         _dot.classList.replace('noactive', "active");
    //         setTimeout(Dots,3000)
    //     }
        
    // }
    // Dots();
}