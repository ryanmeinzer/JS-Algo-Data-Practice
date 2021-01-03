// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
// USSR
// Understand
// Sudo Chop
    // create constructor
    constructor() {
        // create 'data' array
        this.data = []
    }
    // create 'push' method with push
    push(record) {
        return this.data.push(record)
    }
    // create 'pop' method with pop
    pop() {
        return this.data.pop()
    }
    // create 'peek' method
    peek() {
        return this.data[this.data.length - 1]
    }
// Solve / Chop
// Refactor
}

module.exports = Stack;
