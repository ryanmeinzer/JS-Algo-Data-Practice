// min binary heap for priority queue with 0(log n) for insertion and removal
class Node {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}
class PriorityQueue {
    constructor() {
        this.values = []
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority)
        // push value on to heap
        this.values.push(newNode)
        // bubble up to correct position
        this.bubbleUp()
    }
    bubbleUp() {
        // create 'index' var that's the length of values - 1
        let index = this.values.length - 1
        // create 'element' const that's the element
        const element = this.values[index]
        // loop as long as index is greater than 0
        while (index > 0) {
            // create 'parentIndex' var that's floor of (index - 1) / 2
            let parentIndex = Math.floor((index - 1) / 2)
            // create 'parent' var
            let parent = this.values[parentIndex]
            // swap to <= to convert to max binary heap
            if (element.priority >= parent.priority) break
            // swap value at parentIndex with value at index
            this.values[parentIndex] = element
            this.values[index] = parent
            // update index to be parentIndex
            index = parentIndex
        }
    }
    dequeue() {
        // replace first/max value with last
        // swap to 'maxVal' convert to max binary heap
        let minVal = this.values[0]
        let lastVal = this.values.pop()
        // cover edge case of only one remaining element
        if (this.values.length > 0) {
            this.values[0] = lastVal
            // bubble down new root to correct location
            this.bubbleDown()
        }
        // return old root
        // swap to 'maxVal' convert to max binary heap
        return minVal
    }
    bubbleDown() {
        // create 'index' var that starts at 0 (root)
        let index = 0
        // create 'element' const that's the element
        const element = this.values[0]
        while (true) {
            // find index of left child 2 * index + 1
            let leftChildIndex = 2 * index + 1
            // find index of right child 2 * index + 2
            let rightChildIndex = 2 * index + 2
            // create leftChild and rightChild
            let leftChild
            let rightChild
            // create swap var to break loop when appropriate
            let swap = null
            if (leftChildIndex < this.values.length) {
                leftChild = this.values[leftChildIndex]
                // if left is greater than element, swap with largest child
                // swap to > to convert to max binary heap
                if (leftChild.priority < element.priority) {
                    swap = leftChildIndex
                }
            }
            if (rightChildIndex < this.values.length) {
                rightChild = this.values[rightChildIndex]
                // if left is greater than element, swap with largest child
                if (
                    // swap to > to convert to max binary heap
                    (swap === null && rightChild.priority < element.priority) ||
                    // swap to > to convert to max binary heap
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIndex
                }
            }
            // continue looping and swapping until neither child is larger than element
            if (swap === null) break
            this.values[index] = this.values[swap]
            this.values[swap] = element
            index = swap
        }
    }
}

let ER = new PriorityQueue()
ER.enqueue("common cold", 5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever", 4)
ER.enqueue("broken arm", 2)
ER.enqueue("glass in foot", 3)
// anything