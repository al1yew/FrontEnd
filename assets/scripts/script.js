
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

  document.onclick = function (e) {

    // console.log(e.target)

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

    // if ($('#inp_n').val().length > 0 && $('#inp_s').val().length > 0 && $('#inp_su').val().length > 0) {
    //   $('#bye').css('display', 'block');
    // }
    // else {
    //   $('#bye').css('display', 'none');
    // }

    //yashayiiiiiiiishhhhh

    $('#inp_n').val().length > 0 && $('#inp_s').val().length > 0 && $('#inp_su').val().length > 0 ? $('#bye').css('display', 'block') : $('#bye').css('display', 'none');

  })
});

//#endregion contact

//#region sorting


$(document).ready(function () {

  $("#sortby").click(function () {
    $('#sortingdiv').toggle();
  })

  $("#datasort").click(function () {
    $('#sortdata').toggle();
  })

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //qiraga basanda baglansin

});


//#endregion sorting

//#region shopping cartin ustundeki span

//isteyirem ki shop cartin ustundeki span regemi deyishsin, ozumuzden funksiya yazirig ve ozumuz cagiririg ki melumati ozu otursun, ve her deyishiklikden sonra bunu cagiriram ki yoxlasin, mehsul eynididse spani artirmasin


function CountBasketLength() {
  let shopcart = JSON.parse(localStorage.getItem('shopcart'));
  let cartcount = shopcart.length;
  document.querySelector('#cartcount').innerHTML = cartcount;
}

CountBasketLength();

//cagiriram mutleq metodu cunki ozu ozune ishlemir, ve butun etodlarda cagiracam onu ki reload-suz ishlesin

//#endregion shopping cartin ustundeki span

//#region product html contact

$(document).ready(function () {

  let prod_inputs = document.querySelectorAll('.inputfield1');

  $('#send_message_product').click(function () {
    console.log('dsdasda')
    for (let inp1 of prod_inputs) {
      if (inp1.value.length < 1) {
        inp1.nextElementSibling.style.display = 'block';
      }
      else {
        inp1.nextElementSibling.style.display = 'none';
      }
    }

  });

});


//#endregion product html contact

//#region tabmenu toggle

let tabclicks = document.querySelectorAll('.tabclick');
let tab_contents = document.querySelectorAll('.tab_content');

for (let tab of tabclicks) {

  tab.onclick = function () {
    tab.classList.add('chosen');

    for (let cont of tab_contents) {

      if (tab.id == cont.id) {
        cont.classList.remove('d-none');
      }
      else {
        cont.classList.add('d-none');
      }
    }
  }
}


//#endregion tabmenu toggle

//#region counter

let result_counter = document.querySelector('#result_count').innerHTML;

let parsed_count = Number(result_counter);


$('#increase').click(function () {
  if (parsed_count < 10) {
    parsed_count++;
    document.getElementById('result_count').innerHTML = parsed_count;
    $('#max10').css('display', 'none');
  }
  else {
    $('#max10').css('display', 'block');
  }
})

$('#decrease').click(function () {
  $('#max10').css('display', 'none');

  if (parsed_count > 1) {
    parsed_count--;
    document.getElementById('result_count').innerHTML = parsed_count;
  }
  else {
    document.getElementById('result_count').innerHTML = 1;
  }

})


//#endregion counter

//#region photo producthtml slider

// $('.left123').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.slider-for',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });

//#endregion photo producthtml slider

//#region
