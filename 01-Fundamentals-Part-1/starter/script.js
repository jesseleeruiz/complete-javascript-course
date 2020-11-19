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
*/
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