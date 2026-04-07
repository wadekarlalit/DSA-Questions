

//--------------------------------------//
//--- 👉 326. Power of Three → Easy ---//
//-------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview

//--------------------------------------------------------
//☑️ Brute force Solution
// Recursion solution
var isPowerOfThree = function (n) {
    if (n <= 0) return false;

    if (n === 1) return true;


    if (n % 3 !== 0) return false;


    return isPowerOfThree(n / 3)
};
// ⏳Time: O(log n)  📦Space: O(log n)

//--------------------------------------------------------
//☑️ Optimize Solution
// Iterative solution
var isPowerOfThree = function (n) {
    if (n <= 0) return false;


    while (n % 3 === 0) {
        n = n / 3;
    }
    return n === 1;
};
// ⏳Time: O(log n)  📦Space: O(1) - Koi recursion nahi hai

//—--------------------------------------------------------
// Without loop / recursion (using Math solution)
var isPowerOfThree = function (n) {
    return n > 0 && 1162261467 % n === 0;
};
// ⏳Time: O(1)🚀  📦Space: O(1)🚀
// → 1162261467 = 3 ^ 19

//--------------------------------------------------------
//☑️ Edge Cases.
// Input: n = 27
// Output: true(27 → 9 → 3 → 1)

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------


