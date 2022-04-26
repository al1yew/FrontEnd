let download = document.querySelector('.download');

download.addEventListener('click',function(){
  this.nextElementSibling.click();
})
    
download.nextElementSibling.onchange = function(e){
  console.log(e.target.files)
  for(let file of e.target.files) {
    const reader = new FileReader();
    reader.onloadend = function(event) {
      let tr = document.createElement('tr');
      let tdImg = document.createElement('td');
      let tdName = document.createElement('td');
      let tdSize = document.createElement('td');

      let img = document.createElement('img');
      img.setAttribute('src',event.target.result);
      
      tdImg.appendChild(img);
      tdName.innerText = file.name;
      let size = file.size / 1024 / 1024;

      if(size > 1024) {
        tdSize.innerText = (size / 1024).toFixed(2) + "GB";
      }
      else{
        tdSize.innerText = size.toFixed(2) + "MB";
      }


      tr.append(tdImg,tdName,tdSize);
      document.getElementById('tbody').appendChild(tr);
    }

    reader.readAsDataURL(file);
  }
  document.querySelector('.table').classList.remove('d-none');
}