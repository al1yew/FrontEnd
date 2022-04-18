function Calc(){
    
    let amount_str = document.getElementById('amount').value;

    amount = Number(amount_str);

    let months = document.getElementById('months');

    let month = Number(months.options[months.selectedIndex].value);

    let percentage = document.getElementById('percentage');

    let percent = Number(percentage.options[percentage.selectedIndex].value);

    document.getElementById('result').innerHTML = `You are going to pay ${Number((((amount+(amount*percent/100))/month)).toFixed(2))} AZN or ${Number((((amount+(amount*percent/100))/month)/1.7).toFixed(2))} USD` ;

}