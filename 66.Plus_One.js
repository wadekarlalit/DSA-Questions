//------------------------------//
//--- 👉 66. Plus One → Easy ---//
//------------------------------//

// ☑️ How You Explain This in Interview
// 	- i start from the right side of the array
// 	- if digit is less than 9 i add 1.
//  - if digit is 9 i convert it to 0 and 1 carry.
//  - if all digit are 9 then it will be converted to 0.
//  - after complete the loop we check 1st digit is 0 then we add 1 in the beginning of the array
	// —---------------------------------------------------

	var plusOne = function(digits) {
 	// ☑️ Brute force Solution
    	for(let i = digits.length - 1; i >= 0; i--){
        if(digits[i] < 9){
            digits[i] += 1;
            break;
        }
        if(digits[i] == 9) {
            digits[i] = 0;
        }
    	}
    	if(digits[0] == 0){
        digits.unshift(1)
    	}
    	return digits
    }

//    ⏳Time: O(n)  📦Space: O(1)