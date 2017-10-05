// function range(min, max) {
//     var arr = [];
//     for (var i = min; i <= max; i++) {
//         arr.push(i);
//     }
//     return arr;
// }


// function sumArr(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// function sumOfRange(min, max) {
//     // var arr = range(min, max)
//     // var sum = sumArr(arr)
//     return sumArr(range(min, max));
// }


// console.log(sumOfRange(1, 5)); // Logs 15 (i.e. 1+2+3+4+5);

// ===========================================================

// function add1(num){
//     return num + 1;
// }

// function add2(num){
//     return add1(add1(num))
// }

// function add3(num){
//     return add2(add1(num))
// }

// function add4(num){
//     return add2(add2(num))
// }

// function add5(num){
//     return add4(add1(num))
// }

// function add8(num){
//     return add5(add3(num))
// }

// console.log(add8(10)+add1(1))

// ===========================================================

// Create two functions: double and square. double should take a number and return the number times two. square should take a number and return the number squared. Create a third function doubleSquare that uses both of the functions to return a number that is first doubled and then squared.

// function double (num){
//     return num * 2;
// }

// function square(num){
//     return Math.pow(num, 2);
// }

// function doubleSquare(num){
//     return square(double(num));
// }
// console.log(doubleSquare(4))

// ===========================================================

// Create a function classyGreeting that takes as input the strings firstName  and lastName , and returns a string with a greeting using the two. Create a second function yell  that takes as input as string and returns the string in all capitalized letters. Create a third function yellGreeting  that will take the firstName  and lastName  as inputs and yell a greeting using the two.

// function classyGreeting(firstName, lastName){
//     return firstName + ' ' + lastName;
// }

// function yell(str){
//     return str.toUpperCase();
// }

// function yellGreeting(firstName, lastName){
//     return yell(classyGreeting(firstName, lastName));
// }
// console.log(yellGreeting('Aiden','Shih'));

// ===========================================================

// The concat (Links to an external site.)Links to an external site. array method is used to merge two (or more) arrays. Write a removeDupes function that takes an array as an argument and returns a copy without any duplicate elements. Then, write a function concatAndRemoveDupes  that combines two arrays and removes any duplicates.

// Hint: Use the array method includes (Links to an external site.)Links to an external site. to check if an element is in an array.

function removeDupes(arr) {
    var ans = [];
    var a = arr.filter(function(el) {
    if (ans.includes(el) === false)
     ans.push(el);
    });
    return ans;
   }
   
   function concatAndRemoveDupes(arr1, arr2) {
    return removeDupes(arr1.concat(arr2));
   }

   \

   var spinner = '/-\\|'
   var i = 0;

   setInterval()