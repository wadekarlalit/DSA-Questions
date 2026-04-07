

//----------------------------------------//
//--- 👉 509. Fibonacci Number → Easy ---//
//---------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview

//--------------------------------------------------------
//☑️ Brute force Solution
// Recursion solution
function fib(n) {
    if (n === 0) return 0; // base case
    if (n === 1) return 1; // base case

    return fib(n - 1) + fib(n - 2);
}
// ⏳Time: O(2 ^ n) ❌ (very slow)
// 👉 Har call 2 aur calls karta hai:
// fib(n)
// → fib(n - 1)
// → fib(n - 2)
// 👉 Tree ban jaata hai(exponential growth)
 
// 📦Space: O(n)
// 👉 Recursion stack depth: n → n - 1 → n - 2 → ... → 1

//--------------------------------------------------------
//☑️ Optimize Solution
// without Recursion solution
function fib(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let pre = 0;
    let cur = 1;

    for (let i = 2; i <= n; i++) {
        // Manual swapping
        let next = pre + cur;
        pre = cur;
        cur = next;

        // Destructuring swapping
        [pre, cur] = [cur, pre + cur];
    }
    return cur;
}
// ⏳Time: O(n) → 👉 Loop n times chalta hai  
// 📦Space: O(1)🚀 → 👉 Sirf 3 variables use ho rahe hai

//--------------------------------------------------------
//☑️ Edge Cases.
// Input: n = 2
// Output: 1

// Input: n = 3
// Output: 2

// Input: n = 4
// Output: 3

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------
