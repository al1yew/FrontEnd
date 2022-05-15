
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
      $('#error').slideDown(200);
      $('#error_p').html('Your Login and Password must contain at least 8 characters!')
    }
    else {
      $('#error').slideUp(200);
    }

  })

  $('#register').click(function () {

    if (ren.val().length < 8 || rep.val().length < 8) {
      $('#error').slideDown(200);
      $('#error_p').html('Your Login and Password must contain at least 8 characters!')
    }
    else {
      $('#error').slideUp(200);
    }

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

//#region photo producthtml slider

//burda elemek lazimdi ki, hansi image click olunsa, onun src-sini gotursun set elesin boyuk img-nin srcsinin yerine. Amma evvelce boyuyunkunu '' elemek lazimdi

//#endregion photo producthtml slider

//#region product html datalari getirmek



//burda umumiyyetle set etmek olmayacaq, local storageye atmag lazimdi butun produktlari, sonra da id-ile yoxlamaq hansina klik olunub, onu da getirmek product.htmla

//gerek shekilleri salim fora, hansina klik olunsa onun melumatlarini atim storage-ya, ve product.html acilanda hemin melumatlari set edim muvafiq yerlere



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

function CountBasketLength() {
  let shopcart = JSON.parse(localStorage.getItem('shopcart'));
  let cartcount = shopcart.length;
  document.querySelector('#cartcount').innerHTML = cartcount;
}

//#endregion shopping cartin ustundeki span




//#region add to basket



$(document).ready(function () {

  if (localStorage.getItem('shopcart') === null) {
    localStorage.setItem('shopcart', JSON.stringify([])); //local storagede arrayimizi yaratdiq
  }
  CountBasketLength();

  // birinci basketi yaratdim, array kimi. Sonra dedim ki productlar for-a salinsin, hansina klik olunsa onun datasini getirsin.

  let addtocartbtn = document.querySelectorAll('.addtocart');

  for (let btntoadd of addtocartbtn) {

    btntoadd.addEventListener('click', function () {


      let shopcart = JSON.parse(localStorage.getItem('shopcart'));
      //basketimizi getirdim, parse eledim. S-S qaydasi yani ki Set-Stringify, baskete nese gonderende set edirik stringify ile, getirende ise parse edirik.

      let prod_id = this.parentElement.parentElement.parentElement.parentElement.id
      let prod_img_src = this.parentElement.parentElement.parentElement.children[0].children[0].src;

      let prod_name = this.parentElement.parentElement.children[0].innerHTML

      let prod_cost = this.parentElement.previousElementSibling.children[2].innerHTML;

      //butun melumatlari goturdum

      let prodexists = shopcart.find(x => x.Id == prod_id);
      //burda deyirikki, shopkartda X axtarsin, hansi X? id-si bizim almaq istediyimiz produktun id-sine. Tapmasa, elave ede biler, tekrarcilig olmasin deye, eyni produktlar almasinlar.

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
      }//dedik ki bes eyni id-li mehsul tapilsa, onda countunu artirsin

      localStorage.setItem('shopcart', JSON.stringify(shopcart));

      document.body.style.opacity = '0'
      setTimeout(() => {
        location.reload();
        document.body.style.opacity = '1'
      }, 500);

      //set edirik obratno v nash basket
      CountBasketLength();

      //set eliyen kimi getsin spanin icindeki regemi deyishsin
      CountBasketCost();

      //set olunan kimi de avtomatik refresh elesin balaca basketi
      AddToLittleBasket();
    })
  }
});

//#endregion add to basket




//#region countbasket kimi burda da balaca baskete add edirem, ki ozu refreshsiz add elesin, fuksiya ozu ashagidadir


function AddToLittleBasket() {

  let shopcart = JSON.parse(localStorage.getItem('shopcart'));
  let little_filled_basket = document.querySelector('#polniy_basket')
  let little_empty_basket = document.querySelector('#pustoy_basket')

  //basketimizi cagirdig, parse eledik
  // bosh olanda yaradilan sectionu basket boshdursa gostereceyik

  if (shopcart.length != 0) {

    little_empty_basket.classList.add('d-none');
    little_filled_basket.classList.remove('d-none');

    let pr_small = '';
    let small_basket_inner = document.querySelector('#small_basket_innner');

    for (let product of shopcart) {

      pr_small +=
        `
              <div class="product_bag_div">

                  <div class="left col-lg-3">
                      <img src="${product.Src}">
                      <span id="remove_prod_basket" class="remove_x_small_basket remove_prod_basket">
                          x
                      </span>
                  </div>

                  <div class="right col-lg-9">

                      <div class="top">
                          ${product.Name}
                      </div>

                      <div class="bottom">
                          <span>${product.Count} pcs.</span>
                          <span>x</span>
                          <span>${product.Price}$</span>
                      </div>

                  </div>

              </div>
          `
      small_basket_inner.innerHTML = pr_small;
    }

  }
  else {
    little_empty_basket.classList.remove('d-none');
    little_filled_basket.classList.add('d-none');
  }

}

//#endregion countbasket kimi burda da balaca baskete add edirem, ki ozu refreshsiz add elesin, fuksiya ozu ashagidadir








//#region yoxlayirig basket boshdu ya yox ve yigirig baskete

$(document).ready(function () {

  let shopcart = JSON.parse(localStorage.getItem('shopcart'));
  let little_filled_basket = document.querySelector('#polniy_basket')
  let little_empty_basket = document.querySelector('#pustoy_basket')

  //basketimizi cagirdig, parse eledik
  // bosh olanda yaradilan sectionu basket boshdursa gostereceyik

  if (shopcart.length != 0) {

    little_empty_basket.classList.add('d-none');
    little_filled_basket.classList.remove('d-none');

    let pr_small = '';
    let small_basket_inner = document.querySelector('#small_basket_innner');

    for (let product of shopcart) {

      pr_small +=
        `
              <div class="product_bag_div" id="${product.Id}">

                  <div class="left col-lg-3">
                      <img src="${product.Src}">
                      <span id="remove_prod_basket" class="remove_x_small_basket remove_prod_basket">
                          x
                      </span>
                  </div>

                  <div class="right col-lg-9">

                      <div class="top">
                          ${product.Name}
                      </div>

                      <div class="bottom">
                          <span>${product.Count} pcs.</span>
                          <span>x</span>
                          <span>${product.Price}$</span>
                      </div>

                  </div>

              </div>
          `
      small_basket_inner.innerHTML = pr_small;
    }

  }
  else {
    little_empty_basket.classList.remove('d-none');
    little_filled_basket.classList.add('d-none');
  }

});


//#endregion yoxlayirig basket boshdu ya yox




//#region CountBasketCost hemin funksiyadi, prosto bilmirem niye ozu ozunu cagirmir, funksiya ozu ashagidakidi

function CountBasketCost() {
  let shopcart = JSON.parse(localStorage.getItem('shopcart'));
  let total = 0;
  let subtotal_inner = document.querySelector('#subtotal_right_countprice');
  let total_header_cost = document.querySelector('#total_header_cost');

  for (let product of shopcart) {
    total += product.Price * product.Count
  }

  subtotal_inner.innerHTML = Math.round(total * 100) / 100;

  total_header_cost.innerHTML = `$${Math.round(total * 100) / 100}`;

  if (total == 0) {
    document.getElementById('subtotal_right_countprice').innerHTML = '$0.00';
    document.getElementById('total_header_cost').innerHTML = '$0.00';
  }
}


//#endregion CountBasketCost hemin funksiyadi, prosto bilmirem niye ozu ozunu cagirmir, funksiya ozu ashagidakidi


//#region totali hesablayirig

$(document).ready(function () {
  let shopcart = JSON.parse(localStorage.getItem('shopcart'));
  let total = 0;
  let subtotal_inner = document.querySelector('#subtotal_right_countprice');
  let total_header_cost = document.querySelector('#total_header_cost');

  for (let product of shopcart) {
    total += product.Price * product.Count
  }

  subtotal_inner.innerHTML = Math.round(total * 100) / 100;

  total_header_cost.innerHTML = `$${Math.round(total * 100) / 100}`;

  if (total == 0) {
    document.getElementById('subtotal_right_countprice').innerHTML = '$0.00';
    document.getElementById('total_header_cost').innerHTML = '$0.00';
  }
});


//#endregion totali hesablayirig





//#region delete item 


let shopcart = JSON.parse(localStorage.getItem('shopcart'));

$(document).ready(function () {

  let shopcart = JSON.parse(localStorage.getItem('shopcart'));

  let delete_btns1 = document.querySelectorAll('.remove_prod_basket');

  let prod_sm_bs = document.querySelectorAll('.product_bag_div');

  for (let a = 0; a < shopcart.length; a++) {

    for (let b = 0; b < prod_sm_bs.length; b++) {

      if (shopcart[a].Id == prod_sm_bs[b].id) {
        console.log('salam')
      }

    }
  }

})


// for (let d_btn of delete_btns1) {

//   d_btn.onclick = function () {

//     for (let i = 0; i < shopcart.length; i++) {

//       if () {
//         shopcart.splice(i, 1);
//         localStorage.setItem('shopcart', JSON.stringify(shopcart));

//         location.reload();
//         // CountBasketLength();
//         // CountBasketCost();
//         // AddToLittleBasket();
//         //how to reload only this div
//       }

//     }
//   }
// }
//#endregion delete item 

//#region counter

let prod_inc_dec = document.querySelectorAll('.top_counter')

let products_html = document.querySelectorAll('.product_html');

let addtocartbtns = document.querySelectorAll('.addtocart');

for (let i = 0; i < shopcart.length; i++) {

  for (let prod_html of products_html) {

    if (shopcart[i].Id == prod_html.id) {

      prod_html.children[0].children[4].children[4].children[0].style.display = 'none';

      prod_html.children[0].children[4].children[4].children[1].classList.remove('d-none');

      prod_html.children[0].children[4].children[4].children[1].children[1].innerHTML = shopcart[i].Count;

      prod_html.children[0].children[4].children[4].children[1].children[0].onclick = function () {

        shopcart[i].Count--;

        prod_html.children[0].children[4].children[4].children[1].children[1].innerHTML = shopcart[i].Count;

        document.body.style.opacity = '0'
        setTimeout(() => {
          location.reload();
          document.body.style.opacity = '1'
        }, 1000);

        if (shopcart[i].Count < 1) {
          prod_html.children[0].children[4].children[4].children[1].classList.add('d-none');
          prod_html.children[0].children[4].children[4].children[0].style.display = 'block';
          shopcart.splice(i, 1);
          localStorage.setItem('shopcart', JSON.stringify(shopcart));

          document.body.style.opacity = '0'
          setTimeout(() => {
            location.reload();
            document.body.style.opacity = '1'
          }, 1000);
        }

        localStorage.setItem('shopcart', JSON.stringify(shopcart));

      }

      prod_html.children[0].children[4].children[4].children[1].children[2].onclick = function () {

        shopcart[i].Count++;

        prod_html.children[0].children[4].children[4].children[1].children[1].innerHTML = shopcart[i].Count;

        localStorage.setItem('shopcart', JSON.stringify(shopcart));

        document.body.style.opacity = '0'
        setTimeout(function () {
          window.location.href = window.location;
          document.body.style.opacity = '1'
        }, 1500);

      }

    }

  }
}

//#endregion counter
