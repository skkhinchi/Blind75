const ProductOfArray=(arr) =>{
    let result=1;
    for(let i=0; i<arr.length; i++){
        result*=arr[i];
    }
    return result;
}
const newArr=[1,2,3,4,5];
console.log(ProductOfArray(newArr));