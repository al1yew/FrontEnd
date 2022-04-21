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

    span.innerHTML = input_value;

    edit.className = 'fa-solid fa-pen edit';
    del.className = 'fa-solid fa-eraser del';

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

    for (let i of edit_class) {
        i.onclick = function (e) {
            // console.log(e.target.parentElement.previousElementSibling);        ishledi

            let span_inner = e.target.parentElement.previousElementSibling.innerText;
            let input_edit = document.getElementById('input');
            let btn = document.getElementById('btn');
            span_inner.id = 'span_inner'
            input_edit.value = span_inner;

            // span_inner.innerText = ' ';

            btn.innerHTML = 'Change';

            btn.onclick = function(e) {
                let span_inner = document.getElementById('span_inner').innerHTML;
                //burda nese problem var

                // console.log(span_inner)
                span_inner = document.getElementById('input').value;
                document.getElementById('input').value = '';
                btn.innerHTML = 'Add to List';
            }
        }
    }
}


