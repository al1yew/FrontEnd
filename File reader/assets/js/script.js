let download = document.querySelector('.download'); // get download classli olani getir, query selectorAll ise hamsini getirir ve menimsetdiyimiz variableni sonra for loop-unda ishlede bilerik

download.addEventListener('click',function(){
  this.nextElementSibling.click(); // bu odu ki inputun ozu gorsenmesin ve gozel icon ile add edek 
})
    
download.nextElementSibling.onchange = function(e){ //download icondu deye ve biz onu inputun ishini gorduyune gore burda cagiririg

  for(let file of e.target.files) { //butun files-larin arasindaki yuklenen file ucun funksiya

    const reader = new FileReader(); // mutleq obyekti yaradirig

    reader.onloadend = function(event) { //onloadend yani loading olannan sonra (misalcun 15gb yuklemishik, bize bosh table yaradmasin, bizde bosh table-ya baxib demeyek fayl noldu e. yuklenennen sonra yaradir tableni ve d-none-ni yigishdirir)

      //tr yaradiriq, icinde td dinamic shekilde, icinde p-ler ki display flex verib ortaya getirek

      let tr = document.createElement('tr');

      let tdImg = document.createElement('td');
      let tdName = document.createElement('td');
      let tdSize = document.createElement('td');

      let tdImgName = document.createElement('p');
      let tdImgSize = document.createElement('p');


      //imageler
      let img = document.createElement('img'); //img yaratdig

      img.setAttribute('src', event.target.result); //event yani reader.onload eventi, bash verennen sonra, gedir imagenin source-ni (burda target resultdu bunu sorushacam) getirir goyur scr yerine

      img.setAttribute('id', 'image') //id verirem ki sonra nese elemek lazim olsa id ile cagirim

      tdImg.appendChild(img); // saldig td-nin icine

      console.log(img) // yoxladig id-ni


      //imagenin adi
      tdImgName.innerHTML = file.name;
      tdName.appendChild(tdImgName);


      //imagenin size-i
      let size = file.size / 1024 / 1024;

      if(size > 1024) {
        tdImgSize.innerHTML = (size / 1024).toFixed(2) + "GB";
      }
      else{
        tdImgSize.innerHTML = size.toFixed(2) + "MB";
      }

      //imagenin sizeni p-ile oturduk td-ya
      tdSize.appendChild(tdImgSize);
      console.log(tdImgSize)
      console.log(tdImgName)
      tr.append(tdImg,tdName,tdSize);
      document.getElementById('tbody').appendChild(tr);
    }

    reader.readAsDataURL(file);
  }
  document.querySelector('.table').classList.remove('d-none');
}