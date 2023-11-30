window.onload = function() {
    let highscores = JSON.parse(localStorage.getItem('highscores'));
    if (highscores === null) {
        highscores = [];
    }
    let table = document.getElementById('highscores-table');
    for (let i = 0; i < highscores.length; i++) {
        let row = table.insertRow();
        let initialsCell = row.insertCell();
        let scoreCell = row.insertCell();
        initialsCell.innerText = highscores[i].initials;
        scoreCell.innerText = highscores[i].score;
    }
}

document.getElementById('clear-btn').addEventListener('click', function() {
    localStorage.setItem('highscores', JSON.stringify([]));
    document.getElementById('highscores-table').innerHTML = '';
});

document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href = 'index.html';
}
);