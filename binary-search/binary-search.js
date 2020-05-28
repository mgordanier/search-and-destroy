'use strict'

// Complete this algo
const binarySearch = (array, target) => {
  if (array.length < 2) {
    return array[0] === target
  }

  const middleIdx = Math.floor(array.length / 2)
  const middleValue = array[middleIdx]

  if (target === middleValue) {
    return true
  } else if (target < middleValue) {
    return binarySearch(array.slice(0, middleIdx), target)
  } else {
    return binarySearch(array.slice(middleIdx + 1), target)
  }
}

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
