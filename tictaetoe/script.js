function gameController(initialPlayer, playerList) {
  let gameActive = true;
  let currentPlayer = initialPlayer;

  let gameState = [...Array(9).fill('')];
  const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const winningMsg = user => `Player ${user} has won`;
  const drawMsg = () => `Game ended in a draw`;
  const currentPlayerTurn = user => `It's ${user}'s turn`;

  return {
    display: null,
    initial(element) {
      this.display = element;
      this.updateDisplay(currentPlayerTurn(currentPlayer));
    },
    handleCellPlayed(clickedCell, clickedCellIdx) {
      gameState[clickedCellIdx] = currentPlayer;
      clickedCell.innerHTML = currentPlayer;
    },
    handlePlayerChange() {
      currentPlayer = playerList.find(player => player !== currentPlayer);
      this.updateDisplay(currentPlayerTurn(currentPlayer));
    },
    handleResultValidation() {
      let roundWon = false;
      for (let i = 0; i < winningCondition.length; i++) {
        const winCondition = winningCondition[i];
        const currentState = gameState.filter((_, i) =>
          winCondition.includes(i)
        );
        const matched = currentState.every(state => state === currentPlayer);
        if (matched) {
          roundWon = matched;
          break;
        }
      }

      if (roundWon) {
        this.updateDisplay(winningMsg(currentPlayer));
        gameActive = false;
        return;
      }

      const roundDraw = !gameState.includes('');
      if (roundDraw) {
        this.updateDisplay(drawMsg());
        gameActive = false;
        return;
      }

      this.handlePlayerChange();
    },
    handleCellClick(event) {
      event.preventDefault();
      const clickedCell = event.target;
      const clickedCellIdx = parseInt(
        clickedCell.getAttribute('data-cell-index')
      );

      if (gameState[clickedCellIdx] !== '' || !gameActive) {
        return;
      }

      this.handleCellPlayed(clickedCell, clickedCellIdx);
      this.handleResultValidation();
    },
    handleRestartGame() {
      gameActive = true;
      currentPlayer = initialPlayer;
      gameState = [...Array(9).fill('')];
      this.updateDisplay(currentPlayerTurn(initialPlayer));
    },
    updateDisplay(msg) {
      if (!this.display) return;
      this.display.innerHTML = msg;
    }
  };
}

const game = gameController('X', ['X', 'O']);

game.initial(document.querySelector('.game--status'));

document
  .querySelectorAll('.cell')
  .forEach(cell =>
    cell.addEventListener('click', game.handleCellClick.bind(game))
  );
document.querySelector('.game--restart').addEventListener('click', event => {
  event.preventDefault();
  game.handleRestartGame();
  document.querySelectorAll('.cell').forEach(cell => (cell.innerHTML = ''));
});
