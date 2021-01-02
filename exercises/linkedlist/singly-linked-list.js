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
        let newNode = new Node(val);
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
    shift() {
        // if no nodes, return undefined
        if (!this.head) return undefined
        // store current head as a variable
        let removedHead = this.head
        // set head to current head's next
        this.head = removedHead.next
        // decrement length by one
        this.length--
        // if list is empty
        if (this.length === 0) {
            this.tail = null
        }
        // return value of removed node
        return removedHead
    }
    unshift(value) {
        // create new node using value
        let newNode = new Node(value)
        // if there's no head, set head and tail
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            // else, set new node's next to current head
            newNode.next = this.head
            // set head to new node
            this.head = newNode
        }
        // increment length by one
        this.length++
        // return linked list
        return this
    }
    // linked lists do not have indexes so have to traverse manually for 0(n)
    get(index) {
        if (index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while (counter !== index) {
            current = current.next
            counter++
        }
        return current
    }
    set(index, value) {
        //use get function to find node
        // if node isn't found, return false
        if (!this.get(index)) return false
        // if node is found, set value and return true
        this.get(index).val = value
        return true
    }
    // 0(1)
    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) {
            this.push(value)
            return true
        }
        // doubly-negate to coerce to boolean for same return true as above
        if (index === 0) return !!this.unshift(value)
        // access node at the index - 1
        let prevNode = this.get(index - 1)
        let newNode = new Node(value)
        // set the new node's next to the previous next
        newNode.next = prevNode.next
        // set that node's next to be new node
        prevNode.next = newNode
        // increment length
        this.length++
        return true
    }
    // 0(1) if removing at beginning or otherwise 0(n)
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()
        // access node at the index - 1
        let prevNode = this.get(index - 1)
        let deletedNode = this.get(index)
        prevNode.next = deletedNode.next
        // decrement length
        this.length--
        return deletedNode
    }
    // reverse the linked list in place
    reverse() {
        // create 'current' variable starting at head
        // swap head and tail
        let current = this.head
        this.head = this.tail
        this.tail = current
        // create 'prev' variable
        let prev = null
        // create 'next' variable
        let next = null
        // loop through list
        for (let i = 0; i < this.length; i++) {
            // set 'next' to be the next of 'current'
            next = current.next
            // set current.next to 'prev'
            current.next = prev
            // set 'prev' to 'current'
            prev = current
            // set 'current' to 'next'
            current = next
        }
        return this
    }
}

let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")

