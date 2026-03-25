

//-------------------------------------//
//--- 👉 27. Remove Element → Easy ---//
//------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// Pattern → Two Pointers
// Partition - Separate valid vs invalid
// I am using two pointers approach.
// i starts from beginning, j starts from end.
// My goal is to keep all valid elements (not equal to val) in the front.
// I iterate while i <= j:
// If nums[i] is valid → I move i forward.
// If nums[i] equals val, I try to replace it:
// If nums[j] is also val, I skip it by moving j backward.
// Otherwise, I swap nums[i] and nums[j], then move both pointers.
// At the end, all valid elements are in the first i positions.
// So I return i as the count of valid elements.

//--------------------------------------------------------
//☑️ Brute force Solution

//--------------------------------------------------------
//☑️ Optimize Solution
var removeElement = function (nums, val) {
    let i = 0
    let j = nums.length - 1;


    while (i <= j) {
        if (nums[i] !== val) {
            i++
        } else {
            if (nums[j] === val) {
                j--
            } else {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
                j--;
            }
        }
    }
    return i;
};
// ⏳Time: O(n)  📦Space: O(1)
//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------
