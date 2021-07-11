"use strict";

/* TASK 1 */
/* Create a function "weatherForecast" with two parameters "city" and "weather". 

If second argument is absent, "weather" parameter should get value "Great weather!".

1. First solve this WITHOUT default function parameter.
2. Comment previous solution and solve same task WITH default function parameter.

NOTE: Carefully compare your results with test calls results
*/

// function weatherForecast(city, weather = "Great weather!"){
//     // weather = weather ?? "Great weather!";
//     return `Weather forecast for ${city}: ${weather}`
// }

// console.log(weatherForecast("Dubai", "Sunny"));
// // Weather forecast for Dubai: Sunny

// console.log(weatherForecast("London", "Light rain"));
// // Weather forecast for London: Light rain

// console.log(weatherForecast("Paris"));
// // Weather forecast for Paris: Great weather!

// console.log(weatherForecast("Miami", ""));
// // Weather forecast for Miami:

// console.log(weatherForecast("Las Vegas", undefined));
// // Weather forecast for Las Vegas: Great weather!

/* TASK 2 */
/*
Create a function "tasksSortedByIds" with two parameters "tasks" and "tasksWithIds".

1. Before performing any actions inside of the function you need to generate unique 4-digit "taskId" for each task where it is missing.

2. At the beginning of the function log to the console quantity of the missing taskIds:
"Quantity of the missing taskIds is 2"

3. Function should return array of tasks sorted by "taskId". All tasks in the sorted array must have "taskId".

NOTE: Original "tasks" array should remain unchanged.

NOTE: Hints down below!

BONUS: Ensure that new unique 4-digit "taskId" is not the same as any "taskId" of the existing tasks.
*/

const tasks = [
  { title: "Meeting with John", taskId: 4621 },
  { title: "Visit gym", taskId: 6821 },
  { title: "Buy new phone" },
  { title: "Clean the room", taskId: 2721 },
  { title: "Plan a trip" },
];

console.log("Sorted array of tasks with taskIds:", tasksSortedByIds(tasks));
/* 
  Quantity of the missing taskIds is 2
  Sorted array of tasks with taskIds: ...
  */

console.log("Original unsorted array of tasks with missing taskIds:", tasks);
/*
  Original unsorted array of tasks with missing taskIds: ...
  */

/* HINTS
  1. Use default value for the second parameter "tasksWithIds". This default value should be a function call - "generateTasksIds()".
  
  2. "generateTasksIds" function should have one parameter "tasks".
  
  3. Use .map inside of the "generateTasksIds" to create new array of tasks and return this new array as result of the "generateTasksIds" function call. 
  
  4. Inside of the callback function for .map call create first copy of the object ("task") to avoid mutation of the "tasks" array.
  
  5. Generate new "taskId" using following syntax
  Math.floor(1000 + Math.random() * 9000)
  
  6. BONUS (Ensure that newly generated "taskId" doesn't match "taskId" of any of the existing tasks.
  Use "do-while" loop and generate new "taskId" until it will be absent in other tasks. 
  */
