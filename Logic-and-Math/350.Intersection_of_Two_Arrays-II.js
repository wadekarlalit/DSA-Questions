


//-----------------------------------------------------//
//--- 👉 350. Intersection of Two Arrays II → Easy ---//
//----------------------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// 1️⃣ Create two HashMaps	
// - freq1 → stores frequency of numbers from nums1	
// - freq2 → stores frequency of numbers from nums2	
// - We use frequency because duplicates matter in this problem.

// 2️⃣ Create result array
// - This will store the final intersection elements.

// 3️⃣ Count frequency of nums1

// 4️⃣ Count frequency of nums2

// 5️⃣ Loop through freq1

// 6️⃣ Check if number exists in freq2
// - If number is not present in nums2 → skip it.
// - If present → find common count.

// 7️⃣ Find minimum frequency
// - We take minimum because:
// - A number can appear in result only as many times as it appears in both arrays.
// - So we take smaller frequency.
// - Common count = min(3,2) = 2

// 8️⃣ Add number minCount times into result
// - If minCount = 2, we push number twice.

//--------------------------------------------------------
//☑️ Brute force Solution
var intersect = function(nums1, nums2) {
    let freq1 = new Map();
    let freq2 = new Map();
    let result = [];

    for(let num of nums1){
        freq1.set(num, (freq1.get(num) || 0) + 1);
    }

    for(let num of nums2){
        freq2.set(num, (freq2.get(num) || 0) + 1);
    }

    for(let [num, count1] of freq1){
        if(freq2.has(num)){
            let count2 = freq2.get(num);
            let minCount = Math.min(count1, count2);


            for(let i = 0; i < minCount; i++){
                result.push(num)
            }
        }
    }
    return result;
};
// ⏳Time: O(n + m)  📦Space: O(n + m)

//--------------------------------------------------------
//☑️ Optimize Solution
	
//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------
