
//----------------------------------------//
//--- 👉 125. Valid Palindrome → Easy ---//
//---------------------------------------//
       
//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - First, I clean the string by removing all non-alphanumeric characters and converting everything to lowercase.
// - I store only valid characters in a new array.
// - Then I use two pointers — one at the beginning and one at the end of the array.
// - I compare characters from both sides moving inward.
// - If at any point the characters don’t match, I return false.
// - If the pointers cross without mismatch, it means the string is a palindrome, so I return true.


//☑️ Brute force Solution
var isPalindrome = function(s) {

    let str = [];
    let isAlfaNum = (char) => /[a-zA-Z0-9]/.test(char);
    for(let i = 0; i < s.length; i++){
        if(isAlfaNum(s[i])) {
            str.push(s[i].toLowerCase())
        } else {
            continue;
        }
    }
    console.log("str", str)

    let i = 0, j = str.length - 1;

    while(i < j){
        if(str[i] != str[j]) return false;
        i++;
        j--;
    }
    return true;
};
// ⏳Time: O(n)  📦Space: O(n)

//--------------------------------------------------------
//☑️ Optimize Solution
// ⏳Time:    📦Space:
//--------------------------------------------------------
//☑️ Edge Cases.


//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------


