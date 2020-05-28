'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    // console.log(linkedlist)

    let node = linkedlist.head
    const arr = []

    while (node.next) {
        if (arr.includes(node.value)) {
            return true
        } else {
            arr.push(node.value)
        }
    }

    return false
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop