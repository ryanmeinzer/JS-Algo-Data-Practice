// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
// USSR
// Understand
    // create a class that instantiates a FIFO queue with methods 'add' and 'remove'
// Sudo Chop
    // create constructor
    constructor() {
        // create 'data' array for queue class
        this.data = []
    }
    // create 'add' and 'remove' method for unshift() and pop() for a 'record' parameter
    add(record) {
        this.data.unshift(record)
    }
    remove() {
        return this.data.pop()
    }
// Solve / Skip
// Refactor


}

module.exports = Queue;
