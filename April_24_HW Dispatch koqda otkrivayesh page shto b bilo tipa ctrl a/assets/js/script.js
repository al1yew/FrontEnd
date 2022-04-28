function Start() {
    window.addEventListener('load', ()=>{
		document.dispatchEvent(new KeyboardEvent('keypress', {'key': 'ctrlKey'}));
		document.dispatchEvent(new KeyboardEvent('keypress', {'key': 'shiftKey'}));
		document.dispatchEvent(new KeyboardEvent('keypress', {'key': '6'}));
});
    document.addEventListener('keypress', (event)=>{
        document.body.style.backgroundColor = 'red';
    });
}



let input = document.getElementsByName('Captcha')[0];

$(input).focus();
Start();