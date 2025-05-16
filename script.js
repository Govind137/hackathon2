let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    // Animate result fade-out
    document.getElementById('user-choice').classList.remove('show');
    document.getElementById('computer-choice').classList.remove('show');
    document.getElementById('winner').classList.remove('show');
    setTimeout(() => {
        document.getElementById('user-choice').textContent = `Your Choice: ${capitalize(userChoice)}`;
        document.getElementById('computer-choice').textContent = `Computer's Choice: ${capitalize(computerChoice)}`;
        const winner = getWinner(userChoice, computerChoice);
        if (winner === 'user') {
            userScore++;
            document.getElementById('winner').textContent = 'Winner: You!';
            document.getElementById('winner').style.color = '#28a745';
            animateScore('user-score');
        } else if (winner === 'computer') {
            computerScore++;
            document.getElementById('winner').textContent = 'Winner: Computer!';
            document.getElementById('winner').style.color = '#dc3545';
            animateScore('computer-score');
        } else {
            document.getElementById('winner').textContent = 'Winner: Draw!';
            document.getElementById('winner').style.color = '#ffc107';
        }
        document.getElementById('user-score').textContent = userScore;
        document.getElementById('computer-score').textContent = computerScore;
        // Animate result fade-in
        document.getElementById('user-choice').classList.add('show');
        document.getElementById('computer-choice').classList.add('show');
        document.getElementById('winner').classList.add('show');
    }, 200);
}

function animateScore(id) {
    const el = document.getElementById(id);
    el.classList.add('bounce');
    setTimeout(() => el.classList.remove('bounce'), 350);
}

function getWinner(user, computer) {
    if (user === computer) return 'draw';
    if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        return 'user';
    }
    return 'computer';
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}