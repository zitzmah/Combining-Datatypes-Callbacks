/**************************************** */
//SECTION 1: PROGRAMMING FUNDAMENTALS
/**************************************** */

//WRITE A ONE SENTANCE SUMMARY FOR EACH OF THE FOLLOWING PRINCIPLES
/*
DRY: Don't repeat information or code.

KISS: Keep it simple stupid is a principle of software development that aims to keep code simple and uncomplicated.

AVOID CREATING A YAGNI: You aren't going to need it is a principle of software development that states that functionality should not be added until it is necessary.

DO THE SIMPLEST THING THAT COULD POSSIBLY WORK: Principle of software development that essentially states the simpler the better.

DON'T MAKE ME THINK: Code should be easy to read and understand.

WRITE CODE FOR THE MAINTAINER: Your code should be easily understandable to anyone who has to maintain it in the future.

SINGLE RESPONSIBILITY PRINCIPLE: A component of code should have a single task.

AVOID PREMATURE OPTIMIZATION: Don't optimize your code unless you have to.

SEPARATION OF CONCERNS: Code should be separated into distinct sections that address a specific concern with minimal overlap between sections.
*/

//WHICH ONES SURPRISE YOU?
//I was most surprised by avoiding premture optimization.

//WHICH ONE IS CURRENTLY GIVING YOU THE MOST STRUGGLE?
//I am struggling the most with "do the simplest thing that could possibly work".

// COMMENTING CODE
const f = l => { //declaring a function
  let es = 0, p = 0, c = 1, n = 0 //declaring several variables and assigning them values
  while (c <= l) { //while loop: while variable c is less than or equal to l do the following
    n = c + p; //change the value of n to equal c plus p
    [c, p] = [n, c] //change the value of n to equal that of c and the value of c to equal that of p
    es += (c % 2 === 0) ? c : 0 //if c is even then add the value of c to es
  }
  return es //return es when the loop is finished running
}

console.log(f(55)) //return the function with an input of 55

//////////////////////////////////////////////////////////////
// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
//A more semantic name would have been "Sum of All Even Fibonacci Numbers"

////////////////////////////////////////////////////////
// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
//I would rather start working with f2. It's much easier to read

////////////////////////////////////////////////////////////
// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
//yes the semi-colon is necessary. If it's removed the compiler thinks that it is the left hand side of an argument.