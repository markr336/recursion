/* Pseudocode
    If only one number
        Return
    Else
        Sort the left half of the array (assuming n > 1)
        Sort the right half of the array (assuming n >1)
        Merge the two halves togethers ==> merge function

*/
function mergeSort(arr) {
    if (arr.length == 1) {      // Base Case
        return arr
    }

    if (arr.length > 1) {      // Recursive Call
        let leftArr = mergeSort([...arr.slice(0, (arr.length / 2))])
        let rightArr = mergeSort([...arr.slice(arr.length / 2 , arr.length)])
        return merge(leftArr, rightArr)
    }
}

// 2 lists to return 1 list
// index pointers: i for list 1, j for list 2 & k to copy
// index moves to next item in array that it's copied from as well as k
// if oen of the lists is finished, copy the last item to k
// m & n are the lengths of the array
function merge(arr1, arr2) {
    let index1 = 0
    let index2 = 0
    const sortedArr = []

    // First stage compares numbers in the array
    while (index1 < arr1.length  && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            sortedArr.push(arr1[index1])
            index1++
        } else {
            sortedArr.push(arr2[index2])
            index2++
        }
    }
    
    // Second stage copies remaining elements to sortedArr
    for (; index1 < arr1.length; index1++) {
        sortedArr.push(arr1[index1])
    }
    for (; index2 < arr2.length; index2++) {
        sortedArr.push(arr2[index2])
    }

    return sortedArr
}

// console.log(merge([2, 8, 15, 18], [5, 9, 12, 17]))

console.log(mergeSort([1, 3, 6, 2, 4]))

console.log('test 1: ', mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log('test 2: ', mergeSort([105, 79, 100, 110]))