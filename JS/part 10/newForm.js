//let form = document.querySelector('form');

//form.addEventListener('submit', function(event) {
//    event.preventDefault(); // Prevent the default form submission behavior

//    let user = document.querySelector('#user');
//    let pass = document.querySelector('#pass');

//    console.log('Username:', user.value);
//    console.log('Password:', pass.value);
//    alert(`Username: ${user.value}\nPassword: ${pass.value}`);

//});

//OR

let form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.dir(form);

    let user = this.elements[0];// or form.elements[0]
    let pass = this.elements[1];// or form.elements[1]

    console.log('Username:', user.value);
    console.log('Password:', pass.value);
    alert(`Username: ${user.value}\nPassword: ${pass.value}`);
});