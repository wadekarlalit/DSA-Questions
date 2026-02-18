

//------------------------------------------//
//--- 👉 58. Length of Last Word → Easy ---//
//-----------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview

//--------------------------------------------------------
var lengthOfLastWord = function (s) {

    //☑️ Brute force Solution
    // 1st method
    let count = 0;
    let lastWord = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') count++;
        else {
            if (count !== 0) {
                lastWord = count;
                count = 0;
            }
        }
    }
    return count == 0 ? lastWord : count;

    //—-----------------------------------------
    // 2nd method
    // let i = s.length - 1;
    // let count = 0;

    // while (i >= 0 && s[i] == ' ') i--;

    // while (i >= 0 && s[i] !== ' ') {
    //     count++;
    //     i--;
    // }
    // return count;
};


// ⏳Time: O(n)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------