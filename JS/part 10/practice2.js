//on mouse enter example
let btns = document.querySelectorAll('button');

for (btn of btns){
    btn.onclick = function(){
        alert('Button clicked!');
    }
    btn.onmouseenter = function(){
        alert('Button hovered!');
    }
}