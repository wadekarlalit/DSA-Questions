

//------------------------------//
//--- 👉 69. Sqrt(x) → Easy ---//
//-----------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - First I check if x is 0, then I immediately return 0, because the square root of 0 is 0.
// - Then I iterate from i = 0 to x using a for loop.
// - For every number i, I check the square i * i.
// - I want to find the largest number whose square is less than or equal to x.
// - So I check two conditions:
// - i * i <= x
// - (i + 1) * (i + 1) > x
// - If both conditions are true, it means:
// - i² is still within x
// - but (i+1)² becomes greater than x
// - That means i is the correct integer square root, so I return i.
// - If the loop finishes without finding it, I return 1 as a fallback.

//--------------------------------------------------------
//☑️ Brute force Solution
var mySqrt = function (x) {
    if (x === 0) return 0;
    let ans = 0;

    for (let i = 0; i < x; i++) {
        if (i * i <= x && (i + 1) * (i + 1) > x) {
            return i;
        }
    }
    return 1;
}
// ⏳Time: O(x)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Optimize Solution
var mySqrt = function (x) {
    if (x === 0) return 0;

    let ans = 0;
    let left = 0;
    let right = x;

    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        let square = mid * mid;
        if (square == x) return mid;
        else if (square < x) {
            left = mid + 1;
            ans = mid;
        } else {
            right = mid - 1;
        }
    }
    return ans;
};
// ⏳Time: O(log x)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------
