const arr= [1,2,4,3,5,5];

const checkDuplicateArray = (arr) => {
    const newSet= new Set();

    for(let i=0; i<arr.length; i++){
            if(newSet.has(arr[i])){
                return true;
            }
            else {
                newSet.add(arr[i]);
            }
    }
    return false;
    console.log(1000, newSet);
}

console.log(111, checkDuplicateArray(arr));



// newSet.has(num)   =>	O(1) ✅
// newSet.add(num)   =>	O(1) ✅
// Total Complexity  =>	O(n) ✅
// Space Complexity  => O(n) ✅