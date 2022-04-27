

function CountBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    let count = basket.length;
    document.getElementById('count_prod').innerHTML = count;
}

CountBasket();


let basket = JSON.parse(localStorage.getItem('basket'));
let alert = document.getElementById('basket_alert');

if (basket.length === 0) {
    alert.classList.remove('d-none');
    document.getElementById('btn_list').classList.add('d-none');
}
else {
    alert.classList.add('d-none');
    let pr = '';
    for (let product of basket) {
        pr += `
        <div class="pr-box">
            <div class="row align-items-center justify-content-between">
                <div class="col-lg-2">
                    <img class="img-fluid" src="${product.Src}" alt="">
                </div>
                <div class="col-lg-3">
                    <h4>${product.Name}</h4>
                </div>
                <div class="col-lg-3">
                    <h5>${product.Price}</h5>
                </div>
                <div class="col-lg-2">
                    <input type="number" id="product_count" value=${product.Count}>
                </div>
                <div class="col-lg-1">
                    <i class="fa fa-trash delete_icon" aria-hidden="true"></i>
                </div>
            
            </div>
        </div> 
        `
        document.getElementById('list').innerHTML = pr;

        let input_count_product = document.querySelectorAll('#product_count'); //yuxarida yaratdigimiz pr box-un guya htmlda yaranan versiyasinin icindeki inputu goturduk


        for (let product_input of input_count_product) {
            product_input.onchange = function () {
                // console.log(input_count_product_value);
                // basket.Count = input_count_product_value;
                // localStorage.getItem()
                // basket.Count = product_input.value;
                // console.log(basket.Count)
                basket
            }
        }
        // let input_count_product_value = input_count_product.value;


    }

}


let refresh_btn = document.getElementById('refresh');
let clear_btn = document.getElementById('clear');


let delete_icon = document.querySelectorAll('.delete_icon');
console.log(delete_icon);
for (let d_btn of delete_icon) {
    d_btn.addEventListener('click', function (e) {
        let div = e.target.parentElement.parentElement.parentElement;
        div.remove();
    })
}

refresh_btn.addEventListener('click', function () {
    document.body.style.opacity = '0'
    setTimeout(() => {
        document.body.style.opacity = '1'
        location.reload();
    }, 500);
})

clear_btn.addEventListener('click', function () {
    localStorage.setItem('basket', JSON.stringify([]));
    location.reload();
})
