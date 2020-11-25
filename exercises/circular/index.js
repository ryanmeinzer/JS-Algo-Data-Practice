// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {

    // Sudo Chop
    // create two variables 'slow' and 'fast'
    // assign both variables to first/head node
    let slow = list.getFirst()
    // or: let slow = list.head
    let fast = list.getFirst()
    // iterate through linkedlist with a while loop
    // determine if fast.next exists and fast.next.next exists
    while (fast.next && fast.next.next) {
        // increment slow by one and fast by two
        slow = slow.next
        fast = fast.next.next
        // if slow and fast are looking/pointing at the same node, it's a circular linked list
        if (slow === fast) {
            // return true
            return true
        }
    }
    // if we exit the loop, that means the end node pointed to null and it's not a circular linked list
    return false

}

module.exports = circular;
