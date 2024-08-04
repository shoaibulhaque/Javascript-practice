/* Variables

1. var
Scope: Function-scoped (or globally scoped if declared outside a function).
Mutability: Can be reassigned. */

// function myFunction() {
//     var x = 10;  // Declared within a function, so function-scoped
//     console.log(x); // output 10
// }

// myFunction();
// console.log(x); // ReferenceError: x is not defined (not accessible outside the function)

// ----------------------------------------------------------------------------------------

/* 2. let
Scope: Block-scoped (within a block, like an if statement or a loop).
Mutability: Can be reassigned. */

// function myFunction() {
//     if (true) {
//         let y = 20;
//         console.log(y); // output 20
//     }

//     console.log(y) // Error: as in the same function, but outside the block
// }

// myFunction();

// -------------------------------------------------------------------------------------

/* 3. const
Scope: Block-scoped.
Mutability: Cannot be reassigned (but properties of objects and arrays can be modified).
*/

// const z = 20;
// console.log(z);
// z = 40; // TypeError: Assignment to constant variable

/*
Key Differences and Best Practices:

var is generally avoided in modern JavaScript due to its potential for unexpected behavior, especially in complex code.
let is the most commonly used for variables that need to be reassigned.
const is preferred for values that should remain constant throughout the code to improve code readability and prevent accidental modifications.
*/

// -------------------------------------------------------------------------------------------------------------------------------------------

// // Normal Function
// function DoSomething() {
    
// }

// // Arrow function
// const DoSomething = () => {
    
// }

// ------------------------------------------------------------------------------------------------------------------------------------------

// Some more examples

// In react, you can do
// {/* <button onclick = {() => {
//     console.log("Hello World");
// }} 
// ></button> */}

// -----------------------------------------------------------------------------------------------------------------------------------------

// callback = a function that is passed as an argument
//                    to another function.

//                    used to handle asynchronous operations:
//                    1. Reading a file
//                    2. Network requests
//                    3. Interacting with databases

//                    "Hey, when you're done, call this next."

// hello(goodbye);

// function hello(callback){
//     console.log("Hello!");
//     callback();
// }

// function goodbye(){
//     console.log("Goodbye!");
// }

/* 
Synchronous vs. Asynchronous:

- Synchronous: Code is executed line by line. The next line doesn't start until the previous one finishes.   
- Asynchronous: Code can continue to execute while waiting for other operations to complete. This is typically achieved using events, callbacks, promises, or async/await.
*/  

// function fetchData(url, callback) {
//     // Simulate fetching data from a server
//     setTimeout(() => {
//       const data = { name: 'John Doe', age: 30 };
//       callback(data); // Call the callback function with the fetched data
//     }, 2000); // Simulate a 2-second delay
//   }
  
//   fetchData('https://api.example.com/data', (data) => {
//     console.log('Received data:', data);
//   });
// console.log('This message will be printed immediately'); // This line will execute before the callback

/* 
Key Points:
- The fetchData function doesn't wait for the data to be fetched before returning. It schedules the callback to be executed later using setTimeout.
- The code after calling fetchData continues to execute immediately.
- After 2 seconds, the callback function is called with the simulated data.

To visualize this better, imagine the code execution as a series of steps:

- The code starts executing from the top.
- It encounters the fetchData call.
- fetchData is called, and the callback function is stored.
- The code continues to execute after the fetchData call.
- After 2 seconds, the callback function is executed.
*/

// --------------------------------------------------------------------

// Ternary Operators 

// let name1 = age > 10 && "Shoaib";

// let name2 = age > 10 ? "Shoaib" : "Shobi";

/* -------------------------------------------------------------------
----------------------------------------------------------------------
*/

// Objects *

// const person = {
//     name: "Shoaib",
//     age: "20",
//     isMarried: false,
// }

// const name = person.name
// const age = person.age
// const isMarried = person.isMarried

// The above is fine but is taking too many lines, we can
// do the following instead

// const { name, age, isMarried } = person

//----------------------------------------

// const person1 = {
//     name: "Pedro",
//     age: 20,
//     isMarried: false,
//   };

// As person2 has all the things same as person 1, just the name is diff
// const person2 = {...person1, name: "Jack" };

// The spread operator also works in the diff ways, for eg: with arrays
// const names1 = ["Shoaib", "Faiz", "Saqib"]
// const names2 = [...names, "Khizer"] // names2 has all the names 
// existing in names1 with one extra i.e "Khizer"
  
//------------------------------------------

// map(), filter()




// ------------------------------------------

// Async + Await + Fetch 