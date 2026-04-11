

//----------------------------------------------------//
//--- 👉 374. Guess Number Higher or Lower → Easy ---//
//---------------------------------------------------//

// 👉 Patterns-8 → Binary Search on Answer (Parametric Search)
// 📌 When to use: When answer lies in a range, not in array directly (e.g. minimize max pages, aggressive cows).
// 📌 जब उत्तर सीधे ऐरे में नहीं, बल्कि किसी रेंज में ढूंढना हो।

//--------------------------------------------------------
  var guessNumber = function(n) {
    let left = 1;        // 🔹 range starts from 1
    let right = n;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let res = guess(mid);

        if (res === 0) {
            // 🎯 Found the number
            return mid;
        }
        else if (res === -1) {
            // 🔴 mid is too high → go LEFT
            right = mid - 1;
        }
        else {
            // 🟢 mid is too low → go RIGHT
            left = mid + 1;
        }
    }
    return -1; // (just for safety, ideally never reached)
  };

// ⏳Time: O(log n)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Edge Cases

//--------------------------------------------------------
//☑️ Real Life example
