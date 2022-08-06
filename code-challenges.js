// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:
//create a function that takes in two strings as arguments
//conditional to check which is longer string
//if string1 is longer return it else return the other string
//
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
//first method
const longestVar = (str1,str2) => {
    if(str1.length > str2.length){
    return str1;
} else {
    return str2;
}
}
console.log(longestVar(fruit1, fruit2))
console.log(longestVar(fruit3,fruit4))
// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point.
// Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: 
//"42 is below boiling point",
 //"350 is above boiling point", 
 //"212 is at boiling point"

// Pseudo code:
//create a function that takes in a given number named it boilingPoint
// if statement to check for anything 42 and below, if true return ...
//else if the temp = 212 say its at boiling
//else if temp is above 350 return is above boiling point
// stretch can I do this with another shorter one line method? Would it be inerpolation?
const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilngPoint = (num) => {
    if (num < temp1 ){
        return "temp is below boiling point"; 
    }else if
        (num = temp3){
            return "is at boiling point";
        } else if (num > temp2){ 
            return "is above boiling point";
        }
    };

console.log(boilngPoint(212))
// condition ? output if true : output if false
const boilBchecker 



// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:

const myNumbers1 = [3, 7, 0, 36, -9]  //1st array
const myNumbers2 = [8, -7, 42, 9, 13]  //2nd array

const lengthOf = myNumbers1.concat(myNumbers2);    //declaring a function and saying to concat them together into one array //
console.log (lengthOf.length); //return the new joined array's length expected output 10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"






// Pseudo code:
//in a console log us .split turn string into array then .join takes an array and returns a string then revese it  /withand .reverse //
const currentCohort = "Echo 2022"  
console.log(currentCohort.split(" ").join().reverse(" "));

//another way to solve this problem with a decrimenting loop in a function so that the code can be re used making it cool
 //declare a function backwards that can accept an argument of a string
//make a variable to hold the new string//
//for loop to iterate thru the string and starting at index -1 the last letter of the string,while i is >= o the loop will iterate
//adding the data at each index into a new string
// return the string reversed
//here we use the function created above to reverse the currentCohort//
const currentCohort = "Echo 2022"          
function backwards(str) { 
    var newCohort = "";               
    for (var i = str.length - 1; i>= 0; i-- ) {    
        newCohort += str[i]; 
    }
    return newCohort; 
}
const reverseLean = backwards(currentCohort); 
console.log(reverseLean); 

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
//create a statement or conditional starting at index 0, ending when i 
//this is the condition: for every index in array if the modulo or remainder of that index /2 =1
//the number is odd
//it is divided by 2 and the ///////
//
//
//
const myArray = [13, 34, 5, 10, 27, 42]


 for (let i = 0; i < myArray.length; i++) { 
    if (myArray[i] % 2 === 1) {   
        console.log("odd")
    } else if (myArray[i] % 2 === 0) {
        console.log("even");
    }
 }

//another way to solve shortened because we know if its not odd then it must be even 

const myArray = [13, 34, 5, 10, 27, 42]


 for (let i = 0; i < myArray.length; i++) { 
    if (myArray[i] % 2 === 1) {   
        console.log("odd")
    } else {
        console.log("even");
    }
 }
//

myArray[i] %2 console.log(my?  //can't use a ternary not sure how to set that up....abort idea

//turn array into string ..
//below was one of my first failed attempts..
// const oddOrEven = (myArray) >= {   tried to make a function but I realize thats wrong, needed to declare the starting and stopping point.
//     if (myArray[i]%2 == 0);{
//         return "odd"
//     } else {                                 
//         return "even"
//     }
// }
///create a statement const statement = 

// var number = 4
// if (number === 0) {
//     console.log("Number is zero");
// } else if (number % 2 == 0) {
//     console.log("The number even");
// } else { 
//         console.log("number is odd")
//     }
// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24



const numChecker = (num1,num2) => {         //create function takes in two nums1,2
    if (num1 > num2){                       //check to see if num1 is greater than 
        return(num1 -num2);                 //subtract it if it is
    }else {                                     
    return (num2-num1)                      //if not subract num2 -num1    
}
}
console.log(numChecker(number1,number2),numChecker(number3,number4));
       //run the functionnum