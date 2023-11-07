const startBtn = document.getElementById("start-btn");
const qzForm = document.getElementById("qz-form");
const question = document.getElementById("question");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const score = document.getElementById("score");
const highScoreForm = document.querySelector(".high-score-form");
const nameInput = document.getElementById("name-input");
const submitBtn = document.getElementById("submit-btn");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    startBtn.style.display = "none";
    qzForm.style.display = "block";
    showQuestion();
}