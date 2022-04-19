
function Increase() {

    let result = Number(document.getElementById('result').innerHTML);
    result++;
    document.getElementById('result').innerHTML = result;

}

function Decrease() {

    // let result = Number(document.getElementById('result').innerHTML);
    // result--;
    // document.getElementById('result').innerHTML = result;

    //bu reset-i 0 olmaq uchundu, hemde menfi regemlere gede bilir.

    
    let result = Number(document.getElementById('result').innerHTML);
    if(result>1){
        result--;
        document.getElementById('result').innerHTML = result;
    }
    else{
        document.getElementById('result').innerHTML = 1;
    }
    
    
}

let Reset = () => document.getElementById('result').innerHTML = 0;




function Decrease() {


}
