// function fetchData(apiUrl, callback) {
//     fetch(apiUrl)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         callback(data);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }
  
//   function handleData(data) {
//     console.log(211,data);
//   }
  
//   fetchData('https://fakestoreapi.com/products/1', handleData);
  

// "use strict";
// x=102;
// console.log(11,x)

// function makeAdder(x) {
//   let d=12;
//     return function(y) {
//       return x + y +d;
//     };
//   }
  
//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
//   console.log(add5(1));  // Outputs: 7
//   console.log(add10(2)); // Outputs: 12


// function makeAdder(x) {
//   console.log("x value ",x);
//   return function(y) {
//     console.log("y value "+y);
//     return x + y;
//   };
// }
// console.log(makeAdder(5));
// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2));  // Outputs: 7
// console.log(add10(12)); // Outputs: 12

// By value (primitives)
// let a = 5;
// let b;
// b = a;
// a = 3;
// console.log(a); // Outputs: 3
// console.log(b); // Outputs: 5


// By reference (all objects (including functions))
// let a = { greeting: 'Welcome' };
// let b;
// b = a;
// // Mutating the value of c
// b.greeting = 'Welcome to geeks for geeks';
// console.log(a); // Outputs: {greeting: 'Welcome to geeksforgeeks'}
// console.log(b); // Outputs: {greeting: 'Welcome to geeksforgeeks'}


// let employee = {
//   eid: "E102",
//   ename: "Jack",
//   eaddress: "New York",
//   salary: 50000
// }

// console.log("=========Deep Copy========");

// let newEmployee = JSON.parse(JSON.stringify(employee));

// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

// console.log("---------After modification---------");

// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;

// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

// const myPromise = new Promise(function (resolve, reject){
//   setTimeout(function() { resolve("I love You !!"); }, 3000);
// });


// myPromise.then(function(value){
//   console.log(value)
// })





