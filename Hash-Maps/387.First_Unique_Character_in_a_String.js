

//----------------------------------------------------------//
//--- 👉 387. First Unique Character in a String → Easy ---//
//---------------------------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - First, I create an object to store the frequency of each character.
// - Then I iterate over the string and count how many times each character appears.
// - After that, I loop through the string again to find the first character whose frequency is 1.
// - If I find one, I return its index. Otherwise, I return -1.

//--------------------------------------------------------
//☑️ Brute force Solution
var firstUniqChar = function(s) {
    // Using Object{}
    let map = {};


    for(let char of s){
        map[char] = (map[char] || 0) + 1;
    }


    for(let i = 0; i < s.length; i++){
        if(map[s[i]] === 1) return i;
    }
    return -1;
//—-------------------------------------------------
    // using Map()
    // let map = new Map();


    // for(let char of s){
    //     map.set(char, (map.get(char) || 0) + 1);
    // }


    // for(let i = 0; i < s.length; i++){
    //     if(map.get(s[i]) === 1) return i;
    // }
    // return -1;
};

// ⏳Time: O(n)  📦Space: O(1)- only 26 letters possible.
//--------------------------------------------------------
//☑️ Optimize Solution
	
//--------------------------------------------------------
//☑️ Edge Cases.


//--------------------------------------------------------
//☑️ Real Life example
//--------------------------------------------------------
