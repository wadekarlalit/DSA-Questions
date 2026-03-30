

//---------------------------------------------------------//
//--- 👉 83. Remove Duplicates from Sorted List → Easy ---//
//--------------------------------------------------------//
// ☑️ Pattern → In-place modification + Traversal

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// Since the linked list is sorted, duplicate values will always be adjacent.
// I use a pointer curr to traverse the list.
// then using while loop check curr && curr.next is present
// While traversing, I compare the current node value with the next node value.
// If their values are equal, I remove the duplicate by updating curr.next = curr.next.next to skip the next node.
// If the values are different, I move the pointer forward.
// Finally, I return the head of the modified list.

//--------------------------------------------------------
//☑️ Brute force Solution
var deleteDuplicates = function (head) {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
};
// ⏳Time: O(n) 📦Space: O(1)

//--------------------------------------------------------
//☑️ Optimize Solution

//--------------------------------------------------------
//☑️ Edge Cases.
Input: head = [1, 1, 2]
Output: [1, 2]


Input: head = [1, 1, 2, 3, 3]
Output: [1, 2, 3]

//--------------------------------------------------------
//☑️ Real Life example

//--------------------------------------------------------