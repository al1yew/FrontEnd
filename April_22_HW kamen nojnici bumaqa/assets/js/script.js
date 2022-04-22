let result = document.getElementById('result');
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let random_result = document.getElementById('random_result');
let game_elements = document.getElementById('game_elements');

// let math = Math.random();

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

        if (div.textContent.trim().toLowerCase() === math.toLowerCase()) {
            result.style.backgroundColor = 'yellow';
            result.innerHTML = 'Draw!'
            result.style.color = 'black';
            result.style.fontSize = '2rem';
        }
        else if (div.textContent.trim().toLowerCase() == 'rock' && math.toLowerCase() == 'paper') {
            result.style.backgroundColor = 'red';
            result.innerHTML = 'You Lost!'
            result.style.color = 'white';
            result.style.fontSize = '2rem';
        }
        else if (div.textContent.trim().toLowerCase() == 'rock' && math.toLowerCase() == 'scissors') {
            result.style.backgroundColor = 'green';
            result.innerHTML = 'You Won!'
            result.style.color = 'white';
            result.style.fontSize = '2rem';
        }
        else if (div.textContent.trim().toLowerCase() == 'paper' && math.toLowerCase() == 'rock') {
            result.style.backgroundColor = 'green';
            result.innerHTML = 'You Won!'
            result.style.color = 'white';
            result.style.fontSize = '2rem';
        }
        else if (div.textContent.trim().toLowerCase() == 'paper' && math.toLowerCase() == 'scissors') {
            result.style.backgroundColor = 'red';
            result.innerHTML = 'You Lost!'
            result.style.color = 'white';
            result.style.fontSize = '2rem';
        }
        else if (div.textContent.trim().toLowerCase() == 'scissors' && math.toLowerCase() == 'rock') {
            result.style.backgroundColor = 'red';
            result.innerHTML = 'You Lost!'
            result.style.color = 'white';
            result.style.fontSize = '2rem';
        }
        else if (div.textContent.trim().toLowerCase() == 'scissors' && math.toLowerCase() == 'paper') {
            result.style.backgroundColor = 'green';
            result.innerHTML = 'You Won!'
            result.style.color = 'white';
            result.style.fontSize = '2rem';
        }

        //i need select only once in 5 seconds 
        //think about it

        setTimeout(function () {
            window.location.reload();
        }, 5000);
        
    }




}


