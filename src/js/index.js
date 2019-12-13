const gameFactory = () => {
  const boardArray = [['', '', ''], ['', '', ''], ['', '', '']];

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
  return { renderBoard };
};

const game = gameFactory();
game.renderBoard();
// console.log(game.boardArray)
