document.createElement("p");
let newp = document.createElement("p");
newp.innerText = "i am red";
newp.style.color = "red"

let body = document.querySelector("body");
body.appendChild(newp);

document.createElement("h3");
let newh3 = document.createElement("h3");
newh3.innerText = "i am blue";
newh3.style.color = "blue";
body.appendChild(newh3);

