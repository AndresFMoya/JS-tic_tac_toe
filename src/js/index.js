const gameFactory = () => {
  const boardArray = [['', '', ''], ['', '', ''], ['', '', '']];
  let player1 = undefined;
  let player2 = undefined;

  const renderBoard = () => {
    boardArray.forEach((row, rowIndex) => {
      row.forEach((cellValue, columnIndex) => {
        document.querySelector('#board')
          .querySelector(`.board-row:nth-child(${rowIndex + 1}`)
          .querySelector(`.board-cell:nth-child(${columnIndex + 1}`)
          .innerHTML = cellValue;
      });
    });
  }

  const startGame = () => {
    player1 = playerFactory(document.getElementById('player1').value, 'X');
    player2 = playerFactory(document.getElementById('player2').value, 'O');
  }

  return { renderBoard, startGame };
};

const playerFactory = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
}

const game = gameFactory();
game.renderBoard();
// console.log(game.boardArray)
