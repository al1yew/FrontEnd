
function Increase() {

    let result = Number(document.getElementById('result').innerHTML);
    result++;
    document.getElementById('result').innerHTML = result;

}

function Decrease() {

    let result = Number(document.getElementById('result').innerHTML);
    result--;
    document.getElementById('result').innerHTML = result;
    
}

let Reset = () => document.getElementById('result').innerHTML = 0;