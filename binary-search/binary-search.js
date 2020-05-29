'use strict'

// Complete this algo
// const binarySearch = (array, target) => {
//   if (array.length < 2) {
//     return array[0] === target
//   }

//   const middleIdx = Math.floor(array.length / 2)
//   const middleValue = array[middleIdx]

//   if (target === middleValue) {
//     return true
//   } else if (target < middleValue) {
//     return binarySearch(array.slice(0, middleIdx), target)
//   } else {
//     return binarySearch(array.slice(middleIdx + 1), target)
//   }
}



/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

const binarySearch = (array, target) => { 
  let startPointer = 0 
  let endPointer = array.length - 1 
  while (endPointer >=  startPointer) { 
    let middleIdx = startPointer + Math.floor((endPointer - startPointer) / 2)
    let middleValue = array[middleIdx] 
    if (target === middleValue) { 
      return true
    } 
    if (target > middleValue) { 
      startPointer = middleIdx + 1
    } else {
      endPointer = middleIdx - 1 
    }
  }
  return false
}

module.exports = binarySearch
