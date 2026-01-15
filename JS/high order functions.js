function multipleGreet(func,n){
    for(let i=1; i<=n; i++ ){
        func();
    }
}

let greet = function(){
    console.log("Hello, World!");
}
multipleGreet(greet, 3);
// This will print "Hello, World!" three times to the console.