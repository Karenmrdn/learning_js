/* 'npm init' initializes project and creates 'package.json */

/* For node */
/* node S22_npm/ex317_installPackage.js  */

/* EXAMPLE 1 */
const moment = require("moment");

const a = 10;

const day = moment().format("dddd");

console.log(day);

/* TASK 1 */
const semver = require("semver");

console.log(semver.valid("1.2.3")); // '1.2.3'
console.log(semver.valid("1.2.3-beta.1")); // '1.2.3-beta.1'
console.log(semver.valid("1.2.3beta.1")); // null

console.log(semver.gt("1.2.3", "9.8.7")); // false
console.log(semver.lt("1.2.3", "9.8.7")); // true

console.log(semver.coerce("v3")); // object SemVer
