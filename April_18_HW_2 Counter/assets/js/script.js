
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

function Reset() {

    document.getElementById('result').innerHTML = 0;
    
}