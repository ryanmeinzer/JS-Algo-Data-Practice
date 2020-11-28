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
    // make sure the array has more than one element in it to split
    if (arr.length === 1) {
        return arr
    }
    // determine center of array
    let center = Math.floor(arr.length / 2)
    // split the array into two then split those halves by using slice starting with the first index and slicing up to (but not including) the center
    let left = arr.slice(0, center)
    let right = arr.slice(center)
    // recursively call mergeSort() into each half
    // mergeSort(left)
    // mergeSort(right)
    // recursively call mergeSort() into each half AND recursively call merge() on both left and right single-element arrays, and if a single-element array (sorted) only has one value, it's returned for the respective value in merge() per the first if statement in mergeSort()
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    // create an empty 'results' array to merge two sorted arrays
    let results = []
    // while there are still elements in both the sorted 'left' and sorted 'right' arrays
    while (left.length && right.length) {
        // if the first element of the left-half array is less than the first element of the right-half array
        if (left[0] < right[0]) {
            // remove the first element element from the left-half array and insert it into the end of 'results'
            results.push(left.shift())
        // else remove the first element element from the right-half array and insert it into the end of 'results'
        } else {
            results.push(right.shift())
        }
    }
    // (exits loop) return the remaining element of either array after the 'results' with the spread operator, inserting all elements of 'results', along with all of the left and right arrays
    return [...results, ...left, ...right]
    // same as:
    // return merged 'results' array
    // results.push(...left)
    // results.push(...right)
    // return results
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
