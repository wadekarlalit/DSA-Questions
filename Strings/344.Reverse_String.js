
//--------------------------------------//
//--- 👉 344. Reverse String → Easy ---//
//-------------------------------------//

//☑️ How You Explain This in Interview
// - i itret over the array
// - and swap index 0 to last index
// - and move pointers


//☑️ Brute force Solution
var reverseString = function(s) {
let i = 0, j = s.length - 1;

    while(i < j){
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
    return s;
}
// ⏳Time: O(n)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Optimize Solution
	// ⏳Time:    📦Space:
//--------------------------------------------------------
//☑️ Edge Cases.


//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------