// Grid without obstacles
var grid = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null]
];
console.log(grid);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -");
// Vars to movement
var x = 0; // row 
var y = 0; // column
var row = grid[x];
var column = row[y];

// Rover Object Goes Here
var rover ={
  direction: "N",
  // "S", "E", "W"
}
console.log("rover initial situation is " + "row " + x + ", column " + y);
console.log("rover initial direction is " + rover.direction);
console.log(" ");
// ======================
function turnLeft(rover){
  
  if (rover.direction === "N") {(y--);
    rover.direction = "W"
  } else 
  if (rover.direction === "E") {(x--)
    rover.direction = "N"
  } else
  if (rover.direction === "S") {
    rover.situation = grid[x][y++]
    rover.direction = "E"
  } else
  if (rover.direction === "W") {
    rover.situation = grid[x++][y]
    rover.direction = "S"
  } 
  console.log("turnLeft was called!");  
  console.log("rover actual situation is " + "row " + x + ", column " + y);
  console.log("rover actual direction is " + rover.direction);
}
 function turnRight(rover){
  
  if (rover.direction === "N") {(y++);
    rover.direction = "E"
  } else 
  if (rover.direction === "E") {(x++)
    rover.direction = "S"
  } else
  if (rover.direction === "S") {
    rover.situation = grid[x][y--]
    rover.direction = "W"
  } else
  if (rover.direction === "W") {
    rover.situation = grid[x--][y]
    rover.direction = "N"
  } 
  console.log("turnRight was called!");  
  console.log("rover actual situation is " + "row " + x + ", column " + y);
  console.log("rover actual direction is " + rover.direction);
}
function moveForward(rover){
   if (rover.direction === "N") {(x--);
    rover.direction = "N"
  } else 
  if (rover.direction === "E") {(y++)
    rover.direction = "E"
  } else
  if (rover.direction === "S") {
    rover.situation = grid[x++][y]
    rover.direction = "S"
  } else
  if (rover.direction === "W") {
    rover.situation = grid[x][y--]
    rover.direction = "W"
  } 
  console.log("moveForward was called!");  
  console.log("rover actual situation is " + "row " + x + ", column " + y);
  console.log("rover actual direction is " + rover.direction);
}
// ORDERS OF MOVEMENT - Create a function that receives a list of commands. These commands will be the first letter of either (f)orward, (r)ight, or (l)eft.
function commandsList(ordersToRover) {
  console.log("Orders to execute: " + ordersToRover.length);
  var order = ordersToRover[o];
  
  for (var o = 0; o < ordersToRover.length; o++){
    console.log(ordersToRover[o]);
    if (ordersToRover[o] === "f") {
      moveForward(rover);
    } else 
    if (ordersToRover[o] === "r") {
      turnRight(rover);
    } else 
    if (ordersToRover[o] === "l") {
      turnLeft(rover);
    }
  console.log(" ");
  }
}
commandsList("rffrfflfrff")

/*To test it, use the string: ‘rffrfflfrff’.
turnRight(rover);
moveForward(rover);
moveForward(rover);
turnRight(rover);
moveForward(rover);
moveForward(rover);
turnLeft(rover);
moveForward(rover);
turnRight(rover);
moveForward(rover);
moveForward(rover);
*/