//----------------------------------//
//--- 👉 217. Contains Duplicate → Easy ---//
//----------------------------------//

var containsDuplicate = function(nums) {
    // - first i am using a brute force approach
    // - i take 1st element and check next element line by line.
    // - for each pair i check first element is equl to the current element.
    // - if find equl element then return true
    // - otherwise return false.

    // - this brute force approach is works, but it is not optimal solution.
    // - so we can optimize using a ___ to reduce the time complexity to O(n) 

    // for(let i = 0; i < nums.length - 1; i++){
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(nums[i] === nums[j]) return true;
    //     }
    // }
    // return false;

    // time: O(n^2)
    // space: O(1)
//--------------------------------------------
    // let i = 0, j = i + 1;
    // while(i < nums.length - 1){
    //     if(nums[i] === nums[j]) return true;
    //     j++;
    //     if(j >= nums.length) {
    //         i++;
    //         j = i + 1;
    //     }
    // }
    // return false
    // time: O(n^2)
    // space: O(1)
//........................................................
    let set = new Set();
    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])) return true;
        set.add(nums[i])
    }
    return false;
    // time: O(n)
    // space: O(n)
};