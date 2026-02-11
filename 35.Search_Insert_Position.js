
//---------------------------------------//
//--- 👉 35. Search Insert Position  ---//
//------------------------------------- //

//--------------------------------------------------------
//☑️ How You Explain This in Interview
	// - first i iterate over loop 0 to nums.length.
	// - then i check nums[i] is >= target
	// - then return ith index
	// - if condition is not satisfy and complete the loop then return directly nums.length

//--------------------------------------------------------
//☑️ Brute force Solution
     var searchInsert = function(nums, target) {
          for(let i = 0; i < nums.length; i++){
        if(nums[i] >= target){
            return i;
        }
    }
    return nums.length;
};
	// ⏳Time: O(n)  📦Space: O(1)
//--------------------------------------------------------
//☑️ Optimize Solution
	
//--------------------------------------------------------
//☑️ Edge Cases.


//--------------------------------------------------------
//☑️ Real Life example
//--------------------------------------------------------
