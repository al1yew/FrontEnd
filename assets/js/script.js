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
    let div_buttons = document.createElement('div');
    let edit = document.createElement('i');
    let del = document.createElement('i');
    
    // if (input_value.lenght > 0) {

    //     let del_class = document.getElementsByClassName('del');
    //     let edit_class = document.getElementsByClassName('edit');

    //     list.appendChild(li);
    //     li.appendChild(span);
    //     li.appendChild(del);
    //     li.appendChild(edit);
    // }
    // else {
    //     input.style.border = '1px solid red';
    //     input.style.boxShadow = '1px 1px 5px 10px red';
    // }

    span.innerHTML = input_value;

    del.className = 'fa-solid fa-eraser del';
    edit.className = 'fa-solid fa-pen edit';
    
    let edit_class = document.getElementsByClassName('edit');
    let del_class = document.getElementsByClassName('del');

    list.appendChild(li);
    li.appendChild(span);
    li.appendChild(div_buttons);
    div_buttons.appendChild(edit);
    div_buttons.appendChild(del);

    for (let i of del_class) {
        i.onclick = function (e) {
            e.target.parentElement.parentElement.remove();
        }
    }

    for (let btn of edit_class) {
        btn.onclick = function(e) {
            let new_input = document.getElementById('input').value;
            new_input = e.target.parentElement.innerText;
            

        }
    }

    document.getElementById('input').value = '';
}


