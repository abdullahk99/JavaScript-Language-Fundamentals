// VAR

// var, let, const are ways to declare variables
var name = 'John';
// you can re-assign the value of a variables

// We can also inialize a variables
var greeting;
// this is actually setting it to undefined
// we can however assign a value to it after
greeting = '';

// LET

// let has advantages at block level scoping
// let works the same ways
let name1 = 'Abdullah';

// CONST
// these work differntly, constants can not be reassigned or changed
const name2 = 'Monkey';
console.log(name2);
// however we can not do the following
// name2 = 'Sara';
// we always have to assign an inital value with const

// With objects its important to understand you can change what is inside an
// object but can not assign the variable it refers to to something else

// we have two different types of data types:
// PRIMATIVE - string, number, boolean, null, undefined, symbol
// REFERENCE (will all be objects) - Arrays, object litteral, date,

// Type Conversion -- taking a variable and changing its data type
let val;
// number to string
val = 3;
val = String(3); //changes val to a string now
// bool to a String
val = String(true);
// we also have the .tostring method
val = true.toString();

// strings to numbers
val = '5';
val = Number(val);
// what happens if we parse a boolean as a true value
val = Number(true); // true gives us 1, false gives us 0, null also gives us 0
// when a value gets parsed as a number and cant we get NaN (not a number)

// we have somethign called parseint
val = parseInt('199'); // this gives us a number (an initeger)
val = parseFloat('123.23') // this will gives us 123.2
