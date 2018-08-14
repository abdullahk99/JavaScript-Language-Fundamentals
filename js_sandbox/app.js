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
//console.log(name2);
// however we can not do the following
// name2 = 'Sara';
// we always have to assign an inital value with const

// With objects its important to understand you can change what is inside an
// object but can not assign the variable it refers to to something else

// we have two different types of data types:
// PRIMATIVE - string, number, boolean, null, undefined, symbol
// REFERENCE (will all be objects) - Arrays, object litteral, date,

// TYPE CONVERSION -- taking a variable and changing its data type
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

// Working with Math object
// Math is an object so it has properties and methods
val = Math.PI;
val = Math.round(3.4);
// also have ceilign and floor
val = Math.ceil(3.4);
val = Math.floor(4.3);

// if we want a random number between 0 and 19
val = Math.round(Math.random() * 20);


// STRING AND CONCATENATION

// we have a concat method
const firstName = 'Abd'
const lastName = 'Khokhar'
const str = 'Hello there my name is ABD'

val = firstName.concat(' ', lastName);

// we can also index into strings
val = firstName[0];
// if we want to find the index use mehtod indexof()
val = firstName.indexOf('A'); // looks for first time it sees the letter A
// to go the other way we can use lastIndexof()
// also can use charAt() to find the character at a spesific index

// we can also generate substrings
val = lastName.substring(0,4);

// can split a string into an array based on a seperator by using split()
val = str.split(' ');
// we also have replace() and includes()

// // TEMPLATE LITTERALS
// const myName = 'Abdullah';
// const age = 19;
// const job = 'Web Developer';
// const city = 'Brampton';
// let html;
//
// /*
// // without template strings (es5)
// html = '<ul>' +
//        '<li>Name: ' + myName + '</li>' +
//        '<li>Age: ' + age + '</li>' +
//        '<li>Job: ' + job + '</li>' +
//        '<li>City: ' + city + '</li></ul>';
// */
//
// // with template strings
// // we use back tics
// html = `
//   <ul>
//     <li>Name: ${myName}<li>
//     <li>Age: ${age}<li>
//     <li>Job: ${job}<li>
//     <li>City: ${city}<li>
//   <ul>
// `;
// // can do conditionals, functions and so on inside template strings
//
// document.body.innerHTML = html;

// ARRAYS
const numbers = [43, 56, 33, 23, 44, 36, 5]
const numbers2 = new Array(22, 45, 33, 76, 54);
// can also have null, undefined, bool, dates, an object etc.. in an Array
const mixed = ['hello', 33, true, undefined, null, {a: 1, b: 1} ]

let curr;

// get array length
curr = numbers.length;
// check if is array
curr = Array.isArray(numbers);
// get a simgle value from the Array
curr = numbers[3];
// insert into Array
numbers[2] = 100;
// find index of a value
curr = numbers.indexOf(36);

// MUTATUION OF AN Array
// add on to the end of an Array
numbers.push(250);
// add on to the front of an Array
numbers.unshift(120);
// take off from the end
numbers.pop();
// take off from the front
numbers.shift();
// Splice out values from any place in the Array
numbers.splice(1,3); // start and stop
// Reverse the Array
numbers.reverse(); // switches front and back
// concatenate arrays
curr = numbers.concat(numbers2);


// sorting arrays
curr = numbers.sort(); // this on its own sorts indivisual elements in the array
// we have to use the 'compare' functions
curr = numbers.sort(function(x,y){
  return x - y;
});

// Find
function under50(num){
  return num < 50;
}

curr = numbers.find(under50); // looks at our array and finds the first number under 50
// right now we are now we are mutating the array above so disregard the result


// OBJECT LITTERALS
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  hobbies: ['cricket', 'music'],
  adress: {
    city: 'miami',
    state: 'florida',
  },
  getBirthYear: function(){
    return 2018 - this.age; // this protains the current object
  }
}

let var2;

var2 = person;
// get a spesific values
var2 = person.firstName;
var2 = person.adress.state;
var2 = person.getBirthYear();
// console.log(var2);
// can also make an array of objects
const people = [{name: 'steve', age:'10'}, {name: 'abd', age: '30'}];
// can loop through these
for(let i = 0; i < people.length; i++){
  //console.log(people[i].name);
}



// DATES AND TIMES
let val3;

const today = new Date(); // if we do not pass in anything here it will be by default todays date
let birthday = new Date('9-10-1999 11:25:00'); // this spesifes a spesific date
birthday = new Date('November 17 1999'); // there are a lot of ways to define the date
val3 = today.getMonth(); // this is 0 based, so 0 represents january
val3 = today.getDay(); // Sunday represented by 1
birthday.setFullYear(2000);
//console.log(typeof val3); // the date is a reference type which is an object
//console.log(birthday);



// If statement comparison operators

// the basic structire
// if(something is true){
//   do something
// } else {
//   do somethign else
// }

const id = 100;

// EQUAL TO operator --> ==
if(id == 100){
  console.log('correct');
} else {
  concole.log('incoorect');
}

// NOT EQUAL TO operate --> !=
// EQUAL TO VALUE AND TYPE operator --> ===
// NOT EQUAL TO VALUE AND TYPE operator --> !==

// to check if ID exists
if(typeof id != 'undefined'){
  console.log(`The ID IS ${id}`);
} else {
  console.log('no ID');
}

// GREATER THAN OR LESS THAN operator --> >, >=, <, <=

// IF ELSE
const color = 'red'

if(color === 'red'){
  console.log('color is red');
} else if(color === 'blue'){
  console.log('color is blue');
} else {
  console.log('color is not red or blue');
}

// LOGICAL OPERATORS
const name3 = 'Steve';
const age = 20;

// AND operator represented by &&
if(age > 0 && age < 12){
  console.log(`${name3} is a child`)
}
// OR operator ||

//TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT'); //ternary operator is ? and else is reprented by :


// SWITCHES --> another way to validate conditions
// instead of if else we will use a switch
// inside of a switch you define different cases

const color2 = 'orange'

switch(color2){
  case 'red': // case when we have color2 being red
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:
    console.log('color is not either of them');
    break;
}
