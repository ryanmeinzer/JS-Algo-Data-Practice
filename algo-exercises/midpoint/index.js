// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    // USSR
    // Understand
        // given a linkedlist, return midpoint and if the linkedlist has an even number of nodes, return the last node of the first half of the linkedlist
        // inputs - linkedlist
        // outputs - node of linkedlist
        // example - 10 nodes, returns node 5; 11 nodes, returns node 6
    // Sudo Chop
        // create two variables 'slow' and 'fast'
        // assign both variables to first/head node
        let slow = list.head
        // or: let slow = list.getFirst()
        let fast = list.head
        // iterate through linkedlist with a while loop
        // determine if fast.next exists and fast.next.next exists
        while (fast.next && fast.next.next) {
            // increment slow by one and fast by two
            slow = slow.next
            fast = fast.next.next
        }
        // if neither exists, fast.next is at the end of the linkedlist and slow is at the midpoint because it's moving half as fast as 'fast' is
        // return slow node
        return slow
    // Solve / Skip
    // Refactor
}

module.exports = midpoint;
