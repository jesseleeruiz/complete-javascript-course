/*
LECTURE 1
let js = 'amazing';

let result = 40 + 8 + 23 - 10;
let firstName = "Jesse"
let num = 23

console.log(result, firstName, num);

NOTES
Number: Floating point numbers -> Used for decimals & integers.
let age = 23;

String: Sequence of characters -> Used for text.
let firstName = "Jesse";

Boolean: Logical type that can only be true or false.

Undefined: Value taken by a var that is not yet defined ('empty value').
let children;

Null: Also means 'empty value'.

Symbol: Value that is unique and cannot be changed.

BigInt: Larger integers than the Number type can hold.

JavaScript has dynamic typing: We do not have to manually define the data type of the value stored in a var. Instead, data types are determined automatically.
*/

/*
LECTURE 2 - DATA TYPES


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jesse");

// Dynamic Typing
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

// Undefined
let year;
console.log(year);
console.log(typeof year);

year = 2020;
console.log(year);
console.log(typeof year);

console.log(typeof null); // Prints out object which is wrong.
*/

/*
LECTURE 3 - Let, Const, Var


let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;

// var should be avoided, but understood for legacy reasons.
*/

/* LECTURE 4 - BASIC OPERATORS
let currentYear = 2030;
const ageJesse = currentYear - 1989;
const ageLogan = currentYear - 2019;
console.log(ageJesse, ageLogan);

const firstName = "Jesse";
const lastName = "Ruiz";

console.log(firstName + " " + lastName);

// Assignment Operators

let x = 10 + 5;     // 15
x += 10;            // x = x + 10 = 25
x *= 4;             // x = x * 4 = 100
x++;                // x = x + 1 = 101
x--;                // x = x - 1 = 100

console.log(x);

// Comparision Operators
console.log(ageLogan < ageJesse);
*/

/* LECTURE 5 - OPERATOR PRECEDENCE

let currentYear = 2030;
const ageJesse = currentYear - 1989;
const ageLogan = currentYear - 2019;

console.log(currentYear - 1989 > currentYear - 2019);
*/

/*
// Test Data 1
let marksWeight = 78;
let marksHeight = 1.69;
let johnsWeight = 92;
let johnsHeight = 1.95;

let marksBMI = marksWeight / marksHeight ** 2;
let johnsBMI = johnsWeight / johnsHeight ** 2;

let markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI);
console.log(johnsBMI);
console.log(markHigherBMI);

// Test Data 2
marksWeight = 95;
marksHeight = 1.88;
johnsWeight = 85;
johnsHeight = 1.76;

marksBMI = marksWeight / marksHeight ** 2;
johnsBMI = johnsWeight / johnsHeight ** 2;
markHigherBMI = marksBMI > johnsBMI;
console.log(marksBMI);
console.log(johnsBMI);
console.log(markHigherBMI);
*/

/*
LECTURE 6 - STRINGS & TEMPLATE LITERALS


const firstname = "Jesse";
const job = "Software Engineer";
const birthYear = 1989;
const currentYear = 2037;

const jesse = "I'm " + firstname + ", a " + (currentYear - birthYear) + " year old " + job + "!";
console.log(jesse);

// Template Literals
const jesseNew = `I'm ${firstname}, a ${currentYear - birthYear} year old ${job}!`;
console.log(jesseNew)

console.log(`Just a regular string... No need to worry.`);

// Multi line before ES6
console.log("String with \n\
multiple \n\
lines");

// Template multi line string
console.log(`String
with multiple
lines! Woo Hoo!`)
*/

/*
LECTURE 7 - TAKING DECISIONS: IF/ELSE STATEMENTS

const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. She has to wait ${yearsLeft} more years.`)
}

const birthYear = 1989;
let century;

if (birthYear <= 2000) {
    century = `20th century`;
} else {
    centruy = `21st century`;
}

console.log(century);
*/

/*
LECTURE 7 - TYPE CONVERSION & COERCION


// Conversion - When we manually convert a type from one to another

// Strings to Numbers
const inputYear = "1991";
console.log(inputYear + 18); // 199118
const newYear = Number(inputYear);
const addedValue = newYear + 18;
console.log(addedValue);
console.log(typeof addedValue);

// Numbers to String
console.log(String(23));

// Type Coercion - JS converts one of the values to match the other one
const convertedNumber = "I am " + 23 + " years old."
console.log(convertedNumber);
console.log(typeof convertedNumber); // string

// Not all operators do type conversion to string
console.log('23' - '10' - 3);
// The minus operator convert them to a number whereas the addition operator adds them as a string
// The addition is the only one that converts to a string.
*/

/*
LECTURE 8 - TRUTHY AND FALSEY VALUES


// 5 falsey values: 0, '', undefined, null, NaN -> Will convert to false

console.log(Boolean(0));        // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jesse'));  // true
console.log(Boolean({}));       // true

const money = 0; // 0 converts to false which is why the else block is executed.
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job.");
}

let height;
if (height) {
    console.log("Yay! Height has a value!");
} else {
    console.log("Height is UNDEFINED");
}
*/

/*
LECTURE 9 - EQUALITY OPERATORS

const age = 18;
if (age === 18) console.log("You just became an adult!");

// === Strict equality operator. Does not do type coercion.
// == Does type coercion | '18' = 18 => true

const favorite = prompt("What's your favorite number?");
console.log(favorite);

if (favorite == 23) {
    console.log("Awesome. 23 is an amazing number.");
}
*/

/*
LECTURE 11 - LOGICAL OPERATORS

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("Sarah is able to drive.");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // var C

console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive.");
} else {
    console.log("Someone else should drive...");
}
*/

/*
LECTURE 13 - SWITCH STATEMENTS

const day = "Monday";

switch (day) {
    case "Monday": // day === "Monday"
        console.log("Work on design lessons.");
        console.log("Make sure to work out.");
        break;
    case "Tuesday":
        console.log("Work on iOS lessons.");
        break;
    case "Wenesday":
        console.log("Work on CS lessons.");
        console.log("Make sure to work out.");
        break;
    case "Thursday":
        console.log("Work on Web lessons.");
        break;
    case "Friday":
        console.log("Watch Logan.");
        console.log("Make sure to work out.");
        break;
    case "Saturday":
        console.log("Go to the beach.");
        break;
    case "Sunday":
        console.log("Clean the house.");
        break;
    default:
        console.log("Not a valid day!");
}
*/

/*
LECTURE 14 - STATEMENTS & EXPRESSIONS

// A piece of code that produces a value.
3 + 4   // This is an expression. It will produce a value.
1991
true && false && !false

// Statement is an expression, but does not produce a value.
if (23 > 10) {
    console.log("Do something");    // A statement, but doesn't really produce a value. The Expression
    // inside does.
}

// In a template literal, JS expects expression and not statements.
*/

/*
LECTURE 15 - THE CONDITIONAL (TERNARY) OPERATOR


const age = 31;

age >= 18 ? console.log("I like to drink beer 🍺") : console.log("I like to drink soda 🥤");

const drink = age >= 18 ? "beer 🍺" : "soda 🥤";
console.log(drink);

let anotherDrink;
if (age >= 18) {
    anotherDrink = "beer 🍺";
} else {
    anotherDrink = "soda 🥤";
}
console.log(anotherDrink);

// Can use in a template literal
console.log(`I like to drink ${drink}!`);
*/