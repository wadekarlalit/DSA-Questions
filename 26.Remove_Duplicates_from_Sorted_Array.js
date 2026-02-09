//-----------------------------------------------//
//--- 26. Remove Duplicates from Sorted Array ---//
//---------------------------------------------- //

//--------------------------------------------------------
// ☑️ How You Explain This in Interview
// - first i check if nums[i] is not equal to nums[j]
// - then move i.
// - inset the nums[j] value in the nums[i]
// - then move j
// - if nums[i] and nums[j] equal then move j
// - return i + 1

// —---------------------------------------------------
var removeDuplicates = function(nums) {
// ☑️ Brute force Solution
    while(j < nums.length){
    if(nums[i] != nums[j]){
        i++;
        nums[i] = nums[j];
        j++;
    } else j++;
    }
    return i + 1;
};
// ⏳Time: O(n)  📦Space: O(1)
//--------------------------------------------------------
// ☑️ How You Explain This in Interview

// —---------------------------------------------------
// ☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.
// nums = [1,1,2] --> [1,2]
// nums = [0,0,1,1,1,2,2,3,3,4] --> [0,1,2,3,4]
// nums = [1,2] --> [1,2]
// nums = [1,1] --> [1]

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------
