// given code

// sayHello();
// function sayHello() {
//   console.log("Hello");
// }
// sayHi();
// var sayHi = function () {
//   console.log("Hi");
// };

// predicted output

// Hello
// TypeError: sayHi is not a function

// explanation

// sayHello is a function declaration hence it is fully hoisted.
// sayHi is a function expression with var=>only the variable is hoisted (as undefined), so calling it before assignment fails.
