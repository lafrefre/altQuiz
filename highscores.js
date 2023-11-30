function saveHighScores() {
    const name = nameInput.value;
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    const newScore = {
        name: name,
        score: Score,
    };
    highScores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.href = "highscores.html";
}

