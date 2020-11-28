// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    // create two pointers pointing to first node
    let slow = list.getFirst()
    let fast = list.getFirst()
    // advance fast by n
    while (n > 0) {
        fast = fast.next
        n--
        // or: n = n - 1
    }
    // or:
    // for (let i = 0; i < n; i++) {
    //     fast = fast.next
    // }
    // advance slow and fast together by one at a time
    // while fast.next is not equal to null
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    // if we exit loop, fast.next is pointing to null so is the end, so slow is pointing to the end minus n
    // return slow
    return slow

}

module.exports = fromLast;
