console.log("Welcome to Blind 75 Day 1");

function TwoSum(arr, target) {
  let myMap = new Map();
  console.log(myMap);
  for (let i = 0; i < arr.length; i++) {
    let x = target - arr[i];
    // If the current number is already in the map, it means we have found a pair
        // Check if the complement (target - current number) exists in the map
    if (myMap.has(x)) {     
      console.log("Accepted/ Correct Answer", [myMap.get(x), i]);
      return [myMap.get(x), i];
    } 
    
    else {
      console.log("Rejected Values", arr[i], i);
      myMap.set(arr[i], i);
    }
  }
}

let arr = [2, 7, 4, 5, 11, 15];
let target = 17;
console.log(TwoSum(arr, target));
