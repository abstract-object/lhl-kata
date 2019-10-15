const generateBoard = function(queen1, queen2) {
  var board = [];

  for (var i = 0; i < 8; i++) {
    board.push([]);
    for (var j = 0; j < 8; j++) {
      if ((j === queen1[0] && i === queen1[1]) || (j === queen2[0] && i === queen2[1])) {
        board[i].push("1");
      }
      else {
        board[i].push("0");
      }
    }
  }
  return board;
};

const queenThreat = function(board) {
  queens = [];

  for (var k = 0; k < 8; k++) {
    for (var l = 0; l < 8; l++) {
      if (board[k][l] === "1") {
        queens.push([k, l]);
      }
    }
  }

  if (queens[0][0] === queens[1][0] || queens[0][1] === queens[1][1]) {
    return true;
  }
  else if (Math.abs(queens[0][0] - queens[1][0]) === Math.abs(queens[0][1] - queens[1][1])) {
    return true;
  }
  else {
    return false;
  }
};

let whiteQueen = [0, 0];
let blackQueen = [7, 5];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard)
console.log(queenThreat(generatedBoard));