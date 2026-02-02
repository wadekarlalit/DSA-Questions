var twoSum = function(nums, target) {
    // sudo code
    // i = 0; i < nums.length - 1;
    // j = i + 1; j < nums.length; 
    // if = nums[i] + nums[j] === target then return [i, j]
    // return -1;

    for(let i = 0; i < nums.length - 1; i++){
        for(j = i + 1; j < nums.length; j++){
            if((nums[i] + nums[j]) === target) return [i, j];
        }
    }
    return -1;
};
