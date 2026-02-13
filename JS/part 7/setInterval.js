let counter = 0;

let intervalId = setInterval(() => {
    counter++;
    console.log("counter: ",counter);
    if(counter === 5){
        clearInterval(intervalId);
        console.log("stoped the interval");
    }
}, 6000);