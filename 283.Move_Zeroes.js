// 👉 283. Move Zeroes → Easy
       
//--------------------------------------------------------
// ☑️ How You Explain This in Interview
// - I traverse the array using index i.
// - Whenever I find a 0 at index i,
// - I search for the next non-zero element using another pointer j (j = i + 1).
// - When a non-zero element is found:
// - I swap nums[i] and nums[j]
// - Then I stop searching (break)
// - This pushes the zero towards the right side step by step.

 var moveZeroes = function(nums) {
//  ☑️ Brute force Solution
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] === 0){
            for(let j = i + 1; j < nums.length; j++){
                if(nums[j] != 0){
                    let temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    break;
                }
            }
        }
    }
    return nums;


//    ⏳Time: O(n^2)  📦Space: O(1)
//--------------------------------------------------------
//   ☑️ How You Explain This in Interview
// 	“I use two pointers. Pointer i scans the array, and pointer k tracks where the next 
// 	non-zero element should go. When I find a non-zero value, I swap it with index k and increment k. 
// 	This keeps all non-zero elements in order and moves zeros to the end in one pass.”


//   ☑️ Optimize Solution
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            [nums[i], nums[k]] = [ nums[k], nums[i]];
            k++;
        }
    }
    return nums;


  };
	// ⏳Time: O(n)  📦Space: O(1)
//--------------------------------------------------------
//☑️ Edge Cases.


//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------


