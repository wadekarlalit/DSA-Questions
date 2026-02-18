//--------------------------------------------//
//--- 👉 14. Longest Common Prefix → Easy ---//
//-------------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview

//--------------------------------------------------------
var longestCommonPrefix = function(strs) {

//☑️ Brute force Solution
    if(strs.length === 0) return "";
    for(let i = 0; i < strs[0].length; i++){
        let char = strs[0][i];
        for(let j = 1; j < strs.length; j++){
            if(i >= strs[j].length || strs[j][i] !== char) return strs[0].substring(0, i)
        }
    }
    return strs[0];
}
// ⏳Time: O(n * m)
// - m = length of smallest string
// - Outer loop runs → up to m times
// - n = number of strings
// - Inner loop runs → up to n times


// 📦Space: O(1)
//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------