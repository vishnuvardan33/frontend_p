// function getSum(n){
//     if(n <= 1) return n;
//     return n + getSum(n - 1);
// }
// console.log(getSum(5)); // Output: 15

let str = ["Hello", "  ", "World", "!"];

function concat(str){
    let result = "";
    for(let s of str){
        result += s;
    }
    return result;
}
console.log(concat(str)); // Output: "Hello  World!"