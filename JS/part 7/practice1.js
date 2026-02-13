//this is 1st quation

// let square = (x) => x * x;
// console.log(square(5));

//this is 2nd quation

// let counter = 0;
// let intervalId = setInterval(() => {
//     counter++;
//     console.log("HELLO WORLD: ",counter);
//     if(counter === 5){
//         clearInterval(intervalId);
//         console.log("stopped the interval");
//     }
// }, 2000);

//or

let id = setInterval(() => {
    console.log("HELLO WORLD");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 12000);
