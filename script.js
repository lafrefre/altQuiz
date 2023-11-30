let questions = [
    {
        question: "What does CPU stand for in the context of computers?",
        options: ["Computer Processing Unit", "Compass Processing Unit", "Central Processing Unit", "Complex Processing Unit"],
        correctAnswer: "Central Processing Unit",
    },
    {
        question: "What does GPU stand for in the context of computers?",
        options: ["Graphics Processing Unit", "Gaming Processing Unit", "Gaming Processor Unit", "Gaming Processor Unit"],
        correctAnswer: "Graphics Processing Unit",
    },
    {
        question: "What does RAM stand for in the context of computers?",
        options: ["Random Access Memory", "Random Access Memory", "Random Access Memory", "Random Access Memory"],
        correctAnswer: "Random Access Memory",
    },
    {
        question: "What does URL stand for in the context of web addresses?",
        options: ["Uniform Resource Locator", "User Resource Locator", "Uniform Resource Locator", "User Resource Locator"],
        correctAnswer: "Uniform Resource Locator",
    },
];


let currentQuestionIndex = 0;
let timeRemaining = 60; // Change this to the desired time

function displayQuestion() {
    let question = questions[currentQuestionIndex];
    document.getElementById('question-title').innerText = question.question;
    let buttons = document.querySelectorAll('#answer-buttons .btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = question.options[i];
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // End the quiz
    }
}

function startTimer() {
    let timer = setInterval(function() {
        timeRemaining--;
        document.getElementById('time-remaining').innerText = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            // End the quiz
        }
    }, 1000);
}

window.onload = function() {
    document.getElementById('start-btn').addEventListener('click', function() {
        document.getElementById('quiz-start').style.display = 'none';
        document.getElementById('quiz-questions').style.display = 'block';
        displayQuestion();
        startTimer();
    });
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
};

let buttons = document.querySelectorAll('#answer-buttons .btn');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        // Check if the clicked answer is correct
        if (questions[currentQuestionIndex].options[i] === questions[currentQuestionIndex].correctAnswer) {
            score++;
            buttons[i].classList.add('btn-success');
        } else {
          buttons[i].classList.add('btn-danger');
            timeRemaining -= 10;
        }
    });
}

function resetButtonColors() {
    let buttons = document.querySelectorAll('#answer-buttons .btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = '#756a69'; // Reset the button color
    }
}

function displayQuestion() {
    resetButtonColors();
    let question = questions[currentQuestionIndex];
    document.getElementById('question-title').innerText = question.question;
    let buttons = document.querySelectorAll('#answer-buttons .btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = question.options[i];
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        // End the quiz
    }
}

function startTimer() {
    let timer = setInterval(function() {
        timeRemaining--;
        document.getElementById('time-remaining').innerText = timeRemaining;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            // End the quiz
        }
    }, 1000);
}

window.onload = function() {
    document.getElementById('start-btn').addEventListener('click', function() {
        document.getElementById('quiz-start').style.display = 'none';
        document.getElementById('quiz-questions').style.display = 'block';
        displayQuestion();
        startTimer();
    });
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
};


