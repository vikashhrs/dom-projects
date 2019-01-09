let min = 1,
    max = 10,
    winning_num = Math.ceil(Math.random() * max + 1),
    guessesLeft = 3;

const game = document.querySelector("#game"),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    playAgainBtn = document.querySelector('#play-again-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

playAgainBtn.addEventListener('click', function(e) {
    location.reload();
})

guessBtn.addEventListener('click', function(e) {
    let guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    if (guess === winning_num) {
        toggleButtons(true);
        gameOver(true, `${winning_num} is correct, You WIN!`)
    } else {
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            toggleButtons(true);
            gameOver(false, `Game Over, You Lost! The correct number was ${winning_num}.`)
        } else {
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} attempts left!`, 'red');
        }
    }
})

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg) {
    let color = won ? 'green' : 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    setMessage(msg, color);
}

function toggleButtons(flag) {
    playAgainBtn.style.display = flag ? 'inline' : 'none';
    guessBtn.style.display = flag ? 'none' : 'inline';
}