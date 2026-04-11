

//-----------------------------------------//
//--- 👉 278. First Bad Version → Easy ---//
//----------------------------------------//

//--------------------------------------------------------
var solution = function (isBadVersion) {
    /**
    * @param {integer} n Total versions
    * @return {integer} The first bad version
    */
    return function (n) {
        let left = 1;
        let right = n;
        let ans = -1; // store first bad version

        while (left <= right) {
            let mid = left + Math.floor((right - left) / 2);

            if (isBadVersion(mid)) {
                // mid is bad → store it
                ans = mid;


                // try to find earlier bad
                right = mid - 1;
            } else {
                // mid is good → go right
                left = mid + 1;
            }
        }
        return ans;
    };
};


// ⏳Time: O(log n)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Edge Cases

//--------------------------------------------------------
//☑️ Real Life example
