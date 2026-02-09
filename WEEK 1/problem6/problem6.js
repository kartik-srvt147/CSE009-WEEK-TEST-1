// given code
// console.log(a);
// console.log(b);
// var a = 10;
// let b = 20;
// function test() {
//   console.log(c);
//   var c = 30;
// }
// test();

// 1. undefined
//    throws a reference error
// 2. console.log(a) shows undefined because "a" is "var" variable and by default they are assigned undefined. console.log(b) on the other hand will throw a reference error as it is a "let" variable which is not initalized by default. console.log(c) shows undefined because again, it is a "var" variable and by default are initialized as undefined

// 3. console.log(b);

// correct code:
var a = 10;
let b = 20;

console.log(a);
console.log(b);

function test() {
  var c = 30;
  console.log(c);
}

test();
