

//---------------------------------//
//--- 👉 412. Fizz Buzz → Easy ---//
//--------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - I iterate from 1 to n. For each number, I check divisibility using the modulus operator. 
// - If the number is divisible by both 3 and 5 I add "FizzBuzz", 
// - if divisible by only 3 I add "Fizz", 
// - if divisible by only 5 I add "Buzz", 
// - otherwise I convert the number to a string and add it to the array.

//--------------------------------------------------------
//☑️ Brute force Solution
var fizzBuzz = function(n) {
    let answer = [];

    for(let i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            answer.push("FizzBuzz");
        } else if(i % 3 === 0){
            answer.push("Fizz");
        } else if(i % 5 === 0){
            answer.push("Buzz");
        } else {
            answer.push(i.toString());
        }
    }
    return answer;
};

// ⏳Time: O(n)  📦Space: O(n)

//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------

