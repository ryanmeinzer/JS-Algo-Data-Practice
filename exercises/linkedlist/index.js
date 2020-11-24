// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {

    constructor() {
        this.head = null
    }

    insertFirst(data) {
        // pass in the existing this.head as the second argument to assign to the new head node's next argument to link them
        // update this.head to be the new head node
        this.head = new Node(data, this.head)
    }

    size() {
        
    }
    
}

module.exports = { Node, LinkedList };
