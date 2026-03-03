let btns = document.querySelectorAll('button');

for(btn of btns){
    btn.addEventListener('click', sayHello);
    btn.addEventListener('click', sayName);
}

function sayHello(){
    alert('Hello!');
}

function sayName(){
    alert('My name is John!');
}
//addEventListener example