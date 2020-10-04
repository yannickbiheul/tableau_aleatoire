
let blocsQuestions = document.querySelectorAll(".blocQuestion");

let question1 = "Question 1";
let question2 = "Question 2";
let question3 = "Question 3";
let question4 = "Question 4";
let question5 = "Question 5";
let questions = [question1, question2, question3, question4, question5];

// Tableau random

let randoms = [];

// Fonction tableau random

function randomTab() {
    for (let i = 0; i <= blocsQuestions.length; i++) {
        let random = Math.floor(Math.random() * questions.length);
        if (randoms.includes(random)) {
            random = Math.floor(Math.random() * questions.length);
        } else {
            randoms.push(random);
            blocsQuestions[i].innerText = questions[randoms[i]];
        }
    }
    return randoms;
}

randomTab();

console.log(randoms);