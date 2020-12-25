class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// let first = new Node('Hi')
// first.next = new Node('there')
// console.log(first.next)

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // create new node at end using value passed in
        var newNode = new Node(val);
        // if there isn't a head, set the head and tail to be the newly created node
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            // else, set the next property on the tail to be the new node and set the tail to be the newly created node
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        // inrement length
        this.length++;
        return this;
    }

    pop() {
        // if no nodes in list, return undefined
        if (!this.head) return undefined
        // loop through list until you reach tail
        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        // set the tail to be the 2nd to last node
        this.tail = newTail
        // set the next property of the 2nd to last node to be null
        this.tail.next = null
        // decrement length of list by one
        this.length--
        // if list is empty
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        // return value of node removed
        return current
    }
}

let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")