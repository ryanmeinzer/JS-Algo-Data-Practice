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
        let counter = 0
        let node = this.head
        // iterate through linkedlist
        while (node) {
            counter++
            node = node.next
        }
        return counter
    }

    getFirst() {
        return this.head
    }

    getLast() {
        // handle the case if there's no nodes in the LL
        if (!this.head) {
            return null
        }
        let node = this.head
        // iterate through linkedlist
        while (node) {
            if (!node.next) {
                return node
            }
            node = node.next
        }
    }

    clear() {
        // remove head node to remove all proceeding as the LL only knows about the head
        this.head = null
    }

    removeFirst() {
        // handle the case if there's no nodes in the LL
        if (!this.head) {
            return null
        }
        this.head = this.head.next
    }

    // // solved removeLast my initial way
    // removeLast() {
    //     if (!this.head) {
    //         return null
    //     }
    //     if (!this.head.next) {
    //         this.head = null
    //     }
    //     let node = this.head
    //     let lastNode = this.getLast()
    //     // iterate through linkedlist
    //     while (node) {
    //         if (node.next === lastNode) {
    //             node.next = null
    //         }
    //         node = node.next
    //     }
    // }

    // solved with sliding previous and next variables
    removeLast() {
        if (!this.head) {
            return
        }
        if (!this.head.next) {
            this.head = null
            return
        }
        let previousNode = this.head
        let node = this.head.next
        // iterate through linkedlist
        while (node.next) {
            previousNode = node
            node = node.next
        }
        previousNode.next = null
    }
    
}

module.exports = { Node, LinkedList };
