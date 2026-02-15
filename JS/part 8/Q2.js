const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const min = num.reduce((a,b) => {
    if(a<b){
        return a;
    }else{
        return b;
    }
} );
console.log(min);