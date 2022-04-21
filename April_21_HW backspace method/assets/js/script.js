document.body.onkeydown = function (e) {

    let input = document.getElementById('input');

    input.focus();

    if (e.keyCode === 40) {

        let input = document.getElementById('input');

        let input_slice = input.value;

        input.value = input_slice.slice(0, -1);

    }
}

