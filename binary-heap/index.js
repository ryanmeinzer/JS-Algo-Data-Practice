class MaxBinaryHeap {
    constructor() {
        this.values = []
    }
    insert(element) {
        // push value on to heap
        this.values.push(element)
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
            if (element <= parent) break
            // swap value at parentIndex with value at index
            this.values[parentIndex] = element
            this.values[index] = parent
            // update index to be parentIndex
            index = parentIndex
        }
    }
    extractMax() {
        // replace first/max value with last
        let maxVal = this.values[0]
        let lastVal = this.values.pop()
        // cover edge case of only one remaining element
        if (this.values.length > 0) {
            this.values[0] = lastVal
            // bubble down new root to correct location
            this.bubbleDown()
        }
        // return old root
        return maxVal
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
                // make swapped child index the new parentIndex
                leftChild = this.values[leftChildIndex]
                // if left is greater than element, swap with largest child
                if (leftChild > element) {
                    swap = leftChildIndex
                }
            }
            if (rightChildIndex < this.values.length) {
                // make swapped child index the new parentIndex
                rightChild = this.values[rightChildIndex]
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
// anything