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
        // remember that re-factoring with other methods is great and less redundant such as:
        // this.insertAt(data, 0)
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
        // remember that re-factoring with other methods is great and less redundant such as:
        // return this.getAt(0)
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
        // remember that re-factoring with other methods is great and less redundant such as:
        // return this.getAt(this.size() - 1)
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

    insertLast(data) {
        // handle the case if there's no nodes in the LL and assign to head
        if (!this.head) {
            this.head = new Node(data)
        } else {
        let lastNode = this.getLast()
        lastNode.next = new Node(data)
        }
    }

    getAt(index) {
        if (this.size() < 1) {
            return null
        }
        // same as above
        // if (!this.head) {
        //     return null
        // }
        let node = this.head
        let counter = 0
        while (node) {
            if (index === counter) {
                return node
            } 
        counter++
        node = node.next
        }
        // handles index out of while loop
        return null
    }

    removeAt(index) {
        // if (this.size() < 1) {
        //     return null
        // }
        if (!this.head) {
            return
        }
        if (index === 0) {
            this.head = this.head.next
            return
        }
        // get the node before the index to update it's next pointer to the node after the index (to skip it and thus remove it)
        let previous = this.getAt(index - 1)
        // handle index out of bounds
        if (!previous || !previous.next) {
            return
        }
        previous.next = previous.next.next
    }

    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data)
            // if we caught this edge case, make sure to immediately return
            return
        }
        if (index === 0) {
            // create new node with data and the next as the current this.head
            this.head = new Node(data, this.head)
            // if we caught this edge case, make sure to immediately return
            return
        }
        // find the new previous node
        // or if the new previous node is out of bounds (ie if this.getAt(index - 1 is falsey)), make it the last
        let previous = this.getAt(index - 1) || this.getLast()
        // create new node and insert with data after previous and assign next node to the previous.next node
        let newNode = new Node(data, this.getAt(index))
        // same as above
        // let newNode = new Node(data, this.getAt(index))
        // re-assign the previous' node's next node to the new Node
        previous.next = newNode
    }

    forEach(fn) {
        let node = this.head
        let counter = 0
        while (node) {
            fn(node, counter)
            node = node.next
            counter++
        }
    }

    // define generator function with a key of fsymbol.iterator 
    *[Symbol.iterator]() {
        // take head node
        let node = this.head
        // iterate through linkedlist with while loop
        while (node) {
            // for every step along the node, yield the current node
            yield node
            node = node.next
        }
    }

}

module.exports = { Node, LinkedList };
