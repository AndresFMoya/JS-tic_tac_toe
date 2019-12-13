const playerFactory = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
}

const gameFactory = () => {
  const boardArray = [['', '', ''], ['', '', ''], ['', '', '']];
  const player = [];
  let turn = 0;

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

  const isGameFinished = () => {
    ['00-01-02', '10-11-12', '20-21-22',
      '00-10-20', '01-11-21', '02-12-22',
      '00-11-22', '20-11-02'].forEach((move) => {
        let line = move.split("-")
        if (boardArray[line[0][0]][line[0][1]]=== boardArray[line[1][0]][line[1][1]] &&
            boardArray[line[1][0]][line[1][1]]=== boardArray[line[2][0]][line[2][1]]) {
          return true
      }
    });
    return false
  }

  const play = (move) => {
    console.log('play')
    boardArray[move[0]][move[1]] = player[turn].getSymbol();
    turn = turn === 0 ? 1 : 0;
    renderBoard();
    isGameFinished();
    isGameDraw();
  }

  const isGameDraw = () => {
    if (boardArray.includes("")) {
      return false
    }
    else {
      alert ("It's a draw")
      return true
    }
  }

  const startGame = () => {
    player[0] = playerFactory(document.getElementById('player1').value, 'X');
    player[1] = playerFactory(document.getElementById('player2').value, 'O');
    renderBoard();
  }

  return { startGame, renderBoard, play };
};


const game = gameFactory();
game.renderBoard();
// console.log(game.boardArray)

// TODO: At first show only player names input and button to start game
// TODO: Show the board and the turn player "Player X turn"
// TODO: make the cells on the board clickable
// TODO: have a game.play(player, cell) method
// TODO: method to check if game is over (row, cols, diagonal or draw)
// TODO: game.finish method "Congratulations Player X you win" + play again button > Player names
// TODO: game.reset (private)
// TODO: style the board + row + col + diagonal visual
