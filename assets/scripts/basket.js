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
        let prod_img_src = this.parentElement.parentElement.parentElement.children[0].src;

        let prod_name = this.parentElement.parentElement.children[0].innerHTML

        let prod_cost = this.parentElement.previousElementSibling.children[2].innerHTML;
        //butun melumatlari goturdum

        // amma diyesen hec lazim olmadi // let prod_count = 1; //bunu mecbur verdik cunki objectin icindeki Count-a not defined deyir, onu burda yaradirig ve 1 veririk ki, produktu elave edende onsuzda 1 den bashlayir

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

//basketimizi cagirdig, parse eledik
// bosh olanda yaradilan sectionu basket boshdursa gostereceyik

if (shopcart.length === 0) {
    empty_basket.classList.remove('d-none');
    filled_basket.classList.add('d-none');
    
}
else {
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


