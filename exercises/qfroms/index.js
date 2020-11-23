// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue { 
// USSR
// Understand
    // reword - create a queue from two stacks, with add, remove and peek methods
// Sudo Chop
    // create a constructor for queue with both stacks included in class instantiation
    constructor() {
        // assign a new stack to a variable 'stack1'
        this.stack1 = new Stack()
        // assign a second stack to a variable 'stack2'
        this.stack2 = new Stack()
    }
    // create an 'add' method for queue with unshift()
    add(record) {
        return this.stack1.push(record)
    }
    // create a 'remove' method for queue with pop()
    remove() {
        while (this.stack1.peek()) {
            this.stack2.push(this.stack1.pop())
        }
        // assign record to remove but don't return it yet
        let recordToRemove = this.stack2.pop()
        // replace all back to stack1 for queue
        while (this.stack2.peek()) {
            this.stack1.push(this.stack2.pop())
        }
        // return 'recordToRemove'
        return recordToRemove
        }

    // create a 'peek' method for queue from two stacks' peek methods
    peek() {
        // move all from first stack into second stack
        while (this.stack1.peek()) {
            this.stack2.push(this.stack1.pop())
        }
        // assign record to record to peek but don't return it yet
        let recordToPeek = this.stack2.peek()
        // move all back to stack1 for queue
        while (this.stack2.peek()) {
            this.stack1.push(this.stack2.pop())
        }
        // return record to peek
        return recordToPeek
    }
// Solve / Skip
// Refactor
}

module.exports = Queue;
