//Best Time To Buy And Sell Stock
console.log("Welcome to Blind 75 Day 2");
var arr1 = [7, 1, 5, 3, 6, 4];
// const arr1=[7,6,4,3,1];
var bestProfit = function (arr) {

    let min=arr[0];
    let max=0;
    for (let i = 0; i < arr.length; i++) {
        min=Math.min(arr[i],min);
        max=Math.max(max,arr[i]-min)
    }
    return max;
};
console.log(bestProfit(arr1));
