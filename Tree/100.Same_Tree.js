

//----------------------------------//
//--- 👉 100. Same Tree  → Easy ---//
//---------------------------------//

// Pattern → DFS + Recursion 

//--------------------------------------------------------
//☑️ How You Explain This in Interview

//--------------------------------------------------------
//☑️ Brute force Solution
var isSameTree = function (p, q) {
    // Case 1: dono null
    if (p === null && q === null) return true;

    // Case 2: ek null, ek not null
    if (p === null || q === null) return false;

    // Case 3: value different
    if (p.val !== q.val) return false;

    // Case 4: left aur right check karo
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// ⏳Time: Time: O(n)(har node ek baar visit)  
// 📦Space: Space: O(h)(recursion stack)

//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.
// p = [1, 2, 3]
// q = [1, 2, 3]
// Output: true

// p = [1, 2]
// q = [1, null, 2]
// Output: false

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------
