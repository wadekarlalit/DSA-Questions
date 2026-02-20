
//---------------------------------------//
//--- 👉 13. Roman to Integer → Easy ---//
//--------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - I use a map to store Roman numeral values. 
// - Then I iterate through the string. 
// - If the current value is smaller than the next value, I subtract it. 
// - Otherwise, I add it. 
// - This handles both normal and subtractive cases.

//--------------------------------------------------------
//☑️ Brute force Solution
 var romanToInt = function(s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 58

    for(let i = 0; i < s.length; i++){
        if(map[s[i]] < map[s[i + 1]]) total -= map[s[i]];
        else total += map[s[i]];
    }
    return total;
 };
// ⏳Time: O(n)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------
