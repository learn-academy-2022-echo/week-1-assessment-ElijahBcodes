// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: The output will be the length of the string in cohort = 10, it also counts blank space.
// b) Verify and explain: The output was 10 as expected. When you add .length to a variable the return will be the length of the string inside that variable.


// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: The output will be what is at index 4 in the string greeting, which is o
// b) Verify and explain: arrays are zero indexed and so the g is index 0 and o is index 4.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: the output will be Ruby. 
// b) Verify and explain: The console.log calls upon the const languages and takes in the argument of Index and Index was declared as equal to 1 so it will be the string at index 1 that will return.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: This will return the string but with all of the letters capitalized.
// b) Verify and explain: there was no output. The error said that weekendDays.toUpperCase() is not a function. We can only use the .toUpperCase on a string and the above is an array. would have to do use the join, then the to uppercase, then the split to achieve this. 
console.log(weekendDays.join(" ").toUpperCase().split(" "))


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: when you invoke typeof it returns a string telling us what type of data is there but here we are changing the data to represent the .length of that array. So we get number becasue that is what we are asking in length
// b) Verify and explain: The output was number as expected. .length made the array into a number and typeof tells us what the data represents.
