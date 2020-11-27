// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // solve with nested loops
    // (find largest element of array and drag it to right-hand side)
    // for all i elements (outer for loop)
    for (let i = 0; i < arr.length; i++) {
        // for every j step/element with a shrinking element size set (inner for loop), restrict window with i and subtracting 1 as the array length is always offset by one based off the 0-index of the array and I want to make sure we handle the first iteration case where i = 0 so that I don't iterate out of bounds
        for (let j = 0; j < (arr.length - i - 1); j++) {
            // if the element at j is greater than j + 1
            if (arr[j] > arr[j + 1]) {
                // swap elements at j and j + 1
                let lesser = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = lesser
            }
        }
    }
    // return bubble-sorted array
    return arr
}

function selectionSort(arr) {
    // solve with nested loops
    // for all elements i of array (outer loop)
    for (let i = 0; i < arr.length; i++) {
        // assume the element at i is the least in the array, so assign i to an 'indexOfMin' variable
        let indexOfMin = i
        // for all elements j + 1 of array (inner loop)
        for (let j = i + 1; j < arr.length; j++) {
            // if there's an element at index of j with a lower value than the element at the index of 'indexOfMin'
            if (arr[j] < arr[indexOfMin]) {
                // re-assign indexOfMin to the j element
                indexOfMin = j
            }
        } 
        // if the index of the i element and the index of 'indexOfMin' is not the same, swap the two values
        if (i !== indexOfMin) {
            let lesser = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = lesser
        }
    }
    // return selection-sorted array outside of the outer for loop
    return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
