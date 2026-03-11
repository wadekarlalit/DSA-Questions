

//---------------------------------//
//--- 👉 67. Add Binary → Easy ---//
//--------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - I simulate binary addition from right to left. 
// -At each step, I add the digits from both strings and the carry. 
// - I push the result digit into a stack and update the carry. 
// - After processing all digits, I pop the stack to build the final binary string.

//--------------------------------------------------------
//☑️ Brute force Solution
var addBinary = function (a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let stack = [];

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) {
            sum += Number(a[i]);
            i--;
        }
        if (j >= 0) {
            sum += Number(b[j]);
            j--;
        }

        stack.push(sum % 2);
        carry = Math.floor(sum / 2);
    }

    let result = "";

    while (stack.length) {
        result += stack.pop();
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

