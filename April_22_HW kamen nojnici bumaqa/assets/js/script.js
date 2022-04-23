let result = document.getElementById('result');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let random_result = document.getElementById('random_result');
let game_elements = document.getElementById('game_elements');


let arr = [
    "rock",
    "scissors",
    "paper"
];

math = arr[Math.floor(Math.random() * arr.length)];

console.log(math)

for (let div of game_elements.children) {

    console.log(div.textContent.trim())

    div.onclick = function () {
        
        random_result.innerHTML = `Computer selected ${math.toUpperCase()}`;

        if (div.id === math) {
            result.innerHTML = 'Draw!';
            result.className = 'col-lg-6';
            result.classList.add('draw');
            result.style.color= 'white';
        }
        else if (div.id == 'rock' && math == 'paper') {
            result.innerHTML = 'You Lost!';
            result.className = 'col-lg-6';
            result.classList.add('lost');
            result.style.color= 'white';
        }
        else if (div.id == 'rock' && math == 'scissors') {
            result.innerHTML = 'You Won!';
            result.className = 'col-lg-6';
            result.classList.add('win');
            result.style.color= 'white';
        }
        else if (div.id == 'paper' && math == 'rock') {
            result.innerHTML = 'You Won!';
            result.className = 'col-lg-6';
            result.classList.add('win');
            result.style.color= 'white';
        }
        else if (div.id == 'paper' && math == 'scissors') {
            result.innerHTML = 'You Lost!';
            result.className = 'col-lg-6';
            result.classList.add('lost');
            result.style.color= 'white';
        }
        else if (div.id == 'scissors' && math == 'rock') {
            result.innerHTML = 'You Lost!';
            result.className = 'col-lg-6';
            result.classList.add('lost');
            result.style.color= 'white';
        }
        else if (div.id == 'scissors' && math == 'paper') {
            result.innerHTML = 'You Won!';
            result.className = 'col-lg-6';
            result.classList.add('win');
            result.style.color= 'white';
        }

        setTimeout(function () {
            window.location.reload();
        }, 3000);
        
    }




}


