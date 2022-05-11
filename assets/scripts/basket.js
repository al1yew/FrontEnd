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

        let prod_img_src = this.parentElement.parentElement.parentElement.children[0].src;

        let prod_name = this.parentElement.parentElement.children[0].innerHTML

        let prod_cost = this.parentElement.previousElementSibling.children[0].children[1];
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
            prodexists.Count += 1;
        }


        // console.log(shopcart) ISHLEDIIIIIIIII

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


