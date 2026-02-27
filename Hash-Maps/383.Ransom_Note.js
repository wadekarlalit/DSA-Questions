

//-----------------------------------//
//--- 👉 383. Ransom Note → Easy ---//
//----------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - I store frequency of magazine letters in a hash map.
// - Then I iterate over ransomNote and reduce the count.
// - If at any point a character is missing or count becomes zero, I return false.
// - Time complexity is O(n + m).
// - Space complexity is O(1) since only 26 lowercase letters.

//--------------------------------------------------------
//☑️ Brute force Solution
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    let map = new Map();

    // Count letters
    for (let char of ransomNote) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Try to fulfill from magazine
    for (let char of magazine) {
        if (map.has(char)) {
            map.set(char, map.get(char) - 1);
            if (map.get(char) === 0) {
                map.delete(char);
            }
        }
    }
    return map.size === 0;
};
// ⏳Time: O(n + m)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------