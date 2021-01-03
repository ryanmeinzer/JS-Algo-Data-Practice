class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(value) {
        // create node with value
        let newNode = new Node(value)
        // if head is null, set head and tail to new node
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            // else, set tail's next to new node
            this.tail.next = newNode
            // set new node's prev to tail
            newNode.prev = this.tail
            // set tail to new node
            this.tail = newNode
        }
        // increment length
        this.length++
        // return list
        return this
    }
    pop() {
        if (!this.head) return undefined
        let removedTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
            this.tail.next = null
            removedTail.prev = null
        }
        this.length--
        return removedTail
    }
    shift() {
        if (this.length === 0) return undefined
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(value) {
        let newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index) {
        if (index < 0 || index >= this.length) return null
        let count = 0
        let current
        if (index <= this.length / 2) {
            count = 0
            current = this.head
            while (count !== index) {
                current = current.next
                count++
            }
        } else {
            count = this.length - 1
            current = this.tail
            while (count !== index) {
                current = current.prev
                count--
            }
        }
        return current
    }

}
let list = new DoublyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")

