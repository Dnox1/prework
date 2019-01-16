// EXERCISE FUNCTIONS

function sumNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

function subtractNumbers(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiplyNumbers(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function divideNumbers(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

function calculator(numberOne, numberTwo, operation) {
   
  if ( operation === "addition") {
  console.log("The result is " + sumNumbers(numberOne,numberTwo));
  }   
  if ( operation === "subtraction") {
  console.log("The result is " + subtractNumbers(numberOne,numberTwo));
  } 
  if ( operation === "multiplication") {
  console.log("The result is " + multiplyNumbers(numberOne,numberTwo));
  } 
  if ( operation === "division")  
  console.log("The result is " + divideNumbers(numberOne,numberTwo));
}

calculator (2,3,"division");
