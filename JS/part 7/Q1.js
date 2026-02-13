const arrayAverage = (arr) => {
    let sum =0;
    for(let num of arr){
        sum += num;

    }
    return sum/arr.length;
}
let a = [1,2,3,4,5];
console.log(arrayAverage(a));