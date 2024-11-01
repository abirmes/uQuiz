const questions =[
    {
        question : "What is the capital of Finland?",
        answer: [
            {text: "Helsinki" , correct: "right"},
            {text: "abir", correct: "false"},
            {text: "abir", correct: "false"},
            {text: "abir", correct: "false"}
        ]
    },
    {
        question : "which five colours make up the Olympic rings?",
        answer: [
            {text: "Black, green, blue, yellow and red" , correct: "right"},
            {text: "abir", correct: "false"},
            {text: "abir", correct: "false"},
            {text: "abir", correct: "false"}
        ]
    },
    {
        question : "In which decade was Madonna born?",
        answer: [
            {text: "The 1960s (1968)" , correct: "false"} ,
            {text: "The 1970s (1978)", correct: "false"},
            {text: "The 1950s (1958)", correct: "right"},
            {text: "The 1940s (1948)", correct: "false"}
        ]
    },
    {
        question : "What is the most sold flavour of Walker's crisps?",
        answer: [
            {text: "Cheese and tomato" , correct: "false"} ,
            {text: "Cheese and Onion", correct: "right"},
            {text: "tomato and Onion", correct: "false"},
            {text: "potato and tomato", correct: "false"}
        ]
    },
    {
        question : "What's the biggest animal in the world?",
        answer: [
            {text: "camel" , correct: "false"} ,
            {text: "dolphin", correct: "flase"},
            {text: "lion", correct: "false"},
            {text: "The blue whale", correct: "right"}
        ]
    },
    {
        question : "Which country is brie cheese originally from?",
        answer: [
            {text: "France" , correct: "right"} ,
            {text: "morocco", correct: "flase"},
            {text: "italy", correct: "false"},
            {text: "spain", correct: "false"}
        ]
    },
    {
        question : "What does Hakuna Matata mean?",
        answer: [
            {text: "no cry" , correct: "flase"} ,
            {text: "going out", correct: "flase"},
            {text: "No worries", correct: "right"},
            {text: "play", correct: "false"}
        ]
    },
    {
        question : "What is the capital of Iceland?",
        answer: [
            {text: "madrid" , correct: "flase"} ,
            {text: "Reykjavík", correct: "right"},
            {text: "rabat", correct: "flase"},
            {text: "paris", correct: "false"}
        ]
    },
    {
        question : "Who came second in the FIFA Women's World Cup in 2019?",
        answer: [
            {text: "Maroc" , correct: "flase"} ,
            {text: "Netherlands", correct: "right"},
            {text: "Nigeria", correct: "flase"},
            {text: "USA", correct: "false"}
        ]
    },
    {
        question : "What year did Margaret Thatcher die?",
        answer: [
            {text: "2011" , correct: "flase"} ,
            {text: "2000", correct: "false"},
            {text: "2015", correct: "flase"},
            {text: "2013", correct: "right"}
        ]
    }
]
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answers");
const precedButton = document.getElementById("preced");
const nextButton = document.getElementById("next");
let questionIndex = 0;
let score = 0;
function start(){
    questionIndex = 0;
    score = 0;
    nextButton.innerHTML="next";
    show();
}
function show(){
    let currentQuestion = questions[questionIndex];
    questionElement.innerHTML = currentQuestion.question;
    currentQuestion.answer.forEach(element => {
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}
start();