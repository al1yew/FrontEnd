
function Change() {

    if(document.getElementById("age_").value >= 18){
        document.body.style.backgroundColor = '#FF4500';
        document.getElementById('label_age').style.color = 'black';
        document.getElementById('btn').style.backgroundColor = 'green';
        document.getElementById('btn').innerHTML = 'Success!';
        document.getElementById("result").innerHTML = 'Welcome, dear visitor! Hope you enjoy it!';
        document.getElementById('icon1').className = ' '; // niye se smayli getirmir :/
        document.getElementById('icon').className = 'fa-solid fa-face-smile smile';
    }
    else{
        document.getElementById("result").style.display = 'none'; //p-ni silmek lazimdi
        document.getElementById('icon').style.display = 'none';
        document.getElementById('btn').style.backgroundColor = 'red';
        document.getElementById('btn').innerHTML = 'Get out of there!!!';
        document.body.style.backgroundColor = 'Red';
        document.getElementById('label_age').style.color = 'white';
        alert(`You need to add ${18-document.getElementById("age_").value} years to visit our website))`);
        document.getElementById('icon').className = ' ';
        document.getElementById('icon1').className = 'fa-solid fa-poop poop';
    }
}