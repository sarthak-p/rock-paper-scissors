let user_score = 0; 
let comp_score = 0; 

//map to convert letter to word 
const conversion_map = new Map(); 
conversion_map['r'] = "Rock";
conversion_map['p'] = "Paper";
conversion_map['s'] = "Scissors";

//referencing the elements using variables (D0M) - saves time
//user and computer scores 
const user_scoreSpan = document.getElementById("user-score"); 
const comp_scoreSpan = document.getElementById("computer-score");

//score board 
const score_board = document.querySelector(".keep-score");

//results 
const result_p = document.querySelector(".result > p");

//rock, paper, and scissors 
const rock = document.getElementById("R");
const paper = document.getElementById("P");
const scissors = document.getElementById("S");
const restart = document.getElementById("restart");

//function that return random computer choice 
function computerPlay() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}

//when user wins 
function win(userChoice, compChoice) {
    user_score++; 
    user_scoreSpan.innerHTML = user_score; 
    comp_scoreSpan.innerHTML = comp_score;
    // const small_user = "Y".fontsize(3).sub();
    // const small_comp = "C".fontsize(3).sub();
    result_p.innerHTML = conversion_map[userChoice] + " beats " + conversion_map[compChoice];

    if (user_score == 5) {
        result_p.innerHTML = "You win. Keep Playing!";
        endGame(); 
    }
}

//when computer wins 
function lose(userChoice, compChoice) {
    comp_score++;
    user_scoreSpan.innerHTML = user_score;
    comp_scoreSpan.innerHTML = comp_score;
    // const small_user = "Y".fontsize(3).sub();
    // const small_comp = "C".fontsize(3).sub();
    result_p.innerHTML = conversion_map[userChoice] + " loses to " + conversion_map[compChoice];
    if (comp_score == 5) {
        result_p.innerHTML = "You Lose. Try Again!";
        endGame();
    }
}

//when it's a draw
function draw(userChoice, compChoice) {
    // const small_user = "Y".fontsize(3).sub();
    // const small_comp = "C".fontsize(3).sub();
    result_p.innerHTML = conversion_map[userChoice] + " obstructs " + conversion_map[compChoice];
}

//function that plays one round 
function playRound(user_input) {
    const comp_input = computerPlay(); 
    switch (user_input + comp_input) {
        case "rs":
        case "pr":
        case "sp":
            win(user_input, comp_input); 
            break; 
        case "rp":
        case "ps":
        case "sr":
            lose(user_input, comp_input);
            break; 
        case "rr":
        case "pp":
        case "ss":
            draw(user_input, comp_input);
            break; 
        }
}

//endGame after result  
function endGame() {
    user_score = 0; 
    comp_score = 0; 
    user_scoreSpan.innerHTML = user_score;
    comp_scoreSpan.innerHTML = comp_score;
}

//endGame on button click 
function endGame1() {
    result_p.innerHTML = "Are you ready?";
    user_score = 0;
    comp_score = 0;
    user_scoreSpan.innerHTML = user_score;
    comp_scoreSpan.innerHTML = comp_score;
}


function main() {

    rock.addEventListener('click', function() {
        playRound("r");
    })

    paper.addEventListener('click', function() {
        playRound("p");
    })

    scissors.addEventListener('click', function() {
        playRound("s");
    })

    restart.addEventListener('click', function () {
        endGame1();
    })
}

main(); 
