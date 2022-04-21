
document.body.onkeydown = function (e) {

    let input = document.getElementById('input');

    input.focus();

    if (e.keyCode === 13) {  //enter
        document.body.style.backgroundColor = `${input.value}`;
    }

    else if (e.keyCode === 27) {  //esc
        document.body.style.backgroundColor = 'white'
    }
    
}