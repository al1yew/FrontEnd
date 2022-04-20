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

    let input_value = document.getElementById('input').value; 
    let list = document.getElementById('list');
    let li = document.createElement('li'); 
    let span = document.createElement('span'); 
    let div_buttons = document.createElement('div');
    let del = document.createElement('button'); 
    let edit = document.createElement('button'); 
    let i_del = document.createElement('i');
    let i_edit = document.createElement('i');

    span.innerHTML = input_value;
    i_edit.className = 'fa-solid fa-pen';
    i_del.className = 'fa-solid fa-eraser';
    
    

    list.appendChild(li);
    li.appendChild(span);
    li.appendChild(div_buttons);
    div_buttons.appendChild(del);
    div_buttons.appendChild(edit);
    del.appendChild(i_del);
    edit.appendChild(i_edit);

    for(let btn of btn_delete) {
        btn.onclick = function(e) {
            e.target.parentElement.remove();
        }
    }


}

