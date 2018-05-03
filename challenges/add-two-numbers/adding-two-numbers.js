/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 
var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var result = new ListNode(-1);
    var resHead = result;
    while(l1 !== null || l2 !== null){
        var sum = carry;
        if(l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }

        var node = null;
        if(sum >= 10){
            node = new ListNode(sum - 10);
            carry = 1;
        }else{
            node = new ListNode(sum);
            carry = 0;
        }
        result.next = node;
        result = result.next;
    }
    if(carry === 1){
        result.next = new ListNode(1);
    }
    return resHead.next;
};
