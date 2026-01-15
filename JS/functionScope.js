let greet = "Hello, World! g";

function changeGreet(){
    let greet = "Hello, Universe! f";
    console.log(greet);

    function innerGreet(){
        let greet = "Hello, Multiverse! e";
        console.log(greet);
    }
    innerGreet();

}
console.log(greet);
changeGreet();
