// Explanation
// - First, I am using a brute-force approach.
// - I check every possible pair of elements in the array.
// - For each pair, I check if their sum is equal to the target.
// - For each pair, I check if their sum is equal to the target.
// - If no pair matches, i return -1.
//................................................................
// Pseudo Code
// FUNCTION twoSum(nums, target):
//     n = length of nums
//     FOR i from 0 to n - 1:
//         FOR j from i + 1 to n:
//         IF nums[i] + nums[j] == target:
//             RETURN [i, j]
//     RETURN -1
//--------------------------------------------------------
// Brute force Solution
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length - 1; i++){
        for(j = i + 1; j < nums.length; j++){
            if((nums[i] + nums[j]) === target) return [i, j];
        }
    }
    return -1;
};
