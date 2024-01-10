// Find Minimum in Rotated Sorted Array

console.log("Welcome to Blind 75 Day 3");

const findMin = (nums)=> {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return nums[left];
};

// Example usage:
const nums = [3, 4, 5, 1, 2];
console.log(findMin(nums)); // Output: 0
