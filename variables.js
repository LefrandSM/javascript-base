// Variables are Containers for Storing Data
/*

Meaning
Variables are containers for storing values.

JavaScript Variables can be declared in 4 ways:

Automatically
Using var
Using let
Using const

Note
The var keyword was used in all JavaScript code from 1995 to 2015.

The let and const keywords were added to JavaScript in 2015.

The var keyword should only be used in code written for older browsers.

When to Use var, let, or const?
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you can't use const

5. Only use var if you MUST support old browsers.

*/

// const price1 = 5;
// const price2 = 6;
// let total = price1 + price2;
// console.log(total);
/*
The two variables price1 and price2 are declared with the const keyword.

These are constant values and cannot be changed.

The variable total is declared with the let keyword.

The value total can be changed.
*/


// One Statement, Many Variables
/*
You can declare many variables in one statement.

Start the statement with let and separate the variables by comma:
*/
// let person = "Lefrand",
//     carName = "VW",
//     price = 2000;

// Re-Declaring JavaScript Variables
/*
If you re-declare a JavaScript variable declared with var, it will not lose its value.

The variable carName will still have the value "Volvo" after the execution of these statements

Note
You cannot re-declare a variable declared with let or const
*/
// var carName = "Volvo";
// var carName;

// JavaScript Arithmetic
// let x = "5" + 2 + 3; will 523
// let x = 2 + 3 + "5"; will 55
// Note
// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.



// JavaScript Let
/*
The let keyword was introduced in ES6 (2015)

Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope
*/


// Javascript Const
/*
The const keyword was introduced in ES6 (2015)

Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope

When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp
*/
