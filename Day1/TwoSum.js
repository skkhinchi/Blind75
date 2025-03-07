console.log("Welcome to Blind 75 Day 1");

function TwoSum(arr,target) {
    let myMap =  new Map();
    console.log(myMap);
    for(let i=0;i<arr.length;i++)
    {
        let x= target-arr[i];
        if(myMap.has(x)){
            return [myMap.get(x),i]
        }
        else {
            myMap.set(arr[i],i)
        }

    }
}

let arr= [2,7,4,5,11,15];
let target =17;
console.log(TwoSum(arr,target));