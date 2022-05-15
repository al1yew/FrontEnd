// #region bag_diva click olunmasin

let bag_div112345 = document.querySelector('.bag_div');

bag_div112345.onclick = function (e) {
    e.preventDefault()
}

//#endregion bag_div1 click olunmasin

//#region shopping cartin ustundeki span

//isteyirem ki shop cartin ustundeki span regemi deyishsin, ozumuzden funksiya yazirig ve ozumuz cagiririg ki melumati ozu otursun, ve her deyishiklikden sonra bunu cagiriram ki yoxlasin, mehsul eynididse spani artirmasin

$(document).ready(function () {

    function CountBasketLength() {
        let shopcart = JSON.parse(localStorage.getItem('shopcart'));
        let cartcount = shopcart.length;
        document.querySelector('#cartcount').innerHTML = cartcount;
    }

    CountBasketLength();

});



//cagiriram mutleq metodu cunki ozu ozune ishlemir, ve butun etodlarda cagiracam onu ki reload-suz ishlesin

//#endregion shopping cartin ustundeki span




// let shopcart = JSON.parse(localStorage.getItem('shopcart'));




//#region yoxlayirig basket boshdu ya yox ve yigirig baskete

$(document).ready(function () {

    let shopcart = JSON.parse(localStorage.getItem('shopcart'));
    let empty_basket = document.querySelector('#contentbasket');
    let filled_basket = document.querySelector('#prod_in_cart');
    let little_filled_basket = document.querySelector('#polniy_basket')
    let little_empty_basket = document.querySelector('#pustoy_basket')
    let subtotal_bag_div = document.querySelector('#subtotal_bag_div');

    //basketimizi cagirdig, parse eledik
    // bosh olanda yaradilan sectionu basket boshdursa gostereceyik

    if (shopcart.length != 0) {

        empty_basket.classList.add('d-none');
        filled_basket.classList.remove('d-none');
        little_empty_basket.classList.add('d-none');
        little_filled_basket.classList.remove('d-none');


        let pr_big = '';
        let pr_small = '';
        let small_basket_inner = document.querySelector('#small_basket_innner');
        let big_basket_inner_tbody = document.querySelector('#tbody_basket');

        for (let product of shopcart) {
            pr_big +=
                `
                <tr>
                    <td class="col-lg-1">
                        <img class="img-fluid" src="${product.Src}">
                    </td>
                    <td class="col-lg-6">
                        <span>
                            ${product.Name}
                        </span>
                    </td>
                    <td class="col-lg-1">
                        ${product.Price}$
                    </td>
                    <td class="col-lg-2">
                        <div class="top_counter col-lg-12">
                            <button id="decrease">
                                -
                            </button>

                            <span id="result_count">
                                ${product.Count}
                            </span>

                            <button id="increase">
                                +
                            </button>
                        </div>

                        <div class="bottom_counter">
                            <span id="max10">You can add max 10</span>
                        </div>
                    </td>
                    <td class="col-lg-1">
                        ${Math.round((product.Price * product.Count) * 100) / 100}$
                    </td>
                    <td id="remove_prod_basket" class="col-lg-0-5 remove_prod_basket">
                        <span>
                            X
                        </span>
                    </td>
                </tr>
            `

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
            big_basket_inner_tbody.innerHTML = pr_big;
        }

    }
    else {

        empty_basket.classList.remove('d-none');
        filled_basket.classList.add('d-none');
        little_empty_basket.classList.remove('d-none');
        little_filled_basket.classList.add('d-none');
    }



});


//#endregion yoxlayirig basket boshdu ya yox



//#region totali hesablayirig



$(document).ready(function () {

    let shopcart = JSON.parse(localStorage.getItem('shopcart'));
    let total = 0;
    let subtotal_inner = document.querySelector('#subtotal_right_countprice');
    let subtotal_inner_big_basket = document.querySelector('#subtotal_right_countprice1');
    let basket_result_cost = document.querySelector('#basket_result_cost');
    let total_header_cost = document.querySelector('#total_header_cost');

    for (let product of shopcart) {
        total += product.Price * product.Count
    }

    subtotal_inner.innerHTML = Math.round(total * 100) / 100;

    total_header_cost.innerHTML = `$${Math.round(total * 100) / 100}`;

    basket_result_cost.innerHTML = `$${Math.round(total * 100) / 100 + 5}`;

    subtotal_inner_big_basket.innerHTML = `$${Math.round(total * 100) / 100}`;

    if (total == 0) {
        document.getElementById('subtotal_right_countprice').innerHTML = '$0.00';
        document.getElementById('total_header_cost').innerHTML = '$0.00';
        document.getElementById('subtotal_right_countprice1').innerHTML = '$0.00';
        document.querySelector('#basket_result_cost'), innerHTML = '$0.00';
    }
});








//#endregion totali hesablayirig




//#region delete item 



let shopcart1 = JSON.parse(localStorage.getItem('shopcart'));

$(document).ready(function () {

    let delete_btns = document.querySelectorAll('.remove_prod_basket');

    for (let d_btn of delete_btns) {
        d_btn.onclick = function (e) {

            for (let i = 0; i < shopcart1.length; i++) {
                if (e.target.parentElement.parentElement.children[1].children[0].innerText.trim() == shopcart[i].Name.trim()) {
                    shopcart1.splice(i, 1);
                    localStorage.setItem('shopcart', JSON.stringify(shopcart1));
                    location.reload();
                }
            }
        }
    }
})



//#endregion delete item




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



