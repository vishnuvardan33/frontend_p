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

document.createElement("div");
let newdiv = document.createElement("div");
newdiv.style.backgroundColor = "pink";
newdiv.style.borderColor = "black";

body.appendChild(newdiv);

document.createElement("h1");
let newh1 = document.createElement("h1");
newh1.innerText = "i am in div";
newdiv.appendChild(newh1);

document.createElement("p");
let pp2 = document.createElement("p");
pp2.innerText =" me too";
newdiv.appendChild(pp2)