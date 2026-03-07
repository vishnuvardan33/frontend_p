let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener('click', function() {
    console.log('Div clicked');
});

ul.addEventListener('click', function() {
    console.log('UL clicked');
});

for( let li of lis) {
    li.addEventListener('click', function() {
        console.log('LI clicked');
    });
};