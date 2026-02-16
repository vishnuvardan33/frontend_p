let arr = [1, 2, 3, 4, 5];
let sq = arr.map((el) => el * el);
console.log("The square of the array is :",sq);

let sum = arr.reduce((acc, el) => acc + el,0);
console.log("The sum of the array is :",sum);

let avg = sum / arr.length;
console.log("The average of the array is :",avg);