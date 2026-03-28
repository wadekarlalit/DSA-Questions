

//---------------------------------------------//
//--- 👉 21. Merge Two Sorted Lists → Easy ---//
//--------------------------------------------//

//--------------------------------------------------------
//☑️ How You Explain This in Interview
// First, I create a dummy node to simplify handling of the head of the merged list. I use a pointer cur to build the result list.
// Then I iterate while both lists are not null. At each step, I compare the values of the current nodes of both lists.
// If list1.val is greater than list2.val, I attach list2 to the result and move list2 forward. Otherwise, I attach list1 and move it forward.
// After attaching a node, I also move the cur pointer forward to continue building the list.
// Once one of the lists becomes null, I attach the remaining nodes of the other list using cur.next = list1 || list2.
// Finally, I return dummy.next, which is the head of the merged list.

//--------------------------------------------------------
//☑️ Brute force Solution
  var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let cur = dummy;


    while(list1 && list2){
        if(list1.val > list2.val){
            cur.next = list2;
            list2 = list2.next;
        } else {
            cur.next = list1;
            list1 = list1.next;
        }
        cur = cur.next;
    }
    cur.next = list1 || list2;
    return dummy.next;
  };
// ⏳Time: O(n + m)
//  →  n = list1 ke nodes
//  →  m = list2 ke nodes

// 📦Space: O(n)

//--------------------------------------------------------
//☑️ Optimize Solution
	
//--------------------------------------------------------
//☑️ Edge Cases.

//--------------------------------------------------------
//☑️ Real Life example
//--------------------------------------------------------


