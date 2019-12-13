const playerFactory = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;
  return { getName, getSymbol };
};

const gameFactory = () => {
  let boardArray = [['', '', ''], ['', '', ''], ['', '', '']];
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
  };

  const isWinner = () => {
    let finished = false;
    ['00-01-02', '10-11-12', '20-21-22',
      '00-10-20', '01-11-21', '02-12-22',
      '00-11-22', '20-11-02'].forEach((move) => {
      const line = move.split('-');
      if (boardArray[line[0][0]][line[0][1]] === boardArray[line[1][0]][line[1][1]]
        && boardArray[line[1][0]][line[1][1]] === boardArray[line[2][0]][line[2][1]]
        && boardArray[line[0][0]][line[0][1]] !== '') {
        finished = true;
      }
    });
    return finished;
  };

  const isDraw = () => !boardArray.some(l => l.includes(''));

  const finish = (type) => {
    if (type === 'draw') {
      alert('game finished, its a draw');
    } else {
      alert(`game finished, ${player[turn].getName()} won.`);
    }
  };

  const sendmessage = () => {
    const msg = `<p>${player[turn].getName()} is your turn! </p>`;
    document.getElementById('message').innerHTML = msg;
  };

  const play = (move) => {
    boardArray[move[0]][move[1]] = player[turn].getSymbol();
    renderBoard();
    if (isWinner()) {
      finish('win');
    } else if (isDraw()) {
      finish('draw');
    } else {
      turn = turn === 0 ? 1 : 0;
      sendmessage();
    }
  };

  const start = () => {
    player[0] = playerFactory(document.getElementById('player1').value, 'X');
    player[1] = playerFactory(document.getElementById('player2').value, 'O');
    document.getElementById('start').style.display = 'none';
    document.getElementById('restart').style.display = 'block';
    document.getElementById('board').style.display = 'block';

    renderBoard();
    sendmessage();
  };

  const restart = () => {
    boardArray = [['', '', ''], ['', '', ''], ['', '', '']];
    turn = 0;
    document.getElementById('start').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('board').style.display = 'none';
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
    document.getElementById('message').innerHTML = '';
    renderBoard();
  };

  return {
    start, renderBoard, play, restart,
  };
};

const game = gameFactory();
game.renderBoard();

// TODO: Show the board and the turn player "Player X turn"
// TODO: game.reset (private)
// TODO: style the board + row + col + diagonal visual
