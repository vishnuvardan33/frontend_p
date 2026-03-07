//1st excute the code and see what it does
//this code is  only creating a list of items in the webpage

//let btn = document.querySelector("button");
//let ul = document.querySelector("ul");
//let inp = document.querySelector("input");

//btn.addEventListener("click", function () {
//    let item = document.createElement("li");
//    item.innerText = inp.value;
//    ul.appendChild(item);
//    inp.value = "";
//});

//2nd excute the code and see what it does
//this code is adding and removing items from the list

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");  

btn.addEventListener("click", function () {
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = ""; 
});

let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        let par = this.parentElement;
        console.log(par);
        par.remove();   
    });
}
