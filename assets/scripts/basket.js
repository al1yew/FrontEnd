localStorage.setItem('shopcart', JSON.stringify([])); //local storagede arrayimizi yaratdiq


// butun add product buttonlari fora saldim, dedim ki hansinin add to cart knopkasina click olanda onu gotursun.

let addtocartbtn = document.querySelectorAll('.addtocart');

for (let btntoadd of addtocartbtn) {

    btntoadd.addEventListener('click', function () {

        // console.log('salam') ishledi, salam gosterdi
        //ya prines id vseqo diva ved na nego budem delat click

        let prod_id = this.parentElement.parentElement.parentElement.parentElement.id
        // console.log(id) pokazal mne id

        let prod_img_src = this.parentElement.parentElement.parentElement.children[0].src;
        // console.log(img_src); ssilka moego src

        let prod_name = this.parentElement.parentElement.children[0].innerHTML
        // console.log(prod_name); prines mne ima producta

        let prod_cost = this.parentElement.previousElementSibling.children[0].children[1];
        // console.log(prod_cost) prines mne cenu ura

        


    })

}