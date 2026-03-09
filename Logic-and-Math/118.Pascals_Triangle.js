

//-----------------------------------------//
//--- 👉 118. Pascal's Triangle → Easy ---//
//----------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - In Pascal’s Triangle:
//     - The first and last element of every row is 1.
//     - Every middle element is the sum of the two numbers directly above it.


// - I create a result array to store all rows of the triangle.
// - I iterate from 0 to numRows - 1 to build each row.
// - For every row, I create a new array called row.


// Then I iterate through the positions in that row.
//     -if the position is the first or last element (j === 0 or j === i), I add 1.
//     - Otherwise, I compute the value by adding the two elements from the previous row:
//     - result[i-1][j-1] + result[i-1][j]


// - After building the row, I push it into the result array.
// - Finally, I return the result.
// - For this problem, you cannot do better than O(n²) time if you must return the entire triangle.

//--------------------------------------------------------
//☑️ Brute force Solution
var generate = function (numRows) {
    let result = [];

    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1)
            } else {
                row.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(row)
    }
    return result;
};
// ⏳Time: O(n²)  📦Space: O(n²)

//-------------------------------------------------------
// helper factorial
function factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

var generate = function (numRows) {
    let ans = [];
    for (let n = 0; n < numRows; n++) {
        let row = [];
        for (let k = 0; k <= n; k++) {
            // C(n, k) = n! / (k! * (n-k)!)
            row.push(factorial(n) / (factorial(k) * factorial(n - k)));
        }
        ans.push(row);
    }
    return ans;
};
// ⏳Time: O(n³)  📦Space: O(n²)

//-------------------------------------------------------
var generate = function (numRows) {
    let result = [];
    if (numRows <= 0) return result;

    // first row
    result.push([1]);

    for (let r = 1; r < numRows; r++) {
        let prev = result[r - 1];    // previous row (pointer-like)
        let row = [];
        row.push(1);                 // first element

        // middle elements: use pointers/indexes j-1 and j on prev
        for (let j = 1; j < r; j++) {
            row.push(prev[j - 1] + prev[j]);
        }

        row.push(1);                 // last element
        result.push(row);
    }
    return result;
};
// ⏳Time: O(n³)  📦Space: O(n²)

//-------------------------------------------------------------------------------//
// combination-based Solution
var generate = function (numRows) {
    let res = [];
    for (let n = 0; n < numRows; n++) {
        let row = [];
        let val = 1; // C(n,0)
        for (let k = 0; k <= n; k++) {
            row.push(val);
            // compute next C(n,k+1)
            val = val * (n - k) / (k + 1);
        }
        res.push(row);
    }
    return res;
};
// ⏳Time: O(n³)  📦Space: O(n²)

//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------
