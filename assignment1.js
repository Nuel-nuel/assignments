/**
 * Perform the following math operations using JavaScript's Math object ONLY
 * 1. Round `pie` to the nearest integer
 * 2. Round 9.81 down to 9
 * 3. Round 34.004 up to 35
 * 4. Return the max value among these numbers: (-5, 3, 20, 4, 5, 10)
 * 5. Create a random number between 1 and 10
 * 6. Find the square root of 169
 * 7. Find the value of 6 raised to power 3
 *
 * BONUS:
 * - Create and deploy a web page that generates a random Nigerian phone number in the +234 format.
 
**/
let pie = Math.PI;

//1. 

pie = Math.round(pie);

console.log(pie);

//2. 

nine = Math.floor(9.81);

console.log(nine);

//3. 

num3 = Math.ceil(34.004);

console.log(num3);

//4. 

maximum = Math.max(-5, 3, 20, 4, 5, 10);

console.log(maximum);

//5. 

rand = Math.random(1, 10);

console.log(rand);

//6. 
 
square_root = Math.sqrt(169);

console.log(square_root);

//7.

value = Math.pow(6,3);

console.log(value);

