//async function greet(){
  //  return "Hello World";
//}
//greet();

async function greet(){
    //throw "weak connection"
    return "Hello World";
}


greet()
.then((result)=>{
    console.log("promise was resolved with: "+result);
})

.catch((error)=>{
    console.log("promise was rejected with: "+error);
})