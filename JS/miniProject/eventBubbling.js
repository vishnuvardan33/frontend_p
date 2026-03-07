// let div = document.querySelector('div');
//let ul = document.querySelector('ul');
//let lis = document.querySelectorAll('li');

// div.addEventListener('click', function() {
//     console.log('Div clicked');
// });

// ul.addEventListener('click', function() {
//     console.log('UL clicked');
// });

//for( let li of lis) {
//    li.addEventListener('click', function() {
//        console.log('LI clicked');
//    });
//};

// Event Bubbling: When an event occurs on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors. This is called bubbling because the event bubbles up from the target element to the root of the document.
//to stop this bubbling we can use event.stopPropagation() method. This method prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.

let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener('click', function() {
    console.log('Div clicked');
});

ul.addEventListener('click', function(event) {
    console.log('UL clicked');
    event.stopPropagation(); // This will stop the event from bubbling up to the div
}); 

for( let li of lis) {
    li.addEventListener('click', function(event) {
        console.log('LI clicked');
        event.stopPropagation(); // This will stop the event from bubbling up to the ul and div
    });
};