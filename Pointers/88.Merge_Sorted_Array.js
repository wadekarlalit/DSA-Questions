

//-----------------------------------------//
//--- 👉 88. Merge Sorted Array → Easy ---//
//----------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// - i create 3 pointers - i, j and k.
// - i for nums1, j for nums2 and k will be use for insert large number.
// - pointers starts from end and compare nums1 and nums2.
// - if nums1 value is greater than nums2 the insert nums1 value in the nums1[k].
// - and i and k decrease. 
// - if nums2 value big then in the nums2 value insert in the nums1[k].
// - after completing the main loop i insert remaining values.

//--------------------------------------------------------
//☑️ Brute force Solution
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while(j >= 0){
        nums1[k] = nums2[j];
        k--;
        j--;
    }
    return nums1;
};
// ⏳Time: O(m + n)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Optimize Solution
	
//--------------------------------------------------------
//☑️ Edge Cases.
// nums1 = [4,5,6,0,0,0], m = 3
// nums2 = [1,2,3], n = 3

// nums1 = [4,5,6,0,0,0], m = 3
// nums2 = [1,2,3], n = 3

// nums1 = [2,0], m = 1
// nums2 = [1], n = 1

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------


