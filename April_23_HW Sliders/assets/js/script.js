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
        if (div.textContent.trim() === math) {
            alert('qweqwe');
        }
        

    }




}


