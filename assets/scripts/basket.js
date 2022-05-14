//#region add to basket


if (localStorage.getItem('shopcart') === null) {
    localStorage.setItem('shopcart', JSON.stringify([])); //local storagede arrayimizi yaratdiq
}

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



//#endregion add to basket




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







//#region yoxlayirig basket boshdu ya yox

let shopcart = JSON.parse(localStorage.getItem('shopcart'));
let empty_basket = document.querySelector('#contentbasket');
let filled_basket = document.querySelector('#prod_in_cart');
let little_filled_basket = document.querySelector('#polniy_basket')
let little_empty_basket = document.querySelector('#pustoy_basket')

//basketimizi cagirdig, parse eledik
// bosh olanda yaradilan sectionu basket boshdursa gostereceyik

if (shopcart.length == 0) {
    empty_basket.classList.remove('d-none');
    filled_basket.classList.add('d-none');
    little_empty_basket.classList.remove('d-none');
    little_filled_basket.classList.add('d-none');
    // console.log(empty_basket)
    // console.log(filled_basket)
    // console.log(little_empty_basket)
    // console.log(little_filled_basket)
}
else {

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
                    ${product.Name}
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
                <td id="remove_prod_basket" class="col-lg-0-5">
                    X
                </td>
            </tr>
        `

        pr_small +=
            `
            <div class="product_bag_div">

                <div class="left col-lg-3">
                    <img src="${product.Src}">
                    <span id="remove_prod_basket" class="remove_x_small_basket">
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
    // console.log(empty_basket)
    // console.log(filled_basket)
    // console.log(little_empty_basket)
    // console.log(little_filled_basket)






    //nado add classslist sdelat d-none
    //takje tut nado sozdat ogromniy designed div, v kotoriy kak v to do list v kotoriy budut dobavlatsa vse nashi tovari. dla etogo mi nash basket zasunem v for, i dla kajdogo elementa budem sozdavat div, i vnutr p, span, h6 zad, budem delat set hemin let basket_item naprimer of basket-in . name, .price, .count itd eto krc rekord nomer 2 pod konec posle 38 minuti
    //console logom proveru prineset li on mne kak list moi tovari v console
    //uchuncu rekord 10cu deqiqeden, mene oz counterim lazimdi burda maragli olsun
    //refreshe bax kodda ve clear all a bax
    //delete iconlari nece edirik, butun delete iconlari saliram fora, deyirem ki hansina klik olunsa, funksiya bash versin. Saliram basketi fora, dyirem ki basketin icindeki butun elementlerin icinde axtar. Neyi? delete buttona click olunan elementin id-sinin basketin icinde olanini, ve onu sil ordan.
    //nayti mojno s pomoshyu find metoda, mi tam vibirayem bukvu lubuyu, i govorim shto idi ishi, smotri naverhu
    //v skobke find posledniy id (kotoriy sboku sprava) eto id kotoriy prinadlejit nashemu elementu, knpku kotorogo mi najali
    //
}




//#endregion yoxlayirig basket boshdu ya yox


