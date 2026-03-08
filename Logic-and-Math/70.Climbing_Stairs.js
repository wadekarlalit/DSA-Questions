

//--------------------------------------//
//--- 👉 70. Climbing Stairs → Easy ---//
//-------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// 1️⃣ First I observe that to reach step n, I can come either from step n-1 (taking 1 step) or from step n-2 (taking 2 steps).

// 2️⃣ Therefore the number of ways follows the recurrence:
// - ways(n) = ways(n-1) + ways(n-2)

// 3️⃣ The base cases are:
// - n = 1 → 1 way
// - n = 2 → 2 ways

// 4️⃣ Since this follows the Fibonacci pattern, I compute it iteratively.
// 5️⃣ I store the previous two values and update them in a loop until I reach n.
// 6️⃣ Finally I return the last computed value which represents the number of ways to reach step n.

//--------------------------------------------------------
//☑️ Brute force Solution
var climbStairs = function(n) {
    if(n <= 2) return n;


    let first = 1;
    let second = 2;


    for(let i = 3; i <= n; i++){
        let current = first + second;
        first = second;
        second = current;
    }
    return second;
};
// ⏳Time: O(n)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------


