/*************************************************** */
//Callbacks
/**************************************************** */

add = (num1, num2) => {
    return num1 + num2
}

subtract = (num1, num2) => {
    return num1 - num2
}

multiply = (num1, num2) => {
    return num1 * num2
}

divide = (num1, num2) => {
    return num1 / num2
}

//Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
//Call calculate 4 times, each time using one of the operation functions you wrote
calculate = (num1, num2, operates) => {
    return operates(num1, num2)
}

console.log(calculate(6, 4, divide))
console.log(calculate(10, 12, multiply))
console.log(calculate(30, 20, add))
console.log(calculate(30, 15, subtract))

/********************************************* */
//Function Definition Placement
/******************************************** */

//Clean up this code, so that it works and has function definitions in the correct place

const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();

// QUESTION: What is meant by the error(s) this produces?

// foo();

// const foo ()=>{
//     console.log('hi');
// }

//ANSWER: The function has to be declared before you can call it.

/********************************************* */
// SECTION 3 ARRAY METHODS WITH CALLBACKS
/********************************************** */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
// Determine if every number is greater than or equal to 0
// determine if every word shorter than 8 characters
let everyNum;
nums.forEach(v => {
    if (everyNum === undefined || everyNum === true && v >= 0) {
        everyNum = true;
    } else {
        everyNum = false
    }
})
console.log(everyNum)

let everyPan;
panagram.forEach(v => {
    if (everyPan === undefined || everyPan === true && v.length < 8) {
        everyPan = true;
    } else {
        everyPan = false;
    }
})
console.log(everyPan)

// Find
// Find the first value divisible by 5
// find the first word that is longer than 5 characters
let findNums;
nums.forEach(v => {
    if (findNums === undefined && v % 5 === 0) {
        findNums = v;
    }
})
console.log(findNums)

let findPan;
panagram.forEach(v => {
    if (findPan === undefined && v.length > 5) {
        findPan = v;
    }
})
console.log(findPan)
// Find Index
// find the index of the first number that is divisible by 3
// find the index of the first word that is less than 2 characters long
let indexNums;
nums.forEach(v => {
    if (indexNums === undefined && v % 3 === 0) {
        indexNums = nums.indexOf(v)
    }
}
)
console.log(indexNums)

let indexPan;
panagram.forEach(v => {
    if (indexPan === undefined && v.length < 2) {
        indexPan = panagram.indexOf(v)
    }
})
console.log("this is indexPan", indexPan)


// For Each
// console.log each value of the nums array multiplied by 3
// console.log each word with an exclamation point at the end of it
let forEachNum;
nums.forEach(v => {
    console.log(`${v * 3} `)
})

panagram.forEach(v => {
    console.log(`${v}!`)
})

// Map
// make a new array of each number multiplied by 100
// make a new array of all the words in all uppercase
let mapNum = [];
nums.forEach(v => {
    mapNum.push(v * 100)
})
console.log(mapNum)

let mapPan = [];
panagram.forEach(v => {
    mapPan.push(v.toUpperCase())
})
console.log(mapPan)

// Some
// Find out if some numbers are divisible by 7
// Find out if some words have the letter a in them
let someNum;
nums.forEach(v => {
    if (someNum === undefined && v % 7 === 0) {
        someNum = true;
    }
})

if (someNum === undefined) {
    someNum = false;
}
console.log(someNum)

let somePan;
panagram.forEach(v => {
    if (somePan === undefined && v.includes('a')) {
        somePan = true;
    }
})

if (somePan === undefined) {
    somePan = false;
}
console.log(somePan)