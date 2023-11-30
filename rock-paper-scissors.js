let userScore = 0;
let computerScore = 0;

    function play(userChoice) {
      const choices = ['rock', 'paper', 'scissors'];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      const result = determineWinner(userChoice, computerChoice);
      displayResult(result, userChoice, computerChoice);
      updateScore(result);
    }

    function determineWinner(user, computer) {
      if (user === computer) {
        return 'draw';
      } else if ((user === 'rock' && computer === 'scissors') ||
                 (user === 'paper' && computer === 'rock') ||
                 (user === 'scissors' && computer === 'paper')) {
        return 'win';
      } else {
        return 'lose';
      }
    }

    function displayResult(result, user, computer) {
      const resultDisplay = document.getElementById('results');

      if (result === 'draw') {
        resultDisplay.value = `Computer choose ${computer}. It\'s a DRAW!`;
      } else if (result === 'win') {
        resultDisplay.value = `Computer choose ${computer}. You WIN! 🎉`;
      } else {
        resultDisplay.value = `Computer choose ${computer}. You LOSE! 👻`;
      }
    }

    function updateScore(result) {
      const scoreDisplay1 = document.getElementById('score12');
      const scoreDisplay2 = document.getElementById('score123');

      if (result === 'win') {
        userScore++;
      } else if (result === 'lose') {
        computerScore++;
      }

      scoreDisplay1.value = `${userScore}`;
      scoreDisplay2.value = `${computerScore}`;
    }

    function reset() {
      userScore = 0;
      computerScore = 0;
      document.getElementById('score12').value = ' ';
      document.getElementById('score123').value = ' ';
      document.getElementById('results').value = '';
    }