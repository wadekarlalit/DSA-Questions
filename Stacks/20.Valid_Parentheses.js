

//----------------------------------------//
//--- 👉 20. Valid Parentheses → Easy ---//
//---------------------------------------//

    
//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - I use a stack to track opening brackets. 
// - While traversing the string, I push opening brackets into the stack. 
// - When I encounter a closing bracket, I pop the top element and check if it matches the corresponding opening bracket. 
// - If it doesn't match, I return false. 
// - At the end, the stack must be empty for the string to be valid.

//--------------------------------------------------------
//☑️ Brute force Solution
var isValid = function(s) {
    let stack = [];

    for(let char of s){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char);
        } else {
            let front = stack.pop();
            if(char === ')' && front !== '(' ||
            char === '}' && front !== '{' ||
            char === ']' && front !== '['){
                return false;
            }
        }
    }
    return stack.length === 0;
};
// ⏳Time: O(n)  📦Space: O(n)
//--------------------------------------------------------
//☑️ Optimize Solution
	
//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example
//--------------------------------------------------------
