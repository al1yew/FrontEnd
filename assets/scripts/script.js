
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

// let result_counter = document.querySelector('#result_count').innerHTML;

// let parsed_count = Number(result_counter);


// $('#increase').click(function () {
//   if (parsed_count < 10) {
//     parsed_count++;
//     document.getElementById('result_count').innerHTML = parsed_count;
//     $('#max10').css('display', 'none');
//   }
//   else {
//     $('#max10').css('display', 'block');
//   }
// })

// $('#decrease').click(function () {
//   $('#max10').css('display', 'none');

//   if (parsed_count > 1) {
//     parsed_count--;
//     document.getElementById('result_count').innerHTML = parsed_count;
//   }
//   else {
//     document.getElementById('result_count').innerHTML = 1;
//   }

// })


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

//#region product html datalari getirmek

// let products_for_producthtml = document.querySelectorAll('.product_html');

// for (let product of products_for_producthtml) {

//   product.onclick = function () {

//     let product_photo_html = this.children[0].children[0];
//     let product_id_html = this.id;
//     let product_price_html = this.children[0].children[5].children[3].children[2].innerHTML

//     let product_page_img = document.getElementById('product_page_image');
//     console.log(product_page_img)

//   }
// }

//burda umumiyyetle set etmek olmayacaq, local storageye atmag lazimdi butun produktlari, sonra da id-ile yoxlamaq hansina klik olunub, onu da getirmek product.htmla




//#endregion product html datalari getirmek

//#region bag_div click olunmasin

let bag_div = document.querySelector('.bag_div');

bag_div.onclick = function (e) {
  e.preventDefault()
}

//#endregion bag_div click olunmasin

//#region bag div and its max height

let bag_div1 = document.querySelector('.bag_div');

if (bag_div1.clientHeight > 300) {
  bag_div1.classList.add('overflowscroll');
}
else {
  bag_div1.classList.remove('overflowscroll');
}

//#endregion bag div and its max heigth


//#region shopping cartin ustundeki span

//isteyirem ki shop cartin ustundeki span regemi deyishsin, ozumuzden funksiya yazirig ve ozumuz cagiririg ki melumati ozu otursun, ve her deyishiklikden sonra bunu cagiriram ki yoxlasin, mehsul eynididse spani artirmasin


function CountBasketLength() {
  let shopcart = JSON.parse(localStorage.getItem('shopcart'));
  let cartcount = shopcart.length;
  document.querySelector('#cartcount').innerHTML = cartcount;
}


//cagiriram mutleq metodu cunki ozu ozune ishlemir, ve butun etodlarda cagiracam onu ki reload-suz ishlesin

//#endregion shopping cartin ustundeki span










//#region add to basket
$(document).ready(function () {

  if (localStorage.getItem('shopcart') === null) {
    localStorage.setItem('shopcart', JSON.stringify([])); //local storagede arrayimizi yaratdiq
  }
  CountBasketLength();

  // localStorage.setItem('shopcart', JSON.stringify([]));
  // birinci basketi yaratdim, array kimi. Sonra dedim ki productlar for-a salinsin, hansina klik olunsa onun datasini getirsin.

  let addtocartbtn = document.querySelectorAll('.addtocart');

  for (let btntoadd of addtocartbtn) {

    btntoadd.addEventListener('click', function () {

      //basketimizi getirdim, parse eledim. S-S qaydasi yani ki Set-Stringify, baskete nese gonderende set edirik stringify ile, getirende ise parse edirik.

      let shopcart = JSON.parse(localStorage.getItem('shopcart'));

      let prod_id = this.parentElement.parentElement.parentElement.parentElement.id
      // console.log(prod_id)
      let prod_img_src = this.parentElement.parentElement.parentElement.children[0].children[0].src;

      let prod_name = this.parentElement.parentElement.children[0].innerHTML

      let prod_cost = this.parentElement.previousElementSibling.children[2].innerHTML;
      //butun melumatlari goturdum

      let prodexists = shopcart.find(x => x.Id == prod_id);

      if (prodexists == undefined) {
        shopcart.push({
          Id: prod_id,
          Name: prod_name,
          Src: prod_img_src,
          Price: prod_cost,
          Count: 1
        });
      }
      else {
        prodexists.Count++;
      }

      localStorage.setItem('shopcart', JSON.stringify(shopcart));
      CountBasketLength();
      //set eliyen kimi getsin spanin icindeki regemi deyishsin
    })

  }




});





//#endregion add to basket













