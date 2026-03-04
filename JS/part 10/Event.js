let p = document.querySelector("p");

p.addEventListener("click", function(){
    console.log("Paragraph was clicked");
});

let box = document.querySelector(".box");


//box.addEventListener("mouseout", function(){
  //  console.log("Mouse is out of the box");
//});

//box.addEventListener("mousemove", function(){
  //  console.log("Mouse is moving inside the box");
//});

box.addEventListener("keypress", function(){
    console.log("Key was pressed while the box is focused");
});

box.addEventListener("scroll", function(){
    console.log("Box is being scrolled");
});

//box.addEventListener("load", function(){
  //  console.log("Box has loaded");
//});