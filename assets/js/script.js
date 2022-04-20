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

    let input_value = document.getElementById('input').value; //our input
    let list = document.getElementById('list'); //out list ul
    let li = document.createElement('li'); // list elements li
    let span = document.createElement('span'); // span in li (add method)
    let del = document.createElement('button'); // delete button
    let edit = document.createElement('button'); // edit button
    let i_del = document.createElement('i');
    let i_edit = document.createElement('i');

    span.innerHTML = input_value;





    i_edit.className = 'fa-solid fa-pen';
    i_del.className = 'fa-solid fa-eraser';
    
    list.appendChild(li);
    li.appendChild(span);
    li.appendChild(del);
    li.appendChild(edit);
    del.appendChild(i_del);
    edit.appendChild(i_edit);



}

