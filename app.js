const computer_choices = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    return computer_choices[Math.floor(Math.random() * computer_choices.length)];
}

let comp_choice = computerPlay(); 



function playRound(playerSelection, computerSelect) {
    

    return "You Lose! Paper beats Rock!";
}