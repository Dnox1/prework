// OK Print the numbers 1 through 50.
// If the number is divisible by 7, you must skip the next number.
/*for (var i = 1; i <= 50; i++){
  if (i % 7 === 0) { continue; }
  console.log (i+1);
}

// OK If the number is divisible by 10 or 15, you must print “Donkey!”.
/*for (var i = 1; i <= 50; i++){
  if (i % 10 === 0 || i % 15 === 0 )
    console.log("Donkey!");
 else console.log (i);
}*/

// OK If the number is not divisible by 2 and the previous number is divisible by 10, you must print “Monkey!”.
/*for (var i = 0; i <= 50; i++){
  if (i % 2 !== 0 && (i-1) % 10 === 0 )
   console.log("Monkey!"); 
   else console.log (i);
}*/



/*var i = 1;
while (i <= 50){
   if (i % 7 === 0) {i +=1 }
   else console.log(i); 
} */

/*for (var i = 1; i <= 50; i++){
  if (i % 7 === 0) { continue;(i+1) }
  if (i % 2 !== 0 && (i-1) % 10 === 0 )
    console.log("Monkey!");
   if (i % 10 === 0 || i % 15 === 0 )
    console.log("Donkey!");
 else console.log (i+1);
}*/

/*for (var i = 0; i <= 50; i++){
  if (i % 7 === 0) { continue; }

 else console.log (i+1);
  
  if (i % 10 === 0 || i % 15 === 0 )
   console.log("Donkey!");

  if (i % 2 !== 0 && (i-1) % 10 === 0 )
   console.log("Monkey!");
 
}*/

/* SUM 
var sum = 0;
var numbers = [2, 3, 6, 1, 7, 10];

for(i = 0; i < numbers.length; i++){
  var sum = sum + numbers[i] }

// Log the sum
console.log(sum);
*/

/* AVERAGE
var sum = 0;
var numbers = [1, 7, 4, 11, 16, 10];

for ( var i = 0; i < numbers.length; i++){
  var sum = sum + numbers[i]// Add each number in the array to the sum
}
var average = sum/i
 
console.log(average);
console.log(sum);
console.log(i);
*/

/*BIGGER

var currentLargest = null;
var numbers = [10, 16, 99, 0, 52, 41, 7];

for ( i = 0; i < numbers.length; i++){
  if ( currentLargest < numbers[i] )
   var currentLargest = numbers[i];
  { continue } ;
  // if ( current number is greater than the currentLargest ){
  //    it is the new largest
  // } 
}
    
// 
console.log("The largest number is: " + currentLargest);
console.log(i);
*/