function Time() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if(h<10) {
        h = "0" + h;
    }
    else if(m<10) {
        m = "0" + m;
    }
    else if(s<10) {
        s = "0" + s;
    }

    let time = h + ":" + m + ":" + s;
    document.getElementById('clock').innerHTML = time;

    if(h>=18){
        document.body.style.background = 'rgb(41,41,41)';
    }
}
setInterval(Time,1000);

