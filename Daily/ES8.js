console.log("ES8")


// String.padStart(targetLength [, padString])
let productCost = '1699'.padStart(5, 'x');
console.log(productCost)
console.log(productCost.length);


// Trailing Commas:
// ES8 allows trailing commas in function parameters and array/object literals.

const fruits = ['apple', 'banana', 'orange',]
console.log(fruits);


// Object.entries & Object.values

const user = { name: 'Alice', age: 30 };
const entries = Object.entries(user);
console.log(3,entries); 

const values = Object.values(user);
console.log(3,values); 



// Async & Await

async function fetchData() {
    try {
      const response = await fetch('https://fakestoreapi.com/products/1');
      const data = await response.json();
      console.log(4,data.title);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
//   fetchData();




// Promise Chaining with Async/Await:

async function processUserData(userId) {
  try {
    const users = await  fetch('https://fakestoreapi.com/users/1');
    const products =await fetch('https://fakestoreapi.com/products/1');
    const data1=await users.json();
    const data2= await products.json();
    console.log(data2,data1)
    
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}
processUserData();
