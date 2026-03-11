

//--------------------------------------//
//--- 👉 228. Summary Ranges → Easy ---//
//-------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - The array is already sorted and all numbers are unique.
// - I go through the array one by one.
// - I treat the current number as the start of a range.
// - Then I check if the next number is consecutive (current number + 1).
// - If numbers are consecutive, I keep extending the range.
// - When the sequence breaks (numbers are not consecutive), I store that range in the result.
// - If the range has only one number, I store it as "a".
// - If the range has multiple numbers, I store it as "a->b".
// - Then I start a new range from the next number.

//--------------------------------------------------------
//☑️ Brute force Solution
  var summaryRanges = function(nums) {
    let result = [];

    for(let i = 0; i < nums.length; i++){
        let start = nums[i];

        while(i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) i++;

        let end = nums[i];

        if(start === end){
            result.push(start.toString());
        } else {
            result.push(start + "->" + end)
        }
    }
    return result;
  };
// ⏳Time: O(n)  📦Space: O(n)

//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------

