

//--------------------------------------//
//--- 👉 268. Missing Number → Easy ---//
//-------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - Sort the array.
// - After sorting, index and value should match.
// - The first mismatch index is the missing number.

//--------------------------------------------------------
//☑️ Brute force Solution
  var missingNumber = function(nums) {
    for(let i = 0; i < nums.length - 1; i++){
        for(let j = 0; j < nums.length - i - 1; j++){
            if(nums[j] > nums[j + 1]){
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
 
    for(let i = 0; i <= nums.length; i++){
        if(i != nums[i]) return i;
    }
// ⏳Time: O(n^2)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Optimize Solution
    // let n = nums.length;
    // let expectedSum = n * (n + 1) / 2;
    // let actualSum = 0;


    // for(let num of nums){
    //     actualSum += num;
    // }
    // return expectedSum - actualSum;
};
// ⏳Time: O(n)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------

