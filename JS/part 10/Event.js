let p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("Paragraph was clicked");
});

let box = document.querySelector(".box");

box.addEventListener("mouseover", function(){
    console.log("Mouse is over the box");
});