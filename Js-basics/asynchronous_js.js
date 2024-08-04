// Promises

// example
// const event = new Promise((resolve, reject) => {
//     var name = "Shoaib";
//     if (name == "Shoaib") {
//         resolve(name);
//     } else {
//         reject("Name was not Shoaib, name was: " + name);
//     }
// });

// Most of the time, we will be using the following
// event.then((name) => {
//     console.log(name);
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("PROMISE FINISHED")
// });

// Actual demonstration
// const axios = require("axios");

// const data = axios.get("https://cat-fact.herokuapp.com/facts");
// data.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log("Promise Resolved");
// })

// ---------------------------------------------------------------

// Async / Await 

// const axios = require("axios");

// // if not using arrow functions
// // async function fetchData() {
// //     const data = axios.get("https://cat-fact.herokuapp.com/")
// // }

// // with arrow function
// const fetchData = async () => {
//     try {
//         const data = await axios.get("https://cat-fact.herokuapp.com/faccdlcmdml")
//         console.log(data);
//     } catch  (err) {
//         console.log(err)
//     } finally {
//         console.log("Finished!");
//     }
// };

// fetchData();

