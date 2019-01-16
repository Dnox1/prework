//GAME BATTLESHIP BOARD

var board = [
  [null, null, null, "S", null],
  [null, "S", null, "S", null ],
  ["S", null, null, null, null ],
  [null, "S", null, null, null],
  [null, null, null, null, "S"],
];
console.log(board)
console.log("- - - - - - - - - - - - -")

for (var i = 0; i < 10; i++){
  var row = getRandomNum();
  var column = getRandomNum();

  var randomSquare = board[row][column];

  if (randomSquare === "S"){
    console.log("Hit on: " + row + ", " + column);
    board[row][column] = null;
  }else if (randomSquare !== "S"){
    console.log("Water on: " + row + ", " + column);
  }
}

function getRandomNum(){
  return Math.floor(Math.random() * 5);
}

console.log("- - - - - - - - - - - - -")
console.log(board)

