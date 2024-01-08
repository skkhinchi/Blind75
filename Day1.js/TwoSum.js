function TwoSum(arr,target) {
    let myMap =  new Map();
    console.log(myMap);
    for(let i=0;i<arr.length;i++)
    {
        let x= target-arr[i];
        if(myMap.has(x)){
            return [i,myMap.get(x)]
        }
        else {
            myMap.set(arr[i],i)
        }

    }
}

let arr= [2,7,11,15];
console.log(TwoSum(arr,9));