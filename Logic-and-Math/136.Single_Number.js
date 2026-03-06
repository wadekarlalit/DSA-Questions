

//-------------------------------------//
//--- 👉 136. Single Number → Easy ---//
//------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview

//--------------------------------------------------------
//☑️ Brute force Solution
var singleNumber = function (nums) {
    let map = new Map();


    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }


    for (let num of nums) {
        if (map.has(num)) {
            if (map.get(num) === 1) {
                return num;
            }
        }
    }
// ⏳Time: O(n)  📦Space: O(n)

//--------------------------------------------------------
//☑️ Optimize Solution

    // let result = 0;

    // for (let num of nums) {
    //     result = result ^ num;
    // }
    // return result;
};
// ⏳Time: O(n)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------