

//-------------------------------------------------------------------------//
//--- 👉 28. Find the Index of the First Occurrence in a String → Easy ---//
//------------------------------------------------------------------------//

// → old name of this question -  Implement strStr() 
// Pattern family → Sliding Window
// Type → Fixed Window

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// I am using sliding window approach.
// using for loop i start from 0 till i <= haystack.length - needle.length.
// Input: haystack = "sadbutsad", needle = "sad"
// if haystack.length is 9 and needle.length is 3 then 9 - 3 = 6.
// <= means i is run 0 to 6. We take 1st letter of needle thats wy us <=
// then we take j pointer.
// using while loop we check j < needle.length and haystack[i + j] === needle[j].
// if we don’t get needle then we check from next index of haystack.
// after completing while loop we check j is equal to needle.length is true then return i.
// if we don’t get needle in haystack then we return -1. 

//--------------------------------------------------------
//☑️ Brute force Solution
  var strStr = function(haystack, needle) {
    for(let i = 0; i <= haystack.length - needle.length; i++){
        let j = 0;
        while(j < needle.length && haystack[i + j] === needle[j]){
            j++;
        }
        if(j === needle.length) return i;
    }
    return -1;
  };
// ⏳Time: O(n)  📦Space: O(n)

//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------
