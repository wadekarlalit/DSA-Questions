

//------------------------------------------//
//--- 👉 205. Isomorphic Strings → Easy ---//
//-----------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// 1️⃣ First, I check if both strings have the same length.
// - If lengths are different, I return false immediately.
// - Because isomorphic strings must have equal length.

// 2️⃣ I create two hash maps:
// - mapST → to store mapping from string s to string t
// - mapTS → to store mapping from string t to string s
// - This is required to maintain a one-to-one mapping.

// 3️⃣ I iterate through both strings using a single loop.

// 4️⃣ I check mapping from s → t.
// - If charS already exists in mapST:
//   - I verify that it maps to the same charT.
//   - If mapping is different, I return false.
// - If it does not exist:
//   - I store the new mapping (charS → charT).

// 5️⃣ I check mapping from t → s (reverse check).
// - If charT already exists in mapTS:
//   - I verify that it maps back to the same charS.
//   - If mapping is different, I return false.
// - If it does not exist:
//   - I store the new mapping (charT → charS).

// 6️⃣ If the loop finishes without any mismatch, I return true.

// 🧠 Why Two Maps?
// - First map ensures one character in s does not map to multiple characters in t.
// - Second map ensures two different characters in s do not map to the same character in t.
// - This guarantees a proper one-to-one relationship.

//--------------------------------------------------------
//☑️ Brute force Solution
	var isIsomorphic = function(s, t) {

    if(s.length !== t.length) return false;

    let mapST = new Map();
    let mapTS = new Map();

    for(let i = 0; i < s.length; i++){
        let charS = s[i];
        let charT = t[i];

        // map for s string
        if(mapST.has(charS)){
            if(mapST.get(charS) !== charT) return false;
        } else {
            mapST.set(charS, charT)
        }

        // map for t string
        if(mapTS.has(charT)){
            if(mapTS.get(charT) !== charS) return false;
        } else {
            mapTS.set(charT, charS)
        }
    }
    return true;
};
// ⏳Time: O(n)  📦Space: O(n)

//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.
// Input: s = "ab", t = "aa"
// mapST = a - a and b - a
// mapTS = a - a and a - b
// Output: false

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------