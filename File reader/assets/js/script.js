let download = document.querySelector('.download'); // get download classli olani getir, query selectorAll ise hamsini getirir ve menimsetdiyimiz variableni sonra for loop-unda ishlede bilerik

download.addEventListener('click', function () {
  this.nextElementSibling.click(); // bu odu ki inputun ozu gorsenmesin ve gozel icon ile add edek 
})

download.nextElementSibling.onchange = function (e) { //download icondu deye ve biz onu inputun ishini gorduyune gore burda cagiririg

  for (let file of e.target.files) { //butun files-larin arasindaki yuklenen file ucun funksiya

    const reader = new FileReader(); // mutleq obyekti yaradirig

    reader.onloadend = function (event) { //onloadend yani loading olannan sonra (misalcun 15gb yuklemishik, bize bosh table yaradmasin, bizde bosh table-ya baxib demeyek fayl noldu e. yuklenennen sonra yaradir tableni ve d-none-ni yigishdirir)

      //#region Element creation

      //tr yaradiriq, icinde td dinamic shekilde, icinde p-ler ki display flex verib ortaya getirek

      let tr = document.createElement('tr');

      let tdImg = document.createElement('td');
      let tdName = document.createElement('td');
      let tdSize = document.createElement('td');

      let tdRemove = document.createElement('td');
      let remove = document.createElement('span');
      remove.setAttribute('id', 'remove');
      remove.innerHTML = 'X';
      let tdImgName = document.createElement('p');
      let tdImgSize = document.createElement('p');

      // console.log(getFileExtension(img)); sehvdi

      //#endregion

      //#region Images creation, id, src

      //imageler
      let img = document.createElement('img'); //img yaratdig

      img.setAttribute('src', event.target.result); //event yani reader.onload eventi, bash verennen sonra, gedir imagenin source-ni (burda target resultdu bunu sorushacam) getirir goyur scr yerine

      img.setAttribute('id', 'image') //id verirem ki sonra nese elemek lazim olsa id ile cagirim

      tdImg.appendChild(img); // saldig td-nin icine

      // console.log(img)  yoxladig id-ni

      //#endregion

      //#region Image size

      let size = file.size / 1024 / 1024;

      if (size > 1024) {
        tdImgSize.innerHTML = (size / 1024).toFixed(2) + "GB";
      }
      else {
        tdImgSize.innerHTML = size.toFixed(2) + "MB";
      }

      //#endregion

      //#region Image name, Appned child

      // console.log(file.name.toString().slice(-4)); bax budu  

      if (file.name.toString().slice(-4).toLowerCase() == '.pdf') { //stringe ceviririk axirdan 4 denesini gotururuk lower edirik. mutleq noqte ile lazimdir cunki birden hansisa menasiz fayl oldu, extensionu ppdf ya da nebilim mpdf ola biler. Bize ise mehz .pdf lazimdi
        tdImgName.innerHTML = file.name;
        tdName.appendChild(tdImgName);
        tdRemove.appendChild(remove);
        tdSize.appendChild(tdImgSize);

        tr.append(tdImg, tdName, tdSize, tdRemove);
        document.getElementById('tbody').appendChild(tr);
      }
      else {
        alert('You can upload only PDF!');
      }
      // hetta papkalardaki view-dan file extensionslari sondursem ishleyir 
      //demeli fayl pdf-dise if-in shertleri yerine getirilir. 

      //#endregion

      //#region Remove




      //#endregion




    }
    //bunu sorush
    reader.readAsDataURL(file);
  }
  //disp none-ni da yigishdiririg ki normal gostersin loaded olannan sonra
  document.querySelector('.table').classList.remove('d-none');
}