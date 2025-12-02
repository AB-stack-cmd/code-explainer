const { rejects } = require("assert");
const { error } = require("console");
const { resolve } = require("path");


let promise = new Promise((resolve, rejects) => {
    let success = true
    setTimeout(() => {
        if (success) {
            resolve("sucessfully fetch")
        } else {
            rejects("no data fetched")
        }
    }, 2000)
})

async function fetch() {
    console.log("fetching...")

}

// use .then 
promise.then((message) => { console.log(resolve) })
    .catch((error) => { console.log(rejects) })
    .finally(() => { console.log("finally completed") })