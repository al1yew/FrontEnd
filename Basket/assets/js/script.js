
if(localStorage.getItem('basket') === null) {
    localStorage.setItem('basket',JSON.stringify([]));
  }
  
  
  let btns = document.querySelectorAll('.btn_add');
  
  for(let btn of btns) {
    btn.addEventListener('click',function(e) {
      let basket = JSON.parse(localStorage.getItem('basket'));
      let id = e.target.parentElement.parentElement.id;
      let prod_img = e.target.parentElement.previousElementSibling.src;
      let prod_name = e.target.previousElementSibling.previousElementSibling.innerText
      let prod_price = e.target.previousElementSibling.innerText;
      let existProd = basket.find(p => p.Id==id);
  
      if(existProd == undefined) {
        basket.push({
          Id: id,
          Name: prod_name,
          Src: prod_img,
          Price: prod_price,
          Count: 1
        })
      }
      else{
        existProd.Count +=1;
      }
  
      localStorage.setItem('basket',JSON.stringify(basket));
      CountBasket();
    })
  }
  
  
  
  
  
  function CountBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    let count = basket.length;
    document.getElementById('count_prod').innerHTML = count;
  }
  
  CountBasket();