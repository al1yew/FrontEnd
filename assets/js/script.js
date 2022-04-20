//js function for input span placeholder

let input = document.getElementById('input');
let span = document.getElementById('input_span');

input.onfocus = () => {
    input.className = 'input_onfocus';
    span.style.top = '-25%';
    span.style.color = 'rgba(205, 23, 23, 0.563)';
}

input.onblur = () => {
    input.className = 'input_onblur';

    if (input.value != "") {
        span.style.top = '-25%';
        span.style.color = 'rgba(205, 23, 23, 0.563)';
    }
    else {
        span.style.color = 'rgba(102, 102, 102, 0.563)';
        span.style.top = '30%';
    }
}

// dynamic list creation

btn.onclick = () => {
    let input = document.getElementById('input');
    let input_value = document.getElementById('input').value; 
    let list = document.getElementById('list');
    let li = document.createElement('li'); 
    let span = document.createElement('span'); 
    let edit = document.createElement('i');
    let del = document.createElement('i');


    span.innerHTML = input_value;
    edit.className = 'fa-solid fa-pen edit';
    del.className = 'fa-solid fa-eraser del';
    

    let edit_id = document.getElementsByClassName('edit');
    let del_id = document.getElementsByClassName('del');

    list.appendChild(li);
    li.appendChild(span);
    li.appendChild(del);
    li.appendChild(edit);
    

    for(let i of del_id) {
        i.onclick = function(e) {
            e.target.parentElement.remove();
        }
    }

    // document.getElementById('input').innerHTML = ' ';
    // document.getElementById('input') = ' ';
    
//buttonu basanda input 0 olsun

}

