// easiest way to create a LIFO stack with an array:
let stack = []
push(record) {
    stack.push(record)
}
pop() {
    stack.pop()
}

// creating LIFO stack from scratch with a singly linked list with constant time 0(1) for insertion and removal
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    // 0(1) because we're adding from the beginning
    push(val) {
        let newNode = new Node(val)
        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
        // same as:
        // this.size++
        // return this.size
    }
    // 0(1) because we're removing from the beginning
    pop() {
        if (!this.first) return null
        let temp = this.first
        if (this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

let stack = new Stack()
stack.push("HELLO")
stack.push("GOODBYE")
stack.push("!")

