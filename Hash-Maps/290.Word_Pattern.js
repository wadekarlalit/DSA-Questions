

//------------------------------------//
//--- 👉 290. Word Pattern → Easy ---//
//-----------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// 1️⃣ First, I split the string s into an array of words using space as delimiter.
// - So I can compare each pattern character with its corresponding word by index.

// 2️⃣ I create two hash maps:
// - mapP → to store mapping from pattern character → word
// - mapS → to store mapping from word → pattern character
// - This ensures a bijection (one-to-one mapping).

// 3️⃣ I iterate through both using a single loop from 0 to pattern.length.

// 4️⃣ I check mapping from pattern → word:
// - If charP already exists in mapP:
//     - I verify that it maps to the same word (charS).
//     - If the mapping is different, I immediately return false.
// - if it dose not exist:
//     - I store the new mapping (charP → charS).

// 5️⃣ I check mapping from word → pattern (reverse check):
// - If charS already exists in mapS:
//     - I verify that it maps back to the same character (charP).
//     - If not, I return false.
// - if it dose not exist:
//     - I store the new mapping (charS → charP).

// 6️⃣ If the loop completes without conflicts, I return true.

//--------------------------------------------------------
//☑️ Brute force Solution
	var wordPattern = function(pattern, s) {
    let arrS = s.split(' ');

    if(pattern.length !== arrS.length) return false;

    let mapP = new Map();
    let mapS = new Map();

    for(let i = 0; i < pattern.length; i++){
        let charP = pattern[i];
        let charS = arrS[i];

        // map for pattern
        if(mapP.has(charP)){
            if(mapP.get(charP) !== charS) return false;
        } else {
            mapP.set(charP, charS)
        }

        // map for s string
        if(mapS.has(charS)){
            if(mapS.get(charS) !== charP) return false;
        } else {
            mapS.set(charS, charP);
        }
    }
    return true;
 };

// ⏳Time: O(n)  
// 	- split() → O(n)
//     - Loop → O(n)
//     - Map operations → O(1) average

// 📦Space: O(n)
// - Array of words → O(n)
// - Two maps → O(n)

//--------------------------------------------------------
//☑️ Optimize Solution
	
//--------------------------------------------------------
//☑️ Edge Cases.
// Input: s = "ab", t = "dog dog"
// mapST = a - dog and b - dog
// mapTS = dog - a and dog - b
// Output: false
//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------