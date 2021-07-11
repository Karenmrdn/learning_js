"use strict";

/* VAR - declared and initialized(compilation), assigned(execution) 
LET - declared(compilation), initialized and assigned(execution)
CONST - declared(compilation), together initialized and assigned(execution) */

// console.log(a); // ERROR
let a;
console.log(a); // undefined
a = 10;
console.log(a); // 10

const b = 20;
console.log(b); // 20

/* !!! We can access 'a' in console by simply typing 'a' and it will work
because 'a' is declared in global scope, but we cannot access 'a' by
typing in console 'window.a' because LET and CONST variables are not a window props */


