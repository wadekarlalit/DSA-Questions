

//------------------------------------//
//--- 👉 231. Power of Two → Easy ---//
//-----------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview

//--------------------------------------------------------
//☑️ Brute force Solution
    var isPowerOfTwo = function(n) {
        if(n <= 0) return false;


        if(n === 1) return true;


        if(n % 2 !== 0) return false;


        return isPowerOfTwo(n / 2);
    };
// ⏳Time: O(log n)  📦Space: O(log n)

//--------------------------------------------------------
//☑️ Optimize Solution
	// Iterative solution
	var isPowerOfTwo = function(n) {
        if(n <= 0) return false;


        while(n % 2 === 0) {
            n = n / 2;
        }
        return n === 1;
      };
	// ⏳Time: O(log n)  📦Space: O(1)- Koi recursion nahi hai

//—--------------------------------------------------------
// using Bit Manipulation solution)
    	var isPowerOfTwo = function(n) {
        return n > 0 && (n & (n - 1)) === 0;
    	};
	// ⏳Time: O(1)🚀  📦Space: O(1)🚀

//--------------------------------------------------------
//☑️ Edge Cases.
// Input: n = 16
// Output: true (16 → 8 → 4 → 2 → 1)

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------
