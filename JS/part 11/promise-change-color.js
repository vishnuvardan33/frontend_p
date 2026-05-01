h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("Color changed to " + color);
        }, delay);
    });
}
changeColor("red", 1000)
    .then(()=>{
        console.log("red color applied");
        return changeColor("orange", 1000);
    })
    .then(()=>{
        console.log("orange color applied");
        return changeColor("green", 1000);
    })
    .then(()=>{
        console.log("green color applied");
        return changeColor("blue", 1000);
    })
    .then(()=>{
        console.log("blue color applied");
    })
    .catch((error)=>{
        console.log("Error: " + error);
    });