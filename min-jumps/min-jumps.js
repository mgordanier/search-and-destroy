'use strict'

// MY SOLUTION
// time: Omega(1), O(n)
const minJumps = (arr) => {
  let jumpCount = 0
  let currIdx = 0

  while (currIdx < arr.length) {
    const maxSteps = arr[currIdx]

    if (currIdx + maxSteps >= arr.length - 1) {
      jumpCount++
      return jumpCount
    } else {
      let mostStepsFor2Jumps = 0
      let bestNextIdx = currIdx + 1
      for (let steps = 1; steps <= maxSteps; steps++) {
        const nextIdx = currIdx + steps
        const nextMaxSteps = arr[nextIdx]
        if (steps + nextMaxSteps > mostStepsFor2Jumps) {
          mostStepsFor2Jumps = steps + nextMaxSteps
          bestNextIdx = nextIdx
        }
      }
      currIdx = bestNextIdx
      jumpCount++
    }
  }
}

// OFFICIAL SOLUTION
// time : Omega(n^2), O(n^2)

// const minJumps = arr => {
// 	let jumps = arr.map(el => Infinity)
// 	jumps[0] = 0;

// 	for(let i = 1; i < jumps.length; i++){
//     for(let j = 0; j <= i; j++){
// 			if(j + arr[j] >= i) {
// 				jumps[i] = Math.min(jumps[i], jumps[j] + 1)
// 			}
// 		}
// 	}
// 	return jumps[arr.length - 1];
// };

module.exports = minJumps
