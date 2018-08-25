// The Window is the global object in client side JavaScript
// right now the window/browser is the global enviroment while in node.js is your loval computer


// WINDOW METHODS/ OBJECTS / PROPERTIES

// Alert
window.alert('Hello World'); // most of the time you do not see the window part!

// Promt
// similar to alert but takes an input
const input = prompt();
alert(input);

// CONFIRM
if(confirm('are you sure')){ //takes parameter of the msg
  // if they click ok, whatever u put here runs
  console.log('yes');
} else {
  console.log('NO');
}


// height and the width of the WINDOW
let val;
// outter height and width
val = window.outerHeight;
val = window.outerWifth;
// we also have inner height and width

// Scroll Points
val = window.scrollY;
// you can do the same thing with horizontal scroll by using // X


// Location Object
val = window.location;
// you can use some of the detials from location
val = window.location.hostname;

// Redirect
// when page reloads we get redirected to google
//window.location.href = 'http://google.com';

// Reload
//window.location.reload(); // this will make it just keep relaoing

// HISTORY OBJECT
// you can get your browsing history
// window.history.go(); // -1 will take u to site before and so on


// NAVIGOATOR OBJECT
// has to do with browser itself not enviroment
val = window.navigator;
val = window.navigator.appName; // can grab a lot if info like so


// BLOCK SCOPE with let and const

// Global Scope
var a = 1;
let b = 2;
const c = 3;

console.log('Global Scope: ', a, b, c);

function test(){
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('function Scope: ', a, b, c);
}

test();
// the point is, even tho the variables have the same names they are different as they are in different scopes
// one is in a global while other in a function scope

// we also have block level scopes, such as if, while, for loops

// now the way let and const work is how most programign langiages work
// but we have var to be 4
if(true){
  var a = 4;
  let b = 5;
  const c = 6;
  console.log('Global Scope: ', a, b, c);
}

// let and cost have a block level scope, var has a functions scope 



console.log(val);
