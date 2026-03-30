

//-----------------------------------------//
//--- 👉 141. Linked List Cycle → Easy ---//
//----------------------------------------//

//☑️ Pattern → Fast & Slow Pointer (Floyd’s Algorithm)
// → Singly Circular Linked List

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// I use Floyd’s Cycle Detection algorithm with two pointers — slow and fast.
// Both start from the head.
// The slow pointer moves one step at a time, while the fast pointer moves two steps.
// If there is a cycle, the fast pointer will eventually meet the slow pointer.
// If the fast pointer reaches null, it means there is no cycle.

//--------------------------------------------------------
//☑️ Brute force Solution
var hasCycle = function (head) {
    let slow = head;
    let fast = head;


    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;


        if (slow === fast) return true;
    }
    return false;
};
// ⏳Time: O(n)  📦Space: O(1)

//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.
// Input: head = [3, 2, 0, -4], pos = 1
// Output: true

// Input: head = [1, 2], pos = 0
// Output: true

// Input: head = [1], pos = -1
// Output: false

//--------------------------------------------------------
//☑️ Real Life example
//--------------------------------------------------------
