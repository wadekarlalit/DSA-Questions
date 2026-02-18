//-------------------------------------//
//--- 👉 242. Valid Anagram → Easy ---//
//------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview

//--------------------------------------------------------
var isAnagram = function(s, t) {

//☑️ Brute force Solution
// 1st method
// - split - sort - join then check

if(s.length != t.length) return false;
let sString = s.split('').sort().join('');
      let tString = t.split('').sort().join('');
      return sString === tString;
}

// ⏳Time: O(n log n) 
// 	split() → O(n)
// 	sort() → O(n log n)
// 	join() → O(n)
// 	✅ Dominating factor → O(n log n)

// 	📦Space: O(n)
// 	split('') creates a new array → O(n)
// 	join('') creates new string → O(n)
// 	Sorting also uses extra space internally
// 	✅ So total extra memory → O(n)

//—-----------------------------------------
// 2nd method
// - using hashmap
    // if (s.length !== t.length) return false;
    // let map = {};

    // for(let char of s){
    //     map[char] = (map[char] || 0) + 1;
    // }
    // for(let char of t) {
    //     if(!map[char]) return false;
    //     map[char]--;
    // }
    // return true;

// ⏳Time: O(n)
// First loop → O(n)
// Second loop → O(n)
// Total → O(n) ✅

// 📦Space: O(1)
// - s and t consist of lowercase English letters. That means only 26 possible characters. So map size is at most 26. Therefore: Space: O(1) (constant space)
// - If Unicode / unlimited characters then Space: O(n)

//--------------------------------------------------------
//☑️ Optimize Solution


//--------------------------------------------------------
//☑️ Edge Cases.


//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------