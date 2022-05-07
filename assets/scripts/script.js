
// #region slider1 slick
$('.slider1').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
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
      breakpoint: 576, //bunu 480 idi 576 eledim 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// #endregion slider1 slick

//#region select location

$(document).ready(function () {

  $('#location_search').focus();

  $("#location").click(function () {
    $('#modal_location').fadeIn(300);
  })

  var modal = document.getElementById('modal_location');

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }

  $('#close_location').click(function () {
    $('#modal_location').fadeOut(300);
  })

  let locations = document.querySelectorAll('.locations');
  let set_location = document.querySelector('#set_location');

  for (let location of locations) {
    location.onclick = function (e) {
      // console.log(e.target); yoxladim
      set_location.innerHTML = location.innerHTML;
      $('#modal_location').fadeOut(300);
    }
  }


  $('set_location')

});

//#endregion select location

//#region categories
$(document).ready(function () {

  $("#categories").click(function () {
    $('#all_categories').slideToggle(220);
  })

  // let continued = document.getElementById('continued');
  // let continued1 = document.getElementById('continued1');
  // let categ2 = document.getElementById('categories_all2');
  // let categ3 = document.getElementById('categories_all3');

  // // continued.hover() = function() {
  // //   categ2.classList.toggle('non-active');
  // // }

  // $('#continued').hover(function() {
  //   categ2.classList.toggle('non-active');

  // })

});



//#endregion categories
