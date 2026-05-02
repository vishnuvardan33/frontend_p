h1 = document.querySelector('h1');

function changecolor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`Changed color to ${color}`);
            resolve("Color changed successfully");
        }, delay);
    });
}

async function demo(){
    await changecolor('red', 1000);
    await changecolor('blue', 1000);
    await changecolor('green', 1000);
    await changecolor('orange', 1000);
    await changecolor('purple', 1000);
}