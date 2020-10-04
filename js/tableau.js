
let blocQuestion1 = "Bloc Question 1";
let blocQuestion2 = "Bloc Question 2";
let blocQuestion3 = "Bloc Question 3";
let blocQuestion4 = "Bloc Question 4";
let blocQuestion5 = "Bloc Question 5";
let blocsQuestions = [blocQuestion1, blocQuestion2, blocQuestion3, blocQuestion4, blocQuestion5];

let question1 = "Question 1";
let question2 = "Question 2";
let question3 = "Question 3";
let question4 = "Question 4";
let question5 = "Question 5";
let question6 = "Question 6";
let question7 = "Question 7";
let question8 = "Question 8";
let question9 = "Question 9";
let question10 = "Question 10";
let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];

// Tableau random

let randoms = [];

// Fonction tableau random

function randomTab() {
    for (let i = 0; i < blocsQuestions.length; i++) {
        let random = Math.floor(Math.random() * questions.length);
        while (randoms.includes(random)) {
            random = Math.floor(Math.random() * questions.length);
        } 
        randoms.push(random);
        blocsQuestions[i] = questions[randoms[i]];
    }
    return randoms;
}

randomTab();

console.log(randoms);
console.log(blocsQuestions);
