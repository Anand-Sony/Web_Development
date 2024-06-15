let wins = 0;
let losses = 0;
const choices = ['stone', 'paper', 'Scissors'];
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return 'Tie';
	} else if (
		(playerChoice === 'stone' && computerChoice === 'Scissors') ||
		(playerChoice === 'Scissors' && computerChoice === 'paper') ||
		(playerChoice === 'paper' && computerChoice === 'stone')
	) {
		return 'Player';
	} else {
		return 'Computer';
	}
}

function playGame(playerChoice) {
	const computerChoice = getComputerChoice();
	const winner = determineWinner(playerChoice, computerChoice);

	if (winner === 'Player') {
		resultDiv.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
		wins++;
	} 

    else if (winner === 'Computer') {
		resultDiv.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
		losses++;
	} 
    
    else {
		resultDiv.textContent = 'It\'s a tie!';
	}

	scoreDiv.textContent = `Wins: ${wins} Losses: ${losses}`;
}

document.getElementById('start').addEventListener('click', () => {
	document.getElementById('start').style.display = 'none';
	document.getElementById('choices').style.display = 'block';
});

document.getElementById('stone').addEventListener('click', () => playGame('stone'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
document.getElementById('exit').addEventListener('click', () => {
	document.getElementById('start').style.display = 'block';
	document.getElementById('choices').style.display = 'none';
	resultDiv.textContent = '';
	scoreDiv.textContent = 'Wins: 0 Losses: 0';
	wins = 0;
	losses = 0;
});