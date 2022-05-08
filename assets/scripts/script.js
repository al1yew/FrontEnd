
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
  let locals = document.querySelectorAll('.local');
  //sheherin adini saxlayan <p> uchun
  for (let local of locals) {
    local.onclick = function (e) {

      // console.log(e.target.firstChild); 

      // console.log(e.target.children[0])

      // set_location.innerHTML = e.target.firstChild.textContent;

      set_location.innerHTML = e.target.children[0].innerHTML;

      $('#modal_location').fadeOut(300);

    }
  }
  //sheherin adi uchun span uchun
  for (let location of locations) {
    location.onclick = function (e) {
      set_location.innerHTML = e.target.innerHTML;
      $('#modal_location').fadeOut(300);
    }
  }

  //bunu storage versem sheher ilishsin qalsin orda

  $('set_location')

});

//#endregion select location

//#region categories

$(document).ready(function () {

  $("#categories").click(function () {
    $('#all_categories').slideToggle(220);
  })

});

//#endregion categories

//#region login js

$(document).ready(function () {
  let lon = $('#login_username');
  let lop = $("#login_password");
  let ren = $("#reg_username");
  let rep = $("#reg_password");

  $('#login').click(function () {

    if (lon.val().length < 8 || lop.val().length < 8) {
      // $('#error').removeClass('d-none');
      $('#error').slideDown(200);
      $('#error_p').html('Your Login and Password must contain at least 8 characters!')
    }
    else {
      // $('#error').addClass('d-none');
      $('#error').slideUp(200);
    }

    // lon.val().length < 9 && lop.val().length < 9 ? console.log('nenorm') : console.log('norm')
  })

  $('#register').click(function () {

    if (ren.val().length < 8 || rep.val().length < 8) {
      // $('#error').removeClass('d-none');
      $('#error').slideDown(200);
      $('#error_p').html('Your Login and Password must contain at least 8 characters!')
    }
    else {
      // $('#error').addClass('d-none');
      $('#error').slideUp(200);
    }

    // lon.val().length < 9 && lop.val().length < 9 ? console.log('nenorm') : console.log('norm')

  })
});

//#endregion login js

//         
//#region contact

$(document).ready(function () {

  let inputs = document.querySelectorAll('.requiredinputfield')

  $('#send_message').click(function () {

    for (let input of inputs) {
      if (input.value.length < 1) {
        input.nextElementSibling.style.display = 'block';
      }
      else {
        input.nextElementSibling.style.display = 'none';
      }
    }

    if ($('#inp_n').val().length > 0 && $('#inp_s').val().length > 0 && $('#inp_su').val().length > 0) {
      $('#bye').css('display', 'block');
    }
    else {
      $('#bye').css('display', 'none');
    }

  })
});

//#endregion contact
