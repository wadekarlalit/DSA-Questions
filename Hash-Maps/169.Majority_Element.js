

//----------------------------------------//
//--- 👉 169. Majority Element → Easy ---//
//---------------------------------------//


//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - First, I create a map to store the frequency of each number.
// - Then I iterate through the array and count how many times each number appears.
// - While counting, I keep track of the maximum frequency and store the number that has the highest count.
// - After finishing the loop, I return the number with the highest frequency, which is the majority element.

//--------------------------------------------------------
//☑️ Brute force Solution
 var majorityElement = function(nums) {
    let map = new Map();
    let max = 0;
    let res = null;

    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
        if(map.get(num) > max){
            max = map.get(num);
            res = num;
        }
    }
    return res;
  };
// ⏳Time: O(n)  📦Space: O(n)

//--------------------------------------------------------
//☑️ Optimize Solution
// - Majority element is the element that appears strictly more than n/2 times, 
// - meaning more than half of the array size.
// - then only use this Boyer-Moore method.

	var majorityElement = function(nums) {
    let map = new Map();
    let max = 0;
    let res = null;

    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
        if(map.get(num) > max){
            max = map.get(num);
            res = num;
        }
    }
    return res;
};
// ⏳Time: O(n)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------


